import { Event } from '../types';

/**
 * loops through the provided array until it finds an event that was created
 * after the provided date (or now, by default). it is expected that the
 * provided array of events is ordered from oldest to newest on the `created`
 * property.
 */
export function getMostRecentEvent<T extends Event<string, any>>(
  events: Array<T>,
  date: Date = new Date(),
): T {
  const [firstEvent] = events;

  let currentIndex = 0;
  let mostRecentEvent = firstEvent;

  while (mostRecentEvent.created < date) {
    currentIndex = currentIndex + 1;

    const currentEvent = events[currentIndex];

    if (currentEvent.created > date) {
      break;
    }

    mostRecentEvent = currentEvent;
  }

  return mostRecentEvent;
}
