import { Block } from '@chain';
import { PlaybackData } from '@types';

export function getPlaybackChainDebugTextList(
  chain: Array<Block<PlaybackData>>,
): Array<string> {
  // 0 - soMeYoUtubEID - aCrAzYBloCkChaInBloCkHaSH
  return chain
    .map(
      (block, index) =>
        `${index} - ${block.timestamp} - ${block.data.id} - ${block.hash}`,
    )
    .reverse();
}
