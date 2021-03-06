import { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { CurrentTrackInfo } from '@types';
import { getMSSeconds } from '@time-utils';
import { isDevelopment } from '../config';

type Props = CurrentTrackInfo & {};

export function YouTubePlayer(props: Props) {
  const offsetSeconds = getMSSeconds(props.offset);
  const ref = useRef<YouTube | null>(null);

  useEffect(() => {
    if (ref.current && isDevelopment) {
      // @ts-expect-error - we're attaching something to the global object
      global.__perpetualparty.utils.getInternalPlayer =
        ref.current.getInternalPlayer;
    }
  }, [ref]);

  useEffect(() => {
    ref.current?.getInternalPlayer().loadVideoById({
      videoId: props.videoID,
      startSeconds: offsetSeconds,
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
          playsinline: 0,
        },
      }}
      onReady={handleReady}
    />
  );
}

// TODO: fix type
function handleReady(event: any) {
  event.target.setVolume(100);
}
