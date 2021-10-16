import { Duration } from './types';
import { getHoursMS } from './getHoursMS';
import { getMinutesMS } from './getMinutesMS';
import { getSecondsMS } from './getSecondsMS';

export function getDurationMS(duration: Duration): number {
  return (
    getHoursMS(duration.hours) +
    getMinutesMS(duration.minutes) +
    getSecondsMS(duration.seconds)
  );
}
