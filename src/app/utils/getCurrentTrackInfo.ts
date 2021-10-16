import { Block } from '../../chain/types';
import { CurrentTrackInfo, PlaybackData } from '../types';

export function getCurrentTrackInfo(
  chain: Array<Block<PlaybackData>>,
): CurrentTrackInfo {
  const latestBlock = chain[chain.length - 1];

  return {
    ...latestBlock.data,
    offset: Date.now() - new Date(latestBlock.timestamp).getTime(),
  };
}
