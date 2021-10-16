import { EnableTrackEvent } from '../types';

export function getMostRecentEnableTrackEvent(
  enableTrackEvents: Array<EnableTrackEvent>,
  date: Date = new Date(),
): EnableTrackEvent {
  const [firstEnableTrackEvent] = enableTrackEvents;

  let currentIndex = 0;
  let mostRecentEnableTrackEvent = firstEnableTrackEvent;

  while (mostRecentEnableTrackEvent.created < date) {
    currentIndex = currentIndex + 1;

    const currentEvent = enableTrackEvents[currentIndex];

    if (currentEvent.created > date) {
      break;
    }

    mostRecentEnableTrackEvent = currentEvent;
  }

  return mostRecentEnableTrackEvent;
}
