import { DisableTrackEvent } from '../types';
import { playlistEvents } from '../data/playlistEvents';
import { isDisableTrackEvent } from './isDisableTrackEvent';

export function getDisableTrackEvents(): Array<DisableTrackEvent> {
  return playlistEvents.filter(isDisableTrackEvent);
}
