import { assertUnreachable } from "../../ts-utils/assertUnreachable";
import { EventType, PlaylistEvents, PlaylistData } from "../types";
import { reduceAddTuneEvent } from "./reduceAddTuneEvent";
import { reduceDisableTuneEvent } from "./reduceDisableTuneEvent";
import { reduceEnableTuneEvent } from "./reduceEnableTuneEvent";

export function reducePlaylistEvents(
  playlistData: PlaylistData,
  event: PlaylistEvents
): PlaylistData {
  switch (event.type) {
    case EventType.AddTune:
      return reduceAddTuneEvent(playlistData, event);
    case EventType.DisableTune:
      return reduceDisableTuneEvent(playlistData, event);
    case EventType.EnableTune:
      return reduceEnableTuneEvent(playlistData, event);
  }

  // @ts-expect-error - when our switch statement is exhaustive, this
  // unreachable code is flagged by typescript as needless. by
  // flagging it with `expect-error` we will receive blocking linting
  // errors that would point you to here, and then you'd know you need
  // to cover a case!
  assertUnreachable(event.type);
}
