// we exclude `undefined` in this intentionally - fuck `undefined`.
export type Serializable =
  | string
  | number
  | null
  | Record<string, Serializable>;
