import { CurrentTuneInfo, Tune } from "../types";
import { getTuneChain } from "./getTuneChain";

export async function getCurrentTuneInfo(
  playlist: Array<Tune>
): Promise<CurrentTuneInfo> {
  const chain = await getTuneChain(playlist);
  const latestBlock = chain[chain.length - 1];

  return {
    ...latestBlock.data,
    offset: Date.now() - new Date(latestBlock.timestamp).getTime()
  };
}
