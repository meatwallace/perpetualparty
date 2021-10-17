import Prando from 'prando';
import { PlaybackData, Track } from '@types';
import { Block, createBlock, createGenesisBlock } from '@chain';
import { findLastIndex } from '@fn-utils';
import { getPlaylistSortedByAdded, isTrackDisabledAtDate } from '@playlist';

export async function getPlaybackChain(): Promise<Array<Block<PlaybackData>>> {
  const playlist = getPlaylistSortedByAdded();
  const [firstTrack] = playlist;
  const partyStartedAt = firstTrack.added.getTime();
  const arrivedAt = Date.now();

  // set up our initial chain
  const genesisBlock = await createGenesisBlock(firstTrack.added, {
    ...firstTrack,
    index: 0,
  });

  const chain = [genesisBlock];

  let currentTrackStarted = partyStartedAt;

  // each iteration represents one track played.
  while (currentTrackStarted < arrivedAt) {
    const latestBlock = chain[chain.length - 1];
    const currentTrackIndex = latestBlock.data.index;
    const currentTrack = playlist[currentTrackIndex];
    const nextTrackStarts = currentTrackStarted + currentTrack.length;

    // if the latest track on the chain ends after the time we arrived, then it's the current track
    // and we can safely bail out here.
    if (nextTrackStarts > arrivedAt) {
      break;
    }

    // calculate our last possible track index, which set the bounds of the tracks available at the
    // current time in the loop.
    const firstPossibleTrackIndex = 0;
    const lastPossibleTrackIndex = findLastIndex<Track>(
      Object.values(playlist),
      (track) => track.added.getTime() < nextTrackStarts,
    );

    // create a random number generator using the hash of the current track block as a seed. this
    // means we can 'randomly' select the next track in a deterministic fashion.
    const rng = new Prando(latestBlock.hash);

    let nextTrackIndex = currentTrackIndex;

    const isSameTrack = () => nextTrackIndex === currentTrackIndex;

    const isTrackDisabled = () =>
      isTrackDisabledAtDate(
        playlist[nextTrackIndex],
        new Date(nextTrackStarts),
      );

    // if the next track is the same as the current track or it's disabled, rng a different track.
    while (isSameTrack() || isTrackDisabled()) {
      nextTrackIndex = rng.nextInt(
        firstPossibleTrackIndex,
        lastPossibleTrackIndex,
      );
    }

    const nextTrack = playlist[nextTrackIndex];

    const nextBlock = await createBlock({
      timestamp: new Date(nextTrackStarts).toISOString(),
      index: latestBlock.index + 1,
      precedingHash: latestBlock.hash,
      data: {
        ...nextTrack,
        index: nextTrackIndex,
      },
    });

    chain.push(nextBlock);

    currentTrackStarted = nextTrackStarts;
  }

  return chain;
}
