import { playlistEvents } from '../data/playlistEvents';
import { PlaylistData } from '../types';
import { reducePlaylistEvents } from './reducePlaylistEvents';

export function getPlaylistData(): PlaylistData {
  return playlistEvents.reduce(reducePlaylistEvents, {});
}
