import { EnableTrackEvent, EventType } from '../types';
import { Event } from '../../events/types';

export function isEnableTrackEvent(
  // TODO: i dont like using `any` here but im sick of having to pass generics everywhere.
  // can i avoid this? where is the * operator from flow pls?
  event: Event<any, any>,
): event is EnableTrackEvent {
  return event.type === EventType.EnableTrack;
}
