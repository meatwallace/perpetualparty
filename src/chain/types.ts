export type Block<Data> = {
  index: number;
  timestamp: string;
  precedingHash: string;
  data: Data;
  hash: string;
};
