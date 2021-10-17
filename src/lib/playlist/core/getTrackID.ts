import { Platform } from '@types';
import { getPlatformDisplayName } from '../utils/getPlatformDisplayName';

export function getTrackID(platform: Platform, videoID: string): string {
  return `${getPlatformDisplayName(platform)}#${videoID}`;
}
