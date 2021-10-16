import invariant from 'tiny-invariant';
import { AddTrackEvent, PlaylistData } from '../types';

export function reduceAddTrackEvent(
  playlist: PlaylistData,
  event: AddTrackEvent,
): PlaylistData {
  const trackExists = Boolean(playlist[event.data.id]);

  invariant(
    !trackExists,
    `cannot add the same track twice! (${event.data.id}))`,
  );

  return {
    ...playlist,
    [event.data.id]: event.data,
  };
}
