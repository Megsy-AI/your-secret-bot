import { useEffect, useRef } from "react";
import Hls from "hls.js";

const VIDEO_SRC = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

/** Global fullscreen video background shared by every page (dark hero style). */
const StarryBackground = () => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    let hls: Hls | null = null;
    if (v.canPlayType("application/vnd.apple.mpegurl")) {
      v.src = VIDEO_SRC;
    } else if (Hls.isSupported()) {
      hls = new Hls({ capLevelToPlayerSize: true });
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(v);
      hls.on(Hls.Events.ERROR, (_e, d) => {
        if (d.fatal) {
          hls?.destroy();
          hls = null;
          v.src = "/bg-loop.mp4";
          void v.play().catch(() => undefined);
        }
      });
    } else {
      v.src = "/bg-loop.mp4";
    }
    const play = () => void v.play().catch(() => undefined);
    play();
    document.addEventListener("touchstart", play, { once: true });
    document.addEventListener("click", play, { once: true });
    const onVisibility = () => (document.hidden ? v.pause() : play());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      hls?.destroy();
      document.removeEventListener("touchstart", play);
      document.removeEventListener("click", play);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="liquid-bg" aria-hidden="true">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
};

export default StarryBackground;
