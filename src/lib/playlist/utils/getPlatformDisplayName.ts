import { Platform } from '@types';

const PLATFORM_DISPLAY_NAME = {
  [Platform.YouTube]: 'YouTube',
};

export function getPlatformDisplayName(platform: Platform): string {
  return PLATFORM_DISPLAY_NAME[platform];
}
