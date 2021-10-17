import { DisableTrackEvent, PlaylistEvent } from '@types';
import { getPlaylistEvents } from './getPlaylistEvents';
import { isDisableTrackEvent } from './isDisableTrackEvent';

export function getDisableTrackEvents(): Array<DisableTrackEvent> {
  return getPlaylistEvents().filter(isDisableTrackEvent);
}
