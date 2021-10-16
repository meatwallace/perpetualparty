import { formatDuration, intervalToDuration } from "date-fns";

export function getPrettyDuration(durationMS: number): string {
  const now = Date.now();

  const duration = intervalToDuration({
    start: new Date(now),
    end: new Date(now + durationMS)
  });

  return formatDuration(duration);
}
