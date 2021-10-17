import { Track } from './core';

export type PlaybackData = Track & {
  index: number;
};

export type CurrentTrackInfo = PlaybackData & {
  offset: number;
};
