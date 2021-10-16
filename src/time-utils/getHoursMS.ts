import { getMinutesMS } from './getMinutesMS';

export function getHoursMS(hours: number): number {
  return getMinutesMS(hours * 60);
}
