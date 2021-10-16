import { useState } from "react";
import { Block } from "../../chain/types";
import { PlaybackData } from "../types";
import { useEffect } from "react";
import { getTuneChain } from "../utils/getTuneChain";

export function useTuneChain(): Array<Block<PlaybackData>> | null {
  const [chain, setChain] = useState<Array<Block<PlaybackData>> | null>(null);

  useEffect(() => {
    (async () => {
      const latestChain = await getTuneChain();

      setChain(latestChain);
    })();
  }, []);

  return chain;
}
