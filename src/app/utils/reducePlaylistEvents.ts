import { assertUnreachable } from '../../ts-utils/assertUnreachable';
import { EventType, PlaylistEvent, PlaylistData } from '../types';
import { reduceAddTrackEvent } from './reduceAddTrackEvent';
import { reduceDisableTrackEvent } from './reduceDisableTrackEvent';
import { reduceEnableTrackEvent } from './reduceEnableTrackEvent';

export function reducePlaylistEvents(
  playlistData: PlaylistData,
  event: PlaylistEvent,
): PlaylistData {
  switch (event.type) {
    case EventType.AddTrack:
      return reduceAddTrackEvent(playlistData, event);
    case EventType.DisableTrack:
      return reduceDisableTrackEvent(playlistData, event);
    case EventType.EnableTrack:
      return reduceEnableTrackEvent(playlistData, event);
  }

  // @ts-expect-error - when our switch statement is exhaustive, this
  // unreachable code is flagged by typescript as needless. by
  // flagging it with `expect-error` we will receive blocking linting
  // errors that would point you to here, and then you'd know you need
  // to cover a case!
  assertUnreachable(event.type);
}
