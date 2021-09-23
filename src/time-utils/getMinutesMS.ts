import { getSecondsMS } from "./getSecondsMS";

export function getMinutesMS(minutes: number): number {
  return getSecondsMS(minutes * 60);
}
