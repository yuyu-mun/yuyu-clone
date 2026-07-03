"use client";

import { useEffect, useRef, useState } from "react";

function Frame({
  src,
  className,
  active,
}: {
  src: string;
  className: string;
  active: boolean;
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
        src={active ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
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
  const stageRef = useRef<HTMLDivElement | null>(null);
  // Only attach the video source once the stage nears the viewport, so the
  // brand film never downloads during the initial landing-page paint.
  const [active, setActive] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(stage);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ref-film-stage" ref={stageRef}>
      <Frame
        className="ref-film-landscape"
        src="/videos/brand-film-desktop.mp4"
        active={active}
      />
      <Frame
        className="ref-film-portrait"
        src="/videos/brand-film-mobile.mp4"
        active={active}
      />
    </div>
  );
}
