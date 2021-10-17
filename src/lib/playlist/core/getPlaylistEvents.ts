import { PlaylistEvent } from '@types';
import { playlistEvents } from '../data/playlistEvents';

export function getPlaylistEvents(): Array<PlaylistEvent> {
  return [...playlistEvents];
}
