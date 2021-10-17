import { EventType } from '@types';
import { createIsEventCheck } from '@events';

export const isAddTrackEvent = createIsEventCheck(EventType.AddTrack);
