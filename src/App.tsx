import "./styles.css";

import { DebugInfo } from "./app/components/DebugInfo";
import { YouTubePlayer } from "./app/components/YouTubePlayer";
import { Platform } from "./app/types";
import { useCurrentTuneInfo } from "./app/hooks/useCurrentTuneInfo";

const PLATFORM_PLAYER_COMPONENT = {
  [Platform.YouTube]: YouTubePlayer
};

export default function App() {
  const currentTuneInfo = useCurrentTuneInfo();

  if (!currentTuneInfo) {
    return null;
  }

  const PlayerComponent = PLATFORM_PLAYER_COMPONENT[currentTuneInfo.platform];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <PlayerComponent {...currentTuneInfo} />
      <DebugInfo />
    </div>
  );
}
