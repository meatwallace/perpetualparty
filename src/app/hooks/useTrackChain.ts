import { useState } from 'react';
import { Block } from '../../chain/types';
import { PlaybackData } from '../types';
import { useEffect } from 'react';
import { getTrackChain } from '../utils/getTrackChain';

export function useTrackChain(): Array<Block<PlaybackData>> | null {
  const [chain, setChain] = useState<Array<Block<PlaybackData>> | null>(null);

  useEffect(() => {
    (async () => {
      const latestChain = await getTrackChain();

      setChain(latestChain);
    })();
  }, []);

  return chain;
}
