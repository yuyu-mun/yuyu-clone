"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LAT_MIN = -68;
const LAT_MAX = 68;

type GalleryMedia = {
  src: string;
  poster?: string;
  alt?: string;
};
type DomeTile = {
  lat: number;
  lon: number;
  media: GalleryMedia;
};

// Grid density scales down on smaller screens to keep things smooth. `live` is
// how many tiles are real (decoding) <video> elements — every other tile is a
// cheap poster image, so we never mount hundreds of simultaneous videos. Live
// tiles are each given a DISTINCT clip so no video is duplicated on the sphere.
function gridFor(w: number) {
  if (w < 640) return { cols: 24, rows: 7, tileScale: 0.8, live: 40 };
  if (w < 1024) return { cols: 32, rows: 9, tileScale: 0.84, live: 70 };
  return { cols: 42, rows: 10, tileScale: 0.88, live: 110 };
}

export default function DomeGallery({
  media,
  href = "/our-portfolio",
}: {
  media: GalleryMedia[];
  href?: string;
}) {
  const router = useRouter();
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rot = useRef(0); // horizontal rotation only
  const vel = useRef(0.03);
  const drag = useRef<number | null>(null);
  const start = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const visible = useRef(false); // is the dome on screen? gates rotation + playback
  const [dim, setDim] = useState({ radius: 740, cols: 42, rows: 10, tileScale: 0.88, live: 24 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let rafA = 0;
    let rafB = 0;
    const measure = () => {
      const w = sceneRef.current?.clientWidth ?? 1200;
      setDim({ radius: Math.max(420, Math.min(980, w * 0.54)), ...gridFor(w) });
      setReady(false);
      rafA = requestAnimationFrame(() => {
        rafB = requestAnimationFrame(() => setReady(true));
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { radius, cols, rows, tileScale, live } = dim;
  const segX = 360 / cols;
  const segY = (LAT_MAX - LAT_MIN) / (rows - 1);
  const tan = (d: number) => Math.tan((d * Math.PI) / 180);
  const tileW = 2 * radius * tan(segX / 2) * tileScale;
  const tileH = tileW * (16 / 9);

  const mediaPool = media.length ? media : [{ src: "/images/case-2.jpg", alt: "" }];
  const tiles: DomeTile[] = [];
  let k = 0;
  for (let r = 0; r < rows; r++) {
    const lat = LAT_MIN + r * segY;
    for (let c = 0; c < cols; c++) {
      const lon = c * segX + (r % 2) * (segX / 2);
      tiles.push({ lat, lon, media: mediaPool[k % mediaPool.length] });
      k++;
    }
  }

  // A capped, evenly-spread subset of tiles become live videos; the rest stay
  // poster images. Each tile keeps its own round-robin reel, so a live video is
  // never sitting next to a poster of the same reel (its duplicate is ~half a
  // sphere away). Deterministic so SSR and client agree.
  const liveStep = Math.max(1, Math.floor(tiles.length / live));
  const liveSet = new Set<number>();
  for (let i = 0; i < tiles.length && liveSet.size < live; i += liveStep) {
    liveSet.add(i);
  }
  const isLive = (i: number) => liveSet.has(i);

  // Lazy playback: videos use preload="none" and only load + play while the dome
  // is in view. Scrolling to another section pauses them all, so nothing decodes
  // off-screen. This also guarantees the visible front videos are playing.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const io = new IntersectionObserver(
      (entries) => {
        visible.current = entries[0].isIntersecting;
        const videos = scene.querySelectorAll<HTMLVideoElement>("video");
        videos.forEach((v) => {
          if (visible.current) {
            v.muted = true;
            void v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(scene);
    return () => io.disconnect();
  }, [ready, media]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const apply = () => {
      stage.style.transform = `translateZ(${-radius}px) rotateY(${rot.current.toFixed(2)}deg)`;
    };
    apply();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const tick = () => {
      // Skip all rotation work while the dome is scrolled out of view.
      if (visible.current) {
        if (drag.current == null) {
          vel.current += (0.03 - vel.current) * 0.04;
          rot.current += vel.current;
        }
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [radius, ready]);

  // horizontal drag only; a press without movement counts as a click
  const onDown = (e: React.PointerEvent) => {
    drag.current = e.clientX;
    start.current = { x: e.clientX, y: e.clientY };
    moved.current = false;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (drag.current == null) return;
    const dx = e.clientX - drag.current;
    drag.current = e.clientX;
    rot.current += dx * 0.18;
    vel.current = dx * 0.04;
    if (Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y) > 6) {
      moved.current = true;
    }
  };
  const onUp = (e: React.PointerEvent) => {
    drag.current = null;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };
  const onClick = () => {
    if (!moved.current) router.push(href);
  };

  return (
    <div className={`dome-scene${ready ? " is-ready" : ""}`} ref={sceneRef}>
      <span className="dome-mask top" aria-hidden />
      <span className="dome-mask bottom" aria-hidden />
      <div className="dome-viewport">
        <div
          className="dome-stage"
          ref={stageRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onClick={onClick}
          style={{ transform: `translateZ(${-radius}px) rotateY(${rot.current.toFixed(2)}deg)` }}
        >
          {tiles.map((t, i) => (
            <div
              key={i}
              className="dome-tile"
              style={{
                width: `${tileW.toFixed(1)}px`,
                height: `${tileH.toFixed(1)}px`,
                marginLeft: `${(-tileW / 2).toFixed(1)}px`,
                marginTop: `${(-tileH / 2).toFixed(1)}px`,
                transform: `rotateY(${t.lon}deg) rotateX(${-t.lat}deg) translateZ(${radius}px)`,
              }}
            >
              {isLive(i) && t.media.src.endsWith(".mp4") ? (
                <video
                  src={t.media.src}
                  poster={t.media.poster}
                  aria-label={t.media.alt}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="none"
                />
              ) : (
                <img
                  src={t.media.poster || t.media.src}
                  alt={t.media.alt || ""}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
