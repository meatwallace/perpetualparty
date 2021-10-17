import { Track } from '@types';
import { getMostRecentEvent } from '@events';
import { getEnableTrackEventsByTrackID } from './getEnableTrackEventsByTrackID';
import { getDisableTrackEventsByTrackID } from './getDisableTrackEventsByTrackID';

export function isTrackDisabledAtDate(track: Track, date: Date): boolean {
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

  const mostRecentDisableTrackEvent = getMostRecentEvent(
    disableTrackEvents,
    date,
  );

  const mostRecentEnableTrackEvent = getMostRecentEvent(
    enableTrackEvents,
    date,
  );

  // if our most recent disable event was more recent than the most recent enable event,
  // then we know the track is disabled
  return (
    mostRecentDisableTrackEvent.created > mostRecentEnableTrackEvent.created
  );
}
