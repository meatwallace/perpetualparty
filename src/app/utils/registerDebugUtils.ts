import { getPlaylist, getPlaylistTrackMap } from '@playlist';
import { getPlaybackChain } from '@playback';

export function registerDebugUtils() {
  const __perpetualparty = {
    utils: {
      getPlaylist,
      getPlaylistTrackMap,
      getPlaybackChain,

      // stub out our `getInternalPlayer` call that that the
      // `YouTubePlayer` component will overwrite later
      getInternalPlayer: () => {},
    },
  };

  // @ts-expect-error - we're attaching something to the global object
  global.__perpetualparty = __perpetualparty;
}
