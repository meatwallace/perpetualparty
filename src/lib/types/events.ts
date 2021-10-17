import { Event } from '@events';
import { Track } from './core';

export enum EventType {
  AddTrack = 'ADD_TRACK',
  DisableTrack = 'DISABLE_TRACK',
  EnableTrack = 'ENABLE_TRACK',
}

export type AddTrackEventData = Track & {};

export interface AddTrackEvent extends Event<EventType.AddTrack, Track> {}

export type DisableTrackEventData = {
  id: string;
};

export interface DisableTrackEvent
  extends Event<EventType.DisableTrack, DisableTrackEventData> {}

export type EnableTrackEventData = {
  id: string;
};

export interface EnableTrackEvent
  extends Event<EventType.EnableTrack, EnableTrackEventData> {}

export type PlaylistEvent =
  | AddTrackEvent
  | DisableTrackEvent
  | EnableTrackEvent;
