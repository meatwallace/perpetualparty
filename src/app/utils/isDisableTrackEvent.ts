import { DisableTuneEvent, EventType } from "../types";
import { Event } from "../../events/types";

export function isDisableTrackEvent(
  // TODO: i dont like using `any` here but im sick of having to pass generics everywhere.
  // can i avoid this? where is the * operator from flow pls?
  event: Event<any, any>
): event is DisableTuneEvent {
  return event.type === EventType.DisableTune;
}
