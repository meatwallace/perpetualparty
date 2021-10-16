import { createEvent } from "../../events/utils/createEvent";
import { AddTuneEventData, AddTuneEvent, EventType } from "../types";
import { getTrackID } from "./getTrackID";

export function createAddTuneEvent(
  data: Omit<AddTuneEventData, "id">
): AddTuneEvent {
  return createEvent({
    type: EventType.AddTune,
    created: data.added,
    data: {
      id: getTrackID(data.platform, data.videoID),
      ...data
    }
  });
}
