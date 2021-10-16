import { EnableTrackEvent } from '../types';
import { getEnableTrackEvents } from './getEnableTrackEvents';

export function getEnableTrackEventsByTrackID(
  trackID: string,
): Array<EnableTrackEvent> {
  return getEnableTrackEvents().filter((event) => event.data.id === trackID);
}
