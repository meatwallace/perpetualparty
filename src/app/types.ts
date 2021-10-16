import { Event } from "../events/types";

export enum Platform {
  YouTube
}

export type Tune = {
  id: string;
  videoID: string;
  added: Date;
  disabled: Date | null;
  platform: Platform;
  length: number;
};

export type PlaylistData = Record<string, Tune>;

export type Playlist = Array<Tune>;

export type PlaybackData = Tune & {
  index: number;
};

export type CurrentTuneInfo = PlaybackData & {
  offset: number;
};

export type PlayerProps = CurrentTuneInfo & {};

export type TuneURLParts = CurrentTuneInfo & {};

export enum EventType {
  AddTune = "ADD_TUNE",
  DisableTune = "DISABLE_TUNE",
  EnableTune = "ENABLE_TUNE"
}

export type AddTuneEventData = Tune & {};

export interface AddTuneEvent
  extends Event<EventType.AddTune, AddTuneEventData> {}

export type DisableTuneEventData = {
  id: string;
};

export interface DisableTuneEvent
  extends Event<EventType.DisableTune, DisableTuneEventData> {}

export type EnableTuneEventData = {
  id: string;
};

export interface EnableTuneEvent
  extends Event<EventType.EnableTune, EnableTuneEventData> {}

export type PlaylistEvents = AddTuneEvent | DisableTuneEvent | EnableTuneEvent;
