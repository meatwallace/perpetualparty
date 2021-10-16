import { getPlatformDisplayName } from "../../../utils/getPlatformDisplayName";
import { CurrentTuneInfo } from "../../../types";
import { getPrettyDateString } from "./getPrettyDateString";
import { getPrettyDuration } from "./getPrettyDuration";

export function getCurrentTuneDebugData(
  currentTuneInfo: CurrentTuneInfo
): Array<[string, string | number]> {
  return [
    ["ID", currentTuneInfo.id],
    ["Added", getPrettyDateString(currentTuneInfo.added)],
    ["Index", currentTuneInfo.index],
    ["Platform", getPlatformDisplayName(currentTuneInfo.platform)],
    ["Length", getPrettyDuration(currentTuneInfo.length)],
    ["Offset", getPrettyDuration(currentTuneInfo.offset)],
    ["Length (ms)", currentTuneInfo.length],
    ["Offfset (ms)", currentTuneInfo.offset]
  ];
}
