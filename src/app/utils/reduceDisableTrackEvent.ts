import { DisableTrackEvent, PlaylistData } from '../types';

export function reduceDisableTrackEvent(
  playlist: PlaylistData,
  event: DisableTrackEvent,
): PlaylistData {
  return {
    ...playlist,
    [event.data.id]: {
      ...playlist[event.data.id],
      disabled: event.created,
    },
  };
}
