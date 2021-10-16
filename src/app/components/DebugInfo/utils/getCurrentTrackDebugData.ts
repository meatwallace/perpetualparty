import { getPlatformDisplayName } from '../../../utils/getPlatformDisplayName';
import { CurrentTrackInfo } from '../../../types';
import { getPrettyDateString } from './getPrettyDateString';
import { getPrettyDuration } from './getPrettyDuration';

export function getCurrentTrackDebugData(
  currentTrackInfo: CurrentTrackInfo,
): Array<[string, string | number]> {
  return [
    ['ID', currentTrackInfo.id],
    ['Added', getPrettyDateString(currentTrackInfo.added)],
    ['Index', currentTrackInfo.index],
    ['Platform', getPlatformDisplayName(currentTrackInfo.platform)],
    ['Length', getPrettyDuration(currentTrackInfo.length)],
    ['Offset', getPrettyDuration(currentTrackInfo.offset)],
    ['Length (ms)', currentTrackInfo.length],
    ['Offfset (ms)', currentTrackInfo.offset],
  ];
}
