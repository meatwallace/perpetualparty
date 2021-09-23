import Prando from "prando";
import { Block } from "../../chain/types";
import { createBlock } from "../../chain/createBlock";
import { createGenesisBlock } from "../../chain/createGenesisBlock";
import { findLastIndex } from "../../fn-utils/findLastIndex";
import { PlaybackData, Tune } from "../types";

export async function getTuneChain(
  playlist: Array<Tune>
): Promise<Array<Block<PlaybackData>>> {
  const [firstTune] = playlist;
  const partyStartedAt = firstTune.added.getTime();
  const arrivedAt = Date.now();

  // set up our initial chain
  const genesisBlock = await createGenesisBlock(firstTune.added, {
    ...firstTune,
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
    const lastPossibleTuneIndex = findLastIndex(
      playlist,
      (tune) => tune.added.getTime() < nextTuneStarts
    );

    // create a random number generator using the hash of the current tune block as a seed. this
    // means we can 'randomly' select the next track in a deterministic fashion.
    const rng = new Prando(latestBlock.hash);

    let nextTuneIndex = currentTuneIndex;

    // while our next tune is the same as the current tune, randomize a new next tune
    while (nextTuneIndex === currentTuneIndex) {
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
