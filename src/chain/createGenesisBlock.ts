import { Block } from "./types";
import { createBlock } from "./createBlock";

export async function createGenesisBlock<Data>(
  date: Date,
  data: Data
): Promise<Block<Data>> {
  const block = await createBlock<Data>({
    index: 0,
    timestamp: date.toISOString(),
    precedingHash: "",
    data
  });

  return block;
}
