import { createEvent } from '@events';
import { EnableTrackEvent, EventType, Platform } from '@types';
import { getTrackID } from './getTrackID';

type EventData = {
  platform: Platform;
  videoID: string;
  enabled: Date;
};

export function createEnableTrackEvent(data: EventData): EnableTrackEvent {
  return createEvent({
    type: EventType.EnableTrack,
    created: data.enabled,
    data: {
      id: getTrackID(data.platform, data.videoID),
    },
  });
}
