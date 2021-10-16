import { Tune } from "../../../types";

export function getPlaylistDebugTextList(playlist: Array<Tune>): Array<string> {
  // 0 - soMeYoUtubEID
  return playlist.map(
    (tune, index) => `${index} - ${tune.added.toISOString()} - ${tune.id}`
  );
}
