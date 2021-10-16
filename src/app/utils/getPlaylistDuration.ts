import { Tune } from "../types";

export function getPlaylistDuration(playlist: Array<Tune>): number {
  const duration = playlist.reduce(
    (duration, tune) => duration + tune.length,
    0
  );

  return duration;
}
