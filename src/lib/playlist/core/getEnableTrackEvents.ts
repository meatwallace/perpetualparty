import { EnableTrackEvent, PlaylistEvent } from '@types';
import { getPlaylistEvents } from './getPlaylistEvents';
import { isEnableTrackEvent } from './isEnableTrackEvent';

export function getEnableTrackEvents(): Array<EnableTrackEvent> {
  return getPlaylistEvents().filter(isEnableTrackEvent);
}
