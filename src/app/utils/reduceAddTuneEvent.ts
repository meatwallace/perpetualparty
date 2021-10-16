import invariant from "tiny-invariant";
import { AddTuneEvent, PlaylistData } from "../types";

export function reduceAddTuneEvent(
  playlist: PlaylistData,
  event: AddTuneEvent
): PlaylistData {
  const trackExists = Boolean(playlist[event.data.id]);

  invariant(
    !trackExists,
    `cannot add the same track twice! (${event.data.id}))`
  );

  return {
    ...playlist,
    [event.data.id]: event.data
  };
}
