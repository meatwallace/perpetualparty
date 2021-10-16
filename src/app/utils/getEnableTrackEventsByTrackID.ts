import { EnableTuneEvent } from "../types";
import { getEnableTrackEvents } from "./getEnableTrackEvents";

export function getEnableTrackEventsByTrackID(
  trackID: string
): Array<EnableTuneEvent> {
  return getEnableTrackEvents().filter((event) => event.data.id === trackID);
}
