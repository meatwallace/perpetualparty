export enum Platform {
  Youtube
}

export type Tune = {
  added: Date;
  id: string;
  platform: Platform;
  length: number;
};

export type PlaybackData = Tune & {
  index: number;
};

export type CurrentTuneInfo = PlaybackData & {
  offset: number;
};

export type PlayerProps = CurrentTuneInfo & {};

export type TuneURLParts = CurrentTuneInfo & {};
