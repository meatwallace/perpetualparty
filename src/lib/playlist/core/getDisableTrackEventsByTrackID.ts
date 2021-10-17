import { DisableTrackEvent, PlaylistEvent } from '@types';
import { getDisableTrackEvents } from './getDisableTrackEvents';

export function getDisableTrackEventsByTrackID(
  trackID: string,
): Array<DisableTrackEvent> {
  return getDisableTrackEvents().filter((event) => event.data.id === trackID);
}
