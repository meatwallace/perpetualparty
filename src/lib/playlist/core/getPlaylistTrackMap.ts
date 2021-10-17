import { PlaylistTrackMap } from '@types';
import { getPlaylistEvents } from './getPlaylistEvents';
import { reducePlaylistEvents } from '../utils/reducePlaylistEvents';

export function getPlaylistTrackMap(): PlaylistTrackMap {
  return getPlaylistEvents().reduce(reducePlaylistEvents, {});
}
