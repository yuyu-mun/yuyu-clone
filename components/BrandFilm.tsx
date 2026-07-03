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
        preload={active ? "auto" : "none"}
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
  // The brand film is the marquee moment right after the hero, so it should be
  // the second thing the page loads — not gated behind a scroll. We attach the
  // source as soon as the component mounts (i.e. after the hero has painted and
  // the app has hydrated), so the video begins fetching ahead of everything
  // below it while still letting the high-priority hero image win the first
  // byte of bandwidth.
  const [active, setActive] = useState(false);
  // Only one frame is ever visible: portrait below 640px, landscape above (see
  // the .ref-film-* rules in globals.css). Track the breakpoint so we attach a
  // source to the matching frame only — otherwise both variants download.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setActive(true);
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="ref-film-stage" ref={stageRef}>
      <Frame
        className="ref-film-landscape"
        src="/videos/brand-film-desktop.mp4"
        active={active && isMobile === false}
      />
      <Frame
        className="ref-film-portrait"
        src="/videos/brand-film-mobile.mp4"
        active={active && isMobile === true}
      />
    </div>
  );
}
