import { createEvent } from '../../events/utils/createEvent';
import { AddTrackEventData, AddTrackEvent, EventType } from '../types';
import { getTrackID } from './getTrackID';

export function createAddTrackEvent(
  data: Omit<AddTrackEventData, 'id'>,
): AddTrackEvent {
  return createEvent({
    type: EventType.AddTrack,
    created: data.added,
    data: {
      id: getTrackID(data.platform, data.videoID),
      ...data,
    },
  });
}
