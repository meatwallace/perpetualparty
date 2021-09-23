import "./styles.css";

// import { DebugInfo } from "./tunes/components/DebugInfo";
// import { Stats } from "./tunes/components/Stats";
import { Platform } from "./tunes/types";
import { useCurrentTuneInfo } from "./tunes/hooks/useCurrentTuneInfo";
import { YoutubePlayer } from "./tunes/components/YoutubePlayer";

const PLATFORM_PLAYER_COMPONENT = {
  [Platform.Youtube]: YoutubePlayer
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
      {/* <Stats /> */}
      {/* <DebugInfo data={{ tune, offset }} /> */}
    </div>
  );
}
