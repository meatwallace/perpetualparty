import { createEvent } from "../../events/utils/createEvent";
import { EnableTuneEvent, EventType, Platform } from "../types";
import { getTrackID } from "./getTrackID";

type EventData = {
  platform: Platform;
  videoID: string;
  enabled: Date;
};

export function createEnableTuneEvent(data: EventData): EnableTuneEvent {
  return createEvent({
    type: EventType.EnableTune,
    created: data.enabled,
    data: {
      id: getTrackID(data.platform, data.videoID)
    }
  });
}
