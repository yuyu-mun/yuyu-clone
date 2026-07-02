"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

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
// how many tiles are real (decoding) <video> elements at any instant — every
// other tile is a cheap poster image. Crucially this is a small, FIXED budget:
// only the tiles currently facing the camera are promoted to video, and as the
// sphere rotates that budget follows the front arc (see the live-set effect).
// Browsers can only hardware-decode a handful of streams at once, so keeping
// this low — rather than mounting one video per tile — is what keeps it smooth.
function gridFor(w: number) {
  if (w < 640) return { cols: 24, rows: 7, tileScale: 0.8, live: 6 };
  if (w < 1024) return { cols: 32, rows: 9, tileScale: 0.84, live: 10 };
  return { cols: 42, rows: 10, tileScale: 0.88, live: 16 };
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
  const [dim, setDim] = useState({ radius: 740, cols: 42, rows: 10, tileScale: 0.88, live: 16 });
  // Which tile indices are currently live <video> tiles. Recomputed as the dome
  // rotates so it always tracks the front-facing arc (the only tiles the eye can
  // actually see); everything else renders as its poster image.
  const [liveKeys, setLiveKeys] = useState<Set<number>>(new Set());
  const [ready, setReady] = useState(false);
  // The dome is a heavy, below-the-fold section (dozens of reel videos + poster
  // images). We don't mount any of that media until the scene scrolls near the
  // viewport, so it never competes with the hero / above-the-fold load.
  const [active, setActive] = useState(false);
  // How many tiles may be live <video> right now. Ramps 0 -> `live` over ~1s
  // after the scene mounts, so the reveal paints as cheap poster images first
  // and the video streams spin up a few at a time instead of all on one frame
  // (that simultaneous burst was the first-load hitch).
  const [liveBudget, setLiveBudget] = useState(0);

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

  // Mount the dome's media only once it scrolls near the viewport, then keep it
  // mounted. A generous rootMargin preloads it just before it's seen so the
  // reveal still feels instant, while the landing hero loads unobstructed.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
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
      { rootMargin: "800px 0px" }
    );
    io.observe(scene);
    return () => io.disconnect();
  }, []);

  const { radius, cols, rows, tileScale, live } = dim;
  const segX = 360 / cols;
  const segY = (LAT_MAX - LAT_MIN) / (rows - 1);
  const tan = (d: number) => Math.tan((d * Math.PI) / 180);
  const tileW = 2 * radius * tan(segX / 2) * tileScale;
  const tileH = tileW * (16 / 9);

  // Tile layout is deterministic (SSR and client agree) and only changes when
  // the grid dimensions do. Each tile keeps its own round-robin reel so the same
  // clip's duplicate always sits ~half a sphere away, never in the same arc.
  const tiles = useMemo(() => {
    const pool = media.length ? media : [{ src: "/images/case-2.jpg", alt: "" }];
    const out: DomeTile[] = [];
    let k = 0;
    for (let r = 0; r < rows; r++) {
      const lat = LAT_MIN + r * segY;
      for (let c = 0; c < cols; c++) {
        const lon = c * segX + (r % 2) * (segX / 2);
        out.push({ lat, lon, media: pool[k % pool.length] });
        k++;
      }
    }
    return out;
  }, [cols, rows, segX, segY, media]);

  // The tiles that can ever become live video: those whose media is an mp4. The
  // live-set effect picks from these by how close each is to the front.
  const videoTiles = useMemo(
    () =>
      tiles
        .map((t, i) => ({ i, lon: t.lon, mp4: t.media.src.endsWith(".mp4") }))
        .filter((t) => t.mp4),
    [tiles]
  );

  const isLive = (i: number) => liveKeys.has(i);

  // Ramp the live-video budget up gradually once the scene is active. Two
  // requestAnimationFrames let the poster grid paint before the first video
  // mounts, then we add a couple of streams every ~120ms until we reach `live`.
  useEffect(() => {
    if (!active) return;
    setLiveBudget(0);
    let rafA = 0;
    let rafB = 0;
    let id = 0;
    rafA = requestAnimationFrame(() => {
      rafB = requestAnimationFrame(() => {
        let n = 0;
        id = window.setInterval(() => {
          n += 2;
          setLiveBudget(Math.min(n, live));
          if (n >= live) window.clearInterval(id);
        }, 120);
      });
    });
    return () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
      window.clearInterval(id);
    };
  }, [active, live]);

  // Lazy playback: videos use preload="none" and only load + play while the dome
  // is in view. Scrolling to another section pauses them all, so nothing decodes
  // off-screen. This also guarantees the visible front videos are playing.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !active) return;
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
  }, [ready, active]);

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

  // Follow the front arc: promote the `live` mp4 tiles closest to the camera to
  // real <video>s and demote the rest back to posters. A tile's angle from the
  // front is (lon + rotation) mod 360; we keep only the nearest few so the
  // number of simultaneously decoding videos stays within the browser's budget.
  // Polled (not per-frame) with a rotation-delta guard, so it's near-free while
  // idle, and currently-live tiles get a stickiness bonus to stop flicker at the
  // selection boundary as tiles drift in and out of the front.
  useEffect(() => {
    if (!active || !videoTiles.length) return;
    if (liveBudget <= 0) {
      setLiveKeys((prev) => (prev.size ? new Set<number>() : prev));
      return;
    }
    const STICKY = 12; // deg of hysteresis for tiles that are already live
    const norm = (a: number) => {
      const x = ((a % 360) + 360) % 360;
      return x > 180 ? x - 360 : x;
    };
    let lastRot = Number.NaN;
    const recompute = () => {
      const rotNow = rot.current;
      if (!Number.isNaN(lastRot) && Math.abs(rotNow - lastRot) < 2.5) return;
      lastRot = rotNow;
      setLiveKeys((prev) => {
        const scored = videoTiles
          .map((t) => {
            let d = Math.abs(norm(t.lon + rotNow));
            if (prev.has(t.i)) d -= STICKY;
            return { i: t.i, d };
          })
          .sort((a, b) => a.d - b.d);
        const next = new Set<number>();
        for (let n = 0; n < liveBudget && n < scored.length; n++) next.add(scored[n].i);
        if (next.size === prev.size) {
          let same = true;
          next.forEach((x) => {
            if (!prev.has(x)) same = false;
          });
          if (same) return prev;
        }
        return next;
      });
    };
    recompute();
    const id = window.setInterval(recompute, 180);
    return () => window.clearInterval(id);
  }, [active, videoTiles, liveBudget]);

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
          {active && tiles.map((t, i) => (
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
