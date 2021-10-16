import { PlaylistData, EnableTrackEvent } from '../types';

export function reduceEnableTrackEvent(
  playlist: PlaylistData,
  event: EnableTrackEvent,
): PlaylistData {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: null,
    },
  };
}
