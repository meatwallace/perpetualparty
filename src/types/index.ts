// we exclude `undefined` in this intentionally - fuck `undefined`.
type _Serializable = string | number | null | Date;

export type Serializable = _Serializable | Record<string, _Serializable>;
