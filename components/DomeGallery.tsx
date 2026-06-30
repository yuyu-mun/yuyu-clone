"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LAT_MIN = -80;
const LAT_MAX = 80;

type Tile = { lat: number; lon: number; src: string };

// Grid density scales down on smaller screens to keep things smooth.
function gridFor(w: number) {
  if (w < 640) return { cols: 16, rows: 10 };
  if (w < 1024) return { cols: 22, rows: 13 };
  return { cols: 30, rows: 15 };
}

export default function DomeGallery({
  images,
  href = "/our-portfolio",
}: {
  images: string[];
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
  const [dim, setDim] = useState({ radius: 740, cols: 30, rows: 15 });
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

  const { radius, cols, rows } = dim;
  const segX = 360 / cols;
  const segY = (LAT_MAX - LAT_MIN) / (rows - 1);
  const tan = (d: number) => Math.tan((d * Math.PI) / 180);
  const tileW = 2 * radius * tan(segX / 2) * 0.96;
  const tileH = 2 * radius * tan(segY / 2) * 0.96;
  const poleRows = Math.max(3, Math.round(rows * 0.25));

  const tiles: Tile[] = [];
  let k = 0;
  for (let r = poleRows; r < rows - poleRows; r++) {
    const lat = LAT_MIN + r * segY;
    for (let c = 0; c < cols; c++) {
      const lon = c * segX + (r % 2) * (segX / 2);
      tiles.push({ lat, lon, src: images[k % images.length] });
      k++;
    }
  }

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const apply = () => {
      stage.style.transform = `translateZ(${-radius}px) rotateY(${rot.current.toFixed(2)}deg)`;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      apply();
      return;
    }
    let raf = 0;
    const tick = () => {
      if (drag.current == null) {
        vel.current += (0.03 - vel.current) * 0.04;
        rot.current += vel.current;
      }
      apply();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [radius]);

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
              <img src={t.src} alt="" draggable={false} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <span className="dome-hint" aria-hidden>
        Drag to explore
      </span>
    </div>
  );
}
