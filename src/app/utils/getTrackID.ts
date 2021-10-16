import { Platform } from "../types";
import { getPlatformDisplayName } from "./getPlatformDisplayName";

export function getTrackID(platform: Platform, videoID: string): string {
  return `${getPlatformDisplayName(platform)}#${videoID}`;
}
