import { assertUnreachable } from '@ts-utils';
import { EventType, PlaylistEvent, PlaylistTrackMap } from '@types';
import { reduceAddTrackEvent } from './reduceAddTrackEvent';
import { reduceDisableTrackEvent } from './reduceDisableTrackEvent';
import { reduceEnableTrackEvent } from './reduceEnableTrackEvent';

export function reducePlaylistEvents(
  map: PlaylistTrackMap,
  event: PlaylistEvent,
): PlaylistTrackMap {
  switch (event.type) {
    case EventType.AddTrack:
      return reduceAddTrackEvent(map, event);
    case EventType.DisableTrack:
      return reduceDisableTrackEvent(map, event);
    case EventType.EnableTrack:
      return reduceEnableTrackEvent(map, event);
  }

  // @ts-expect-error - when our switch statement is exhaustive, this
  // unreachable code is flagged by typescript as needless. by
  // flagging it with `expect-error` we will receive blocking linting
  // errors that would point you to here, and then you'd know you need
  // to cover a case!
  assertUnreachable(event.type);
}
