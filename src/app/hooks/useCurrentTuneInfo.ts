import { useCallback, useEffect, useState } from "react";
import { CurrentTuneInfo, PlaybackData } from "../types";
import { Block } from "../../chain/types";
import { getCurrentTuneInfo } from "../utils/getCurrentTuneInfo";
import { getTuneChain } from "../utils/getTuneChain";

// keep track of our timeout outside of the component so we can track it across rerenders
let timeoutID: ReturnType<typeof setTimeout> | null = null;

export function useCurrentTuneInfo(
  providedChain: Array<Block<PlaybackData>> | null = null
): CurrentTuneInfo | null {
  const [
    currentTuneInfo,
    setCurrentTuneInfo
  ] = useState<CurrentTuneInfo | null>(null);

  const [chain, setChain] = useState<Array<Block<PlaybackData>> | null>(
    providedChain
  );

  // when our component mounts, get our tune chain if we didn't receive it as an arg
  // then get our initial tune info
  useEffect(() => {
    (async () => {
      const latestChain = chain ?? (await getTuneChain());

      if (chain !== latestChain) {
        setChain(latestChain);
      }

      const tuneInfo = getCurrentTuneInfo(latestChain);

      setCurrentTuneInfo(tuneInfo);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // this sets up a recursive timeout to go to the next tune when our current ends
  const setNextTuneTimeout = useCallback(() => {
    // bail out early if we don't have our current tune info yet or we've
    // already got an active timeout
    if (!currentTuneInfo || timeoutID) {
      return;
    }

    const timeBeforeTrackEnds = currentTuneInfo.length - currentTuneInfo.offset;

    timeoutID = setTimeout(() => {
      timeoutID = null;

      (async () => {
        const latestChain = await getTuneChain();

        setChain(latestChain);

        const tuneInfo = getCurrentTuneInfo(latestChain);

        setCurrentTuneInfo(tuneInfo);
      })();

      setNextTuneTimeout();
    }, timeBeforeTrackEnds);
  }, [currentTuneInfo]);

  // when our current tune info changes, set up a timeout to change to the next tune
  useEffect(() => {
    setNextTuneTimeout();

    // obligitory timeout cleanup
    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [setNextTuneTimeout]);

  return currentTuneInfo;
}
