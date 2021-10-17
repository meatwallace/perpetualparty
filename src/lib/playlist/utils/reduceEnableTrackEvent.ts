import { PlaylistTrackMap, EnableTrackEvent } from '@types';

export function reduceEnableTrackEvent(
  playlist: PlaylistTrackMap,
  event: EnableTrackEvent,
): PlaylistTrackMap {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: null,
    },
  };
}
