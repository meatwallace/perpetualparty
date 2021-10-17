import { getPlaylistDuration } from '@playlist';
import { Track } from '@types';
import { getDurationString } from '../../../utils/getDurationString';
import { getPrettyDateString } from './getPrettyDateString';

export function getPlaylistDebugData(
  playlist: Array<Track>,
): Array<[string, string | number]> {
  return [
    ['Created', getPrettyDateString(playlist[0].added)],
    ['Tracks', playlist.length],
    ['Total Duration', getDurationString(getPlaylistDuration(playlist))],
  ];
}
