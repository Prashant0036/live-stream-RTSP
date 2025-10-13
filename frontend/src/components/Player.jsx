import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import "./Player.css"

const Player = ({ streamUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!streamUrl) return;

    const video = videoRef.current;

    // If browser supports HLS natively (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else {
      console.error("HLS not supported in this browser.");
    }
  }, [streamUrl]);

  return (
    <div id="container" >
      <video
        ref={videoRef}
        controls >

    </video>
    </div>
  );
};

export default Player;
