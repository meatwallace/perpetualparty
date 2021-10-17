import { useCurrentTrackInfo } from '@playback';
import { DebugInfo } from './components/DebugInfo';
import { getPlatformPlayerComponent } from './utils/getPlatformPlayerComponent';

export function App() {
  const currentTrackInfo = useCurrentTrackInfo();

  if (!currentTrackInfo) {
    return null;
  }

  const PlayerComponent = getPlatformPlayerComponent(currentTrackInfo.platform);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <PlayerComponent {...currentTrackInfo} />
      <DebugInfo />
    </div>
  );
}
