import { DisableTrackEvent, PlaylistTrackMap } from '@types';

export function reduceDisableTrackEvent(
  playlist: PlaylistTrackMap,
  event: DisableTrackEvent,
): PlaylistTrackMap {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: event.created,
    },
  };
}
