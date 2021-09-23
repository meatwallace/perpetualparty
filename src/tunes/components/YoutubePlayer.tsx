import { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { getMSSeconds } from "../../time-utils/getMSSeconds";
import { PlayerProps } from "../types";

type Props = PlayerProps & {};

// TODO: fix type
function handleReady(event: any) {
  event.target.setVolume(100);
}

export function YoutubePlayer(props: Props) {
  const offsetSeconds = getMSSeconds(props.offset);

  const ref = useRef<YouTube | null>(null);

  useEffect(() => {
    ref.current?.getInternalPlayer().loadVideoById({
      videoId: props.id,
      startSeconds: offsetSeconds
    });
  }, [offsetSeconds, props.id, ref]);

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
