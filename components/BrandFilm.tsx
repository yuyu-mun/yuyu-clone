"use client";

import { useRef, useState } from "react";

function Frame({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) v.play().catch(() => {});
    setMuted(next);
  };

  return (
    <div className={`ref-film-frame ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <button
        type="button"
        className="ref-film-sound"
        onClick={toggleSound}
        aria-label={muted ? "Unmute brand film" : "Mute brand film"}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="none" />
            <line x1="23" y1="9" x2="17" y2="15" fill="none" />
            <line x1="17" y1="9" x2="23" y2="15" fill="none" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="none" />
            <path d="M15.5 8.5a5 5 0 010 7" fill="none" />
            <path d="M18.5 5.5a9 9 0 010 13" fill="none" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function BrandFilm() {
  return (
    <div className="ref-film-stage">
      <Frame
        className="ref-film-landscape"
        src="/videos/brand-film-desktop.mp4"
        poster="/images/brand-film-poster.jpg"
      />
      <Frame
        className="ref-film-portrait"
        src="/videos/brand-film-mobile.mp4"
        poster="/images/brand-film-poster-mobile.jpg"
      />
    </div>
  );
}
