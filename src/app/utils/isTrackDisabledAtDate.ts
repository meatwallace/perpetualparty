import { DisableTuneEvent, Tune } from "../types";
import { getDisableTrackEvents } from "./getDisableTrackEvents";
import { getMostRecentEnableTrackEvent } from "./getMostRecentEnableTrackEvent";
import { getEnableTrackEventsByTrackID } from "./getEnableTrackEventsByTrackID";

export function isTrackDisabledAtDate(track: Tune, date: Date): boolean {
  const disableTrackEvents = getDisableTrackEventsByTrackID(track.id);

  // if we've got no disable events then we can safely say it's not disabled
  if (disableTrackEvents.length === 0) {
    return false;
  }

  const [firstDisableTrackEvent] = disableTrackEvents;
  const isFirstDisableTrackEventRelevant =
    firstDisableTrackEvent.created < date;

  // if the first disable event is ahead of the date we're comparing to, then it's not disabled yet
  if (!isFirstDisableTrackEventRelevant) {
    return false;
  }

  const enableTrackEvents = getEnableTrackEventsByTrackID(track.id);

  // if our first disable track event is relevant and we we ONLY have disable track events
  // (read: no enable track events), we can be sure it's disabled
  if (
    isFirstDisableTrackEventRelevant &&
    disableTrackEvents.length >= 1 &&
    enableTrackEvents.length === 0
  ) {
    return true;
  }

  const mostRecentDisableTrackEvent = getMostRecentDisableTrackEvent(
    disableTrackEvents,
    date
  );

  const mostRecentEnableTrackEvent = getMostRecentEnableTrackEvent(
    enableTrackEvents,
    date
  );

  // if our most recent disable event was more recent than the most recent enable event,
  // then we know the track is disabled
  return (
    mostRecentDisableTrackEvent.created > mostRecentEnableTrackEvent.created
  );
}

export function getMostRecentDisableTrackEvent(
  disableTrackEvents: Array<DisableTuneEvent>,
  date: Date = new Date()
): DisableTuneEvent {
  const [firstDisableTrackEvent] = disableTrackEvents;

  let currentDisableIndex = 0;
  let mostRecentDisableTrackEvent = firstDisableTrackEvent;

  while (mostRecentDisableTrackEvent.created < date) {
    currentDisableIndex = currentDisableIndex + 1;

    const currentEvent = disableTrackEvents[currentDisableIndex];

    if (currentEvent.created > date) {
      break;
    }

    mostRecentDisableTrackEvent = currentEvent;
  }

  return mostRecentDisableTrackEvent;
}

export function getDisableTrackEventsByTrackID(
  trackID: string
): Array<DisableTuneEvent> {
  return getDisableTrackEvents().filter((event) => event.data.id === trackID);
}
