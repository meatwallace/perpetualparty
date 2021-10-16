import { EnableTrackEvent } from '../types';
import { playlistEvents } from '../data/playlistEvents';
import { isEnableTrackEvent } from './isEnableTrackEvent';

export function getEnableTrackEvents(): Array<EnableTrackEvent> {
  return playlistEvents.filter(isEnableTrackEvent);
}
