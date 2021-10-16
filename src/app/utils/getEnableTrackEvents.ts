import { EnableTuneEvent } from "../types";
import { playlistEvents } from "../data/playlistEvents";
import { isEnableTrackEvent } from "./isEnableTrackEvent";

export function getEnableTrackEvents(): Array<EnableTuneEvent> {
  return playlistEvents.filter(isEnableTrackEvent);
}
