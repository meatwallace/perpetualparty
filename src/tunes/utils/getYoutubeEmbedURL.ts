import { TuneURLParts } from "../types";
import { getMSSeconds } from "../../time-utils/getMSSeconds";

export function getYoutubeEmbedURL(info: TuneURLParts): string {
  const offsetSeconds = getMSSeconds(info.offset);

  // TODO: build URL using something more robust
  return `https://www.youtube.com/embed/${info.id}?start=${offsetSeconds}&autoplay=1&modestbranding=1&playsinline=0`;
}
