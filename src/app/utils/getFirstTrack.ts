import { getPlaylistSortedByAdded } from "./getPlaylistSortedByAdded";

export function getFirstTrack() {
  const [firstTrack] = getPlaylistSortedByAdded();

  return firstTrack;
}
