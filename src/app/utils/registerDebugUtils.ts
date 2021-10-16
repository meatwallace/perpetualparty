import { getPlaylist } from './getPlaylist';
import { getPlaylistData } from './getPlaylistData';
import { getTrackChain } from './getTrackChain';

export function registerDebugUtils() {
  const __perpetualparty = {
    utils: {
      getPlaylist,
      getPlaylistData,
      getTrackChain,

      // stub out our `getInternalPlayer` call that that the
      // `YouTubePlayer` component will overwrite later
      getInternalPlayer: () => {},
    },
  };

  // @ts-expect-error - we're attaching something to the global object
  global.__perpetualparty = __perpetualparty;
}
