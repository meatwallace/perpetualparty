import { DisableTrackEvent, EventType, PlaylistEvent } from '../types';

export function isDisableTrackEvent(
  event: PlaylistEvent,
): event is DisableTrackEvent {
  return event.type === EventType.DisableTrack;
}
