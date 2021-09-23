import { getPlaylistDuration } from "../utils/getPlaylistDuration";
import { playlist } from "../data";

export function Stats() {
  return (
    <div>
      <span>Current Playlist Duration:</span> {getPlaylistDuration(playlist)}
    </div>
  );
}
