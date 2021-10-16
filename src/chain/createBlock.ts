import { Block } from "./types";
import { getSHA256Hash } from "./getSHA256Hash";

type BlockParts<Data> = {
  index: number;
  timestamp?: string;
  precedingHash: string;
  data: Data;
};

export async function createBlock<Data>(
  parts: BlockParts<Data>
): Promise<Block<Data>> {
  const block = {
    timestamp: new Date().toISOString(),
    hash: "",
    ...parts
  };

  const { hash, ...hashParts } = block;

  block.hash = await getSHA256Hash(JSON.stringify(hashParts));

  return block;
}
