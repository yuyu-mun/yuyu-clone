"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

type InstagramReelEmbedProps = {
  reelUrl?: string;
  title: string;
  client: string;
  /** 0-4 — picks a blue/white gradient for the pre-load poster. */
  accent?: number;
};

const instagramScript = "https://www.instagram.com/embed.js";

/** Ensure embed.js is present, then re-process any pending blockquotes. */
function processInstagramEmbeds() {
  const run = () => window.instgrm?.Embeds?.process?.();

  if (window.instgrm?.Embeds) {
    run();
    return;
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${instagramScript}"]`);
  if (existing) {
    existing.addEventListener("load", run, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = instagramScript;
  script.async = true;
  script.addEventListener("load", run, { once: true });
  document.body.appendChild(script);
}

/**
 * Hybrid lazy-mount reel tile.
 * Shows a branded blue/white poster, then mounts the live Instagram embed
 * once the tile scrolls near the viewport. The poster fades out as soon as
 * Instagram swaps in its <iframe>, so the wall stays fast and tidy.
 */
export default function InstagramReelEmbed({
  reelUrl,
  title,
  client,
  accent = 0,
}: InstagramReelEmbedProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Mount the embed only when the tile gets close to the viewport.
  useEffect(() => {
    if (!reelUrl) return;
    const el = frameRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      // Start loading a screen early so the embed is ready before it's seen.
      { rootMargin: "700px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reelUrl]);

  // Once mounted, process embeds and watch for Instagram's <iframe> swap-in.
  useEffect(() => {
    if (!mounted || !reelUrl) return;
    const el = frameRef.current;
    if (!el) return;

    processInstagramEmbeds();

    const markLoaded = () => {
      if (el.querySelector("iframe")) {
        setLoaded(true);
        return true;
      }
      return false;
    };

    if (markLoaded()) return;

    const mo = new MutationObserver(() => {
      if (markLoaded()) mo.disconnect();
    });
    mo.observe(el, { childList: true, subtree: true });

    // Safety: re-process shortly after in case the first call raced the script.
    const retry = window.setTimeout(processInstagramEmbeds, 1200);

    return () => {
      mo.disconnect();
      window.clearTimeout(retry);
    };
  }, [mounted, reelUrl]);

  return (
    <div ref={frameRef} className={`reel-frame${loaded ? " is-live" : ""}`} data-accent={accent % 5}>
      <div className={`reel-poster${loaded ? " is-hidden" : ""}`} aria-hidden={loaded}>
        <span className="reel-poster-glow" />
        <span className="reel-poster-play">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="reel-poster-client">{client}</span>
        {mounted && !loaded && <span className="reel-poster-loading">Loading reel…</span>}
      </div>

      {mounted && reelUrl && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={reelUrl}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            margin: 0,
            minWidth: 0,
            padding: 0,
            width: "100%",
          }}
        >
          <a href={reelUrl} target="_blank" rel="noreferrer">
            View {title} on Instagram
          </a>
        </blockquote>
      )}

      {!reelUrl && (
        <a
          className="reel-frame-empty"
          href="/freeanalysis"
          aria-label="This slot is open — talk to us"
        >
          <span>Your reel here</span>
        </a>
      )}
    </div>
  );
}
