import { intervalToDuration } from 'date-fns';

export function getDurationString(durationMS: number): string {
  const now = Date.now();

  const duration = intervalToDuration({
    start: new Date(now),
    end: new Date(now + durationMS),
  });

  return `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes, ${duration.seconds} seconds`;
}
