import { Playlist } from '@types';
import { getPlaylistTrackMap } from './getPlaylistTrackMap';

export function getPlaylist(): Playlist {
  const playlistTrackMap = getPlaylistTrackMap();
  const playlist = Object.values(playlistTrackMap);

  return playlist;
}
