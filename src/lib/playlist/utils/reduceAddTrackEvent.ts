import invariant from 'tiny-invariant';
import { AddTrackEvent, PlaylistTrackMap } from '@types';

export function reduceAddTrackEvent(
  playlist: PlaylistTrackMap,
  event: AddTrackEvent,
): PlaylistTrackMap {
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
