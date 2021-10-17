import { EventType } from '@types';
import { createIsEventCheck } from '@events';

export const isDisableTrackEvent = createIsEventCheck(EventType.DisableTrack);
