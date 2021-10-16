import invariant from "tiny-invariant";
import { assertUnreachable } from "../../ts-utils/assertUnreachable";
import { PlaylistData, EnableTuneEvent } from "../types";

export function reduceEnableTuneEvent(
  playlist: PlaylistData,
  event: EnableTuneEvent
): PlaylistData {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: null
    }
  };
}
