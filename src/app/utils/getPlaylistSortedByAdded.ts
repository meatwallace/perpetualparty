import { getPlaylist } from './getPlaylist';

export function getPlaylistSortedByAdded() {
  const playlist = getPlaylist();

  return playlist.sort((a, b) => a.added.valueOf() - b.added.valueOf());
}
