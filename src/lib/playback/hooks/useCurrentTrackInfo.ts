import { useCallback, useEffect, useState } from 'react';
import { CurrentTrackInfo, PlaybackData } from '@types';
import { Block } from '@chain';
import { getPlaybackChain } from '../core/getPlaybackChain';
import { getCurrentTrackInfo } from '../core/getCurrentTrackInfo';

// keep track of our timeout outside of the component so we can track it across rerenders
let timeoutID: ReturnType<typeof setTimeout> | null = null;

export function useCurrentTrackInfo(
  providedChain: Array<Block<PlaybackData>> | null = null,
): CurrentTrackInfo | null {
  const [currentTrackInfo, setCurrentTrackInfo] =
    useState<CurrentTrackInfo | null>(null);

  const [chain, setChain] = useState<Array<Block<PlaybackData>> | null>(
    providedChain,
  );

  // when our component mounts, get our track chain if we didn't receive it as an arg
  // then get our initial track info
  useEffect(() => {
    (async () => {
      const latestChain = chain ?? (await getPlaybackChain());

      if (chain !== latestChain) {
        setChain(latestChain);
      }

      const trackInfo = getCurrentTrackInfo(latestChain);

      setCurrentTrackInfo(trackInfo);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // this sets up a recursive timeout to go to the next track when our current ends
  const setNextTrackTimeout = useCallback(() => {
    // bail out early if we don't have our current track info yet or we've
    // already got an active timeout
    if (!currentTrackInfo || timeoutID) {
      return;
    }

    const timeBeforeTrackEnds =
      currentTrackInfo.length - currentTrackInfo.offset;

    timeoutID = setTimeout(() => {
      timeoutID = null;

      (async () => {
        const latestChain = await getPlaybackChain();

        setChain(latestChain);

        const trackInfo = getCurrentTrackInfo(latestChain);

        setCurrentTrackInfo(trackInfo);
      })();

      setNextTrackTimeout();
    }, timeBeforeTrackEnds);
  }, [currentTrackInfo]);

  // when our current track info changes, set up a timeout to change to the next track
  useEffect(() => {
    setNextTrackTimeout();

    // obligitory timeout cleanup
    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [setNextTrackTimeout]);

  return currentTrackInfo;
}
