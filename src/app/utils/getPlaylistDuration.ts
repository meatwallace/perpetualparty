import { Track } from '../types';

export function getPlaylistDuration(playlist: Array<Track>): number {
  const duration = playlist.reduce(
    (duration, track) => duration + track.length,
    0,
  );

  return duration;
}
