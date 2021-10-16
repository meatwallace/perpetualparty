import { getPlaylist } from "./getPlaylist";
import { getPlaylistData } from "./getPlaylistData";
import { getTuneChain } from "./getTuneChain";

export function registerDebugUtils() {
  const __perpetualparty = {
    utils: {
      getPlaylist,
      getPlaylistData,
      getTuneChain,

      // stub out our `getInternalPlayer` call that that the
      // `YouTubePlayer` component will overwrite later
      getInternalPlayer: () => {}
    }
  };

  // TOOD: fix
  global.__perpetualparty = __perpetualparty;
}
