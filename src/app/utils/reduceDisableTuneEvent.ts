import { DisableTuneEvent, PlaylistData } from "../types";

export function reduceDisableTuneEvent(
  playlist: PlaylistData,
  event: DisableTuneEvent
): PlaylistData {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: event.created
    }
  };
}
