import { isProduction } from "../../../config";
import { renderIf } from "../../../hocs/renderIf";
import { useKeybindToggle } from "../../../hooks/useKeybindToggle";
import { useCurrentTuneInfo } from "../../hooks/useCurrentTuneInfo";
import { useTuneChain } from "../../hooks/useTuneChain";
import { getPlaylist } from "../../utils/getPlaylist";
import { getBlockchainDebugData } from "./utils/getBlockchainDebugData";
import { getCurrentTuneDebugData } from "./utils/getCurrentTuneDebugData";
import { getPlaylistDebugData } from "./utils/getPlaylistDebugData";
import { getPlaylistDebugTextList } from "./utils/getPlaylistDebugTextList";
import { getTuneChainDebugTextList } from "./utils/getTuneChainDebugTextList";
import { DebugInfoProperties } from "./DebugInfoProperties";
import { DebugInfoTextList } from "./DebugInfoTextList";

const TOGGLE_DEBUG_INFO_KEYBIND = "alt+d";

export function DebugInfo_() {
  const playlist = getPlaylist();
  const chain = useTuneChain();
  const currentTuneInfo = useCurrentTuneInfo(chain);
  const [isVisible, toggleIsVisible] = useKeybindToggle(
    TOGGLE_DEBUG_INFO_KEYBIND
  );

  if (!isVisible || !chain || !currentTuneInfo) {
    return null;
  }

  const blockchainDebugData = getBlockchainDebugData(chain);
  const playlistDebugData = getPlaylistDebugData(playlist);
  const currentTuneDebugData = getCurrentTuneDebugData(currentTuneInfo);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Debug Info</h2>
        <span style={styles.closeIcon} onClick={toggleIsVisible}>
          X
        </span>
      </header>
      <main style={styles.main}>
        <DebugInfoProperties
          title="Blockchain Info"
          data={blockchainDebugData}
        />
        <DebugInfoProperties title="Playlist Info" data={playlistDebugData} />
        <DebugInfoProperties
          title="Current Tune Info"
          data={currentTuneDebugData}
        />
        <DebugInfoTextList
          title="Playlist Log"
          items={getPlaylistDebugTextList(playlist)}
        />
        <DebugInfoTextList
          title="Blockchain Log"
          items={getTuneChainDebugTextList(chain)}
        />
      </main>
    </div>
  );
}

const styles = {
  container: {
    background: "hsl(250deg 44% 29% / 80%)",
    borderRadius: "5px",
    bottom: "16px",
    color: "#fafafa",
    display: "flex",
    fontFamily: "sans-serif",
    fontSize: "14px",
    flexFlow: "column nowrap",
    left: "16px",
    overflowX: "hidden",
    overflowY: "scroll",
    position: "fixed",
    right: "16px",
    top: "16px"
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "16px"
  },
  title: {
    marginBottom: "8px",
    fontSize: "18px"
  },
  main: {
    overflowX: "hidden",
    overflowY: "scroll",
    paddingBottom: "16px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px"
  },
  closeIcon: {
    fontWeight: 800,
    fontSize: 18
  }
};

// as we want this to be a development mode only tool we wrap it in a conditional render HOC
export const DebugInfo = renderIf(DebugInfo_, () => !isProduction);
