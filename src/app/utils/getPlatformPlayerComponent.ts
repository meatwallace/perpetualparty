import { Platform } from '@types';
import { YouTubePlayer } from '../components/YouTubePlayer';

const PLATFORM_PLAYER_COMPONENT = {
  [Platform.YouTube]: YouTubePlayer,
};

export function getPlatformPlayerComponent(platform: Platform) {
  return PLATFORM_PLAYER_COMPONENT[platform];
}
