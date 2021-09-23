import { useCallback, useEffect, useState } from "react";
import { CurrentTuneInfo } from "../types";
import { getCurrentTuneInfo } from "../utils/getCurrentTuneInfo";
import { playlist } from "../data";

// keep track of our timeout outside of the component so we can track it across rerenders
let timeoutID: ReturnType<typeof setTimeout> | null = null;

export function useCurrentTuneInfo(): CurrentTuneInfo | null {
  const [
    currentTuneInfo,
    setCurrentTuneInfo
  ] = useState<CurrentTuneInfo | null>(null);

  // when our component mounts, set our initial tune info
  useEffect(() => {
    (async () => {
      const tuneInfo = await getCurrentTuneInfo(playlist);

      setCurrentTuneInfo(tuneInfo);
    })();
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
        const tuneInfo = await getCurrentTuneInfo(playlist);

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
