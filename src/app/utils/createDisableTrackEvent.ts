import { createEvent } from '../../events/utils/createEvent';
import { DisableTrackEvent, EventType, Platform } from '../types';
import { getTrackID } from './getTrackID';

type EventData = {
  platform: Platform;
  videoID: string;
  disabled: Date;
};

export function createDisableTrackEvent(data: EventData): DisableTrackEvent {
  return createEvent({
    type: EventType.DisableTrack,
    created: data.disabled,
    data: {
      id: getTrackID(data.platform, data.videoID),
    },
  });
}
