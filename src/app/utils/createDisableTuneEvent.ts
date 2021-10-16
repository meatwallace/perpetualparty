import { createEvent } from "../../events/utils/createEvent";
import { DisableTuneEvent, EventType, Platform } from "../types";
import { getTrackID } from "./getTrackID";

type EventData = {
  platform: Platform;
  videoID: string;
  disabled: Date;
};

export function createDisableTuneEvent(data: EventData): DisableTuneEvent {
  return createEvent({
    type: EventType.DisableTune,
    created: data.disabled,
    data: {
      id: getTrackID(data.platform, data.videoID)
    }
  });
}
