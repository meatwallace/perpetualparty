import { Block } from "../../chain/types";
import { CurrentTuneInfo, PlaybackData } from "../types";

export function getCurrentTuneInfo(
  chain: Array<Block<PlaybackData>>
): CurrentTuneInfo {
  const latestBlock = chain[chain.length - 1];

  return {
    ...latestBlock.data,
    offset: Date.now() - new Date(latestBlock.timestamp).getTime()
  };
}
