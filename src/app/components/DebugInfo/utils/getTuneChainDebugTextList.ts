import { PlaybackData } from "../../../types";
import { Block } from "../../../../chain/types";

export function getTuneChainDebugTextList(
  chain: Array<Block<PlaybackData>>
): Array<string> {
  // 0 - soMeYoUtubEID - aCrAzYBloCkChaInBloCkHaSH
  return chain
    .map(
      (block, index) =>
        `${index} - ${block.timestamp} - ${block.data.id} - ${block.hash}`
    )
    .reverse();
}
