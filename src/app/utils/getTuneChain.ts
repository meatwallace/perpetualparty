import Prando from "prando";
import { Block } from "../../chain/types";
import { createBlock } from "../../chain/createBlock";
import { createGenesisBlock } from "../../chain/createGenesisBlock";
import { findLastIndex } from "../../fn-utils/findLastIndex";
import { PlaybackData, Tune } from "../types";
import { getPlaylistSortedByAdded } from "./getPlaylistSortedByAdded";
import { isTrackDisabledAtDate } from "./isTrackDisabledAtDate";

export async function getTuneChain(): Promise<Array<Block<PlaybackData>>> {
  const playlist = getPlaylistSortedByAdded();
  const [firstTrack] = playlist;
  const partyStartedAt = firstTrack.added.getTime();
  const arrivedAt = Date.now();

  // set up our initial chain
  const genesisBlock = await createGenesisBlock(firstTrack.added, {
    ...firstTrack,
    index: 0
  });

  const chain = [genesisBlock];

  let currentTuneStarted = partyStartedAt;

  // each iteration represents one track played.
  while (currentTuneStarted < arrivedAt) {
    const latestBlock = chain[chain.length - 1];
    const currentTuneIndex = latestBlock.data.index;
    const currentTune = playlist[currentTuneIndex];
    const nextTuneStarts = currentTuneStarted + currentTune.length;

    // if the latest tune on the chain ends after the time we arrived, then it's the current tune
    // and we can safely bail out here.
    if (nextTuneStarts > arrivedAt) {
      break;
    }

    // calculate our last possible tune index, which set the bounds of the tunes available at the
    // current time in the loop.
    const firstPossibleTuneIndex = 0;
    const lastPossibleTuneIndex = findLastIndex<Tune>(
      Object.values(playlist),
      (tune) => tune.added.getTime() < nextTuneStarts
    );

    // create a random number generator using the hash of the current tune block as a seed. this
    // means we can 'randomly' select the next track in a deterministic fashion.
    const rng = new Prando(latestBlock.hash);

    let nextTuneIndex = currentTuneIndex;

    const isSameTrack = () => nextTuneIndex === currentTuneIndex;

    const isTrackDisabled = () =>
      isTrackDisabledAtDate(playlist[nextTuneIndex], new Date(nextTuneStarts));

    // if the next track is the same as the current track or it's disabled, rng a different track.
    while (isSameTrack() || isTrackDisabled()) {
      nextTuneIndex = rng.nextInt(
        firstPossibleTuneIndex,
        lastPossibleTuneIndex
      );
    }

    const nextTune = playlist[nextTuneIndex];

    const nextBlock = await createBlock({
      timestamp: new Date(nextTuneStarts).toISOString(),
      index: latestBlock.index + 1,
      precedingHash: latestBlock.hash,
      data: {
        ...nextTune,
        index: nextTuneIndex
      }
    });

    chain.push(nextBlock);

    currentTuneStarted = nextTuneStarts;
  }

  return chain;
}
