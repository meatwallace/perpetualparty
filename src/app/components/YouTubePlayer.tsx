import { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { getMSSeconds } from "../../time-utils/getMSSeconds";
import { PlayerProps } from "../types";
import { isDevelopment } from "../../config";

type Props = PlayerProps & {};

export function YouTubePlayer(props: Props) {
  const offsetSeconds = getMSSeconds(props.offset);
  const ref = useRef<YouTube | null>(null);

  useEffect(() => {
    if (ref.current && isDevelopment) {
      // TODO: fix type
      global.__perpetualparty.utils.getInternalPlayer =
        ref.current.getInternalPlayer;
    }
  }, [ref]);

  useEffect(() => {
    ref.current?.getInternalPlayer().loadVideoById({
      videoId: props.videoID,
      startSeconds: offsetSeconds
    });
  }, [offsetSeconds, props.videoID, ref]);

  return (
    <YouTube
      ref={ref}
      className="iframe"
      containerClassName="player"
      opts={{
        playerVars: {
          fs: 1,
          autoplay: 1,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
          playsinline: 0
        }
      }}
      onReady={handleReady}
    />
  );
}

// TODO: fix type
function handleReady(event: any) {
  event.target.setVolume(100);
}
