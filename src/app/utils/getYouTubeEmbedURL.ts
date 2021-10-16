import { getMSSeconds } from "../../time-utils/getMSSeconds";
import { TuneURLParts } from "../types";

export function getYouTubeEmbedURL(info: TuneURLParts): string {
  const offsetSeconds = getMSSeconds(info.offset);

  // TODO: build URL using something more robust
  return `https://www.youtube.com/embed/${info.id}?start=${offsetSeconds}&autoplay=1&modestbranding=1&playsinline=0`;
}