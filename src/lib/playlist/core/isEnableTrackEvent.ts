import { EventType } from '@types';
import { createIsEventCheck } from '@events';

export const isEnableTrackEvent = createIsEventCheck(EventType.EnableTrack);
