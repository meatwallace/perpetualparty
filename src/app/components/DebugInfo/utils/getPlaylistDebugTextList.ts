import { Track } from '@types';

export function getPlaylistDebugTextList(
  playlist: Array<Track>,
): Array<string> {
  // 0 - soMeYoUtubEID
  return playlist.map(
    (track, index) => `${index} - ${track.added.toISOString()} - ${track.id}`,
  );
}
