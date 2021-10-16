import { EnableTuneEvent } from "../types";

export function getMostRecentEnableTrackEvent(
  enableTrackEvents: Array<EnableTuneEvent>,
  date: Date = new Date()
): EnableTuneEvent {
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
