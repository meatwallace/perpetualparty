import { PlaybackData } from '../../../types';
import { Block } from '../../../../chain/types';
import { getPrettyDateString } from './getPrettyDateString';

export function getBlockchainDebugData(
  chain: Array<Block<PlaybackData>>,
): Array<[string, string | number]> {
  const genesisBlock = chain[0];
  const latestBlock = chain[chain.length - 1];

  return [
    ['Length', chain.length],
    ['Genesis', getPrettyDateString(new Date(genesisBlock.timestamp))],
    ['Genesis hash', chain[0].hash],
    [
      'Latest block added',
      getPrettyDateString(new Date(latestBlock.timestamp)),
    ],
    ['Latest block hash', latestBlock.hash],
    ['Size (JSON string, bytes)', new Blob([JSON.stringify(chain)]).size],
  ];
}
