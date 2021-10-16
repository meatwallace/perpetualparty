import { Playlist } from '../types';
import { getPlaylistData } from './getPlaylistData';

export function getPlaylist(): Playlist {
  const playlistData = getPlaylistData();
  const playlist = Object.values(playlistData);

  return playlist;
}
