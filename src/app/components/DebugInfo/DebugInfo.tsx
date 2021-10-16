import { isProduction } from '../../../config';
import { renderIf } from '../../../hocs/renderIf';
import { useKeybindToggle } from '../../../hooks/useKeybindToggle';
import { useCurrentTrackInfo } from '../../hooks/useCurrentTrackInfo';
import { useTrackChain } from '../../hooks/useTrackChain';
import { getPlaylist } from '../../utils/getPlaylist';
import { getBlockchainDebugData } from './utils/getBlockchainDebugData';
import { getCurrentTrackDebugData } from './utils/getCurrentTrackDebugData';
import { getPlaylistDebugData } from './utils/getPlaylistDebugData';
import { getPlaylistDebugTextList } from './utils/getPlaylistDebugTextList';
import { getTrackChainDebugTextList } from './utils/getTrackChainDebugTextList';
import { DebugInfoProperties } from './DebugInfoProperties';
import { DebugInfoTextList } from './DebugInfoTextList';

const TOGGLE_DEBUG_INFO_KEYBIND = 'alt+d';

export function DebugInfo_() {
  const playlist = getPlaylist();
  const chain = useTrackChain();
  const currentTrackInfo = useCurrentTrackInfo(chain);
  const [isVisible, toggleIsVisible] = useKeybindToggle(
    TOGGLE_DEBUG_INFO_KEYBIND,
  );

  if (!isVisible || !chain || !currentTrackInfo) {
    return null;
  }

  const blockchainDebugData = getBlockchainDebugData(chain);
  const playlistDebugData = getPlaylistDebugData(playlist);
  const currentTrackDebugData = getCurrentTrackDebugData(currentTrackInfo);

  return (
    <div
      style={{
        background: 'hsl(250deg 44% 29% / 80%)',
        borderRadius: '5px',
        bottom: '16px',
        color: '#fafafa',
        display: 'flex',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        flexFlow: 'column nowrap',
        left: '16px',
        overflowX: 'hidden',
        overflowY: 'scroll',
        position: 'fixed',
        right: '16px',
        top: '16px',
      }}
    >
      <header
        style={{
          alignItems: 'center',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          paddingBottom: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '16px',
        }}
      >
        <h2
          style={{
            marginBottom: '8px',
            fontSize: '18px',
          }}
        >
          Debug Info
        </h2>
        <span
          style={{
            fontWeight: 800,
            fontSize: 18,
          }}
          onClick={toggleIsVisible}
        >
          X
        </span>
      </header>
      <main
        style={{
          overflowX: 'hidden',
          overflowY: 'scroll',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '8px',
        }}
      >
        <DebugInfoProperties
          title="Blockchain Info"
          data={blockchainDebugData}
        />
        <DebugInfoProperties title="Playlist Info" data={playlistDebugData} />
        <DebugInfoProperties
          title="Current Track Info"
          data={currentTrackDebugData}
        />
        <DebugInfoTextList
          title="Playlist Log"
          items={getPlaylistDebugTextList(playlist)}
        />
        <DebugInfoTextList
          title="Blockchain Log"
          items={getTrackChainDebugTextList(chain)}
        />
      </main>
    </div>
  );
}

const styles = {
  header: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '16px',
  },
  title: {
    marginBottom: '8px',
    fontSize: '18px',
  },
  main: {
    overflowX: 'hidden',
    overflowY: 'scroll',
    paddingBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
  },
  closeIcon: {
    fontWeight: 800,
    fontSize: 18,
  },
};

// as we want this to be a development mode only tool we wrap it in a conditional render HOC
export const DebugInfo = renderIf(DebugInfo_, () => !isProduction);
