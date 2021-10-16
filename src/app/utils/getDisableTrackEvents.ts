import { DisableTuneEvent } from "../types";
import { playlistEvents } from "../data/playlistEvents";
import { isDisableTrackEvent } from "./isDisableTrackEvent";

export function getDisableTrackEvents(): Array<DisableTuneEvent> {
  return playlistEvents.filter(isDisableTrackEvent);
}
