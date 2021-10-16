import { Serializable } from '../../types';
import { Event } from '../types';

type EventProps<T extends string, D extends Serializable = null> = {
  type: T;
  data: D;
  created?: Date;
};

export function createEvent<T extends string, D extends Serializable = null>(
  event: EventProps<T, D>,
): Event<T, D> {
  return {
    type: event.type,
    created: event.created ?? new Date(),
    data: event.data,
  };
}
