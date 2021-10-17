import { Event } from '../types';

/**
 * returns a `fn` that verifies the provided event is the given type.
 * this uses TS' type predicates so that the event will be considered
 * the correct type if used as an `if` statement condition, etc.
 */
export function createIsEventCheck<
  ActualEventType extends string,
  ActualEvent extends Event<ActualEventType>,
>(type: ActualEventType) {
  return (event: Event<any, any>): event is Event<any, any> & ActualEvent => {
    return event.type === type;
  };
}
