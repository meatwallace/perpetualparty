import { useEffect, useState } from 'react';
import { PlaybackData } from '@types';
import { Block } from '@chain';
import { getPlaybackChain } from '../core/getPlaybackChain';

export function usePlaybackChain(): Array<Block<PlaybackData>> | null {
  const [chain, setChain] = useState<Array<Block<PlaybackData>> | null>(null);

  useEffect(() => {
    (async () => {
      const latestChain = await getPlaybackChain();

      setChain(latestChain);
    })();
  }, []);

  return chain;
}
