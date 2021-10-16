import { getPlaylistDuration } from "../../../utils/getPlaylistDuration";
import { getDurationString } from "../../../utils/getDurationString";
import { Tune } from "../../../types";
import { getPrettyDateString } from "./getPrettyDateString";

export function getPlaylistDebugData(
  playlist: Array<Tune>
): Array<[string, string | number]> {
  return [
    ["Created", getPrettyDateString(playlist[0].added)],
    ["Tunes", playlist.length],
    ["Total Duration", getDurationString(getPlaylistDuration(playlist))]
  ];
}
