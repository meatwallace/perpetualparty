import { Serializable } from '../types';

export interface Event<
  T extends string,
  D extends Serializable = Serializable,
> {
  type: T;
  data: D;
  created: Date;
}
