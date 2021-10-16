import { TuneURLParts } from "../types";

export function getYouTubeWatchURL(info: TuneURLParts): string {
  // TODO: build URL using something more robust
  return `https://www.youtube.com/watch?v=${info.id}`;
}
