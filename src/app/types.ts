import { Event } from '../events/types';

export enum Platform {
  YouTube,
}

export type Track = {
  id: string;
  videoID: string;
  added: Date;
  disabled: Date | null;
  platform: Platform;
  length: number;
};

export type PlaylistData = Record<string, Track>;

export type Playlist = Array<Track>;

export type PlaybackData = Track & {
  index: number;
};

export type CurrentTrackInfo = PlaybackData & {
  offset: number;
};

export type PlayerProps = CurrentTrackInfo & {};

export type TrackURLParts = CurrentTrackInfo & {};

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
