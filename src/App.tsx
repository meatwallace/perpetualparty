import './styles.css';

import { DebugInfo } from './app/components/DebugInfo';
import { YouTubePlayer } from './app/components/YouTubePlayer';
import { Platform } from './app/types';
import { useCurrentTrackInfo } from './app/hooks/useCurrentTrackInfo';

const PLATFORM_PLAYER_COMPONENT = {
  [Platform.YouTube]: YouTubePlayer,
};

export default function App() {
  const currentTrackInfo = useCurrentTrackInfo();

  if (!currentTrackInfo) {
    return null;
  }

  const PlayerComponent = PLATFORM_PLAYER_COMPONENT[currentTrackInfo.platform];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <PlayerComponent {...currentTrackInfo} />
      <DebugInfo />
    </div>
  );
}
