import { intervalToDuration } from "date-fns";
import { Tune } from "../types";

export function getPlaylistDuration(playlist: Array<Tune>): string {
  const now = Date.now();
  const playlistDuration = playlist.reduce(
    (duration, tune) => duration + tune.length,
    0
  );

  // ITS NOT THE MOST ELEGANT, BUT IT'LL DO.
  // maybe consider something nicer. ref: https://stackoverflow.com/q/13903897
  const duration = intervalToDuration({
    start: new Date(now),
    end: new Date(now + playlistDuration)
  });

  return `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes, ${duration.seconds} seconds`;
}
