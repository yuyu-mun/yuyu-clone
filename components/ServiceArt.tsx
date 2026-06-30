"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const C = 280; // centre of the 560x560 canvas

// Deterministic node placement so SSR and client render identically.
const onRing = (i: number, n: number, r: number, ry = r) => {
  const a = (i / n) * Math.PI * 2 - Math.PI / 2;
  return { x: C + r * Math.cos(a), y: C + ry * Math.sin(a) };
};

function CoreGlyph({ variant }: { variant: string }) {
  if (variant === "video-production") {
    // camera aperture
    return (
      <g className="svc-core-glyph" stroke="#fff" strokeWidth="3" fill="none" strokeLinejoin="round">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i / 6) * Math.PI * 2;
          const a2 = ((i + 1) / 6) * Math.PI * 2;
          const r = 26;
          const x1 = C + r * Math.cos(a);
          const y1 = C + r * Math.sin(a);
          const x2 = C + r * Math.cos(a2);
          const y2 = C + r * Math.sin(a2);
          return <path key={i} d={`M${C} ${C} L${x1} ${y1} L${x2} ${y2} Z`} opacity={i % 2 ? 0.55 : 0.9} />;
        })}
      </g>
    );
  }
  if (variant === "ip-building") {
    // person mark
    return (
      <g className="svc-core-glyph" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round">
        <circle cx={C} cy={C - 12} r="11" />
        <path d={`M${C - 19} ${C + 24} q19 -26 38 0`} />
      </g>
    );
  }
  if (variant === "ads-boosting") {
    // equalizer
    return (
      <g className="svc-core-glyph" stroke="#fff" strokeWidth="5" strokeLinecap="round">
        {[-18, -6, 6, 18].map((dx, i) => (
          <line key={i} className="svc-eq-bar" x1={C + dx} y1={C + 18} x2={C + dx} y2={C - (i % 2 ? 20 : 8)} />
        ))}
      </g>
    );
  }
  // default: play triangle (broadcast / short video)
  return (
    <g className="svc-core-glyph" fill="#fff">
      <path d={`M${C - 9} ${C - 15} L${C + 18} ${C} L${C - 9} ${C + 15} Z`} />
    </g>
  );
}

export default function ServiceArt({ variant }: { variant: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  // Three tilted orbits with a couple of nodes each.
  const orbits = [
    { r: 210, ry: 92, rot: -18, nodes: 2 },
    { r: 168, ry: 168, rot: 0, nodes: 3 },
    { r: 120, ry: 210, rot: 24, nodes: 2 },
  ];
  const particles = Array.from({ length: 9 }, (_, i) => onRing(i, 9, 150 + (i % 3) * 60, 150 + (i % 2) * 70));

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.from(".svc-art-svg", { autoAlpha: 0, scale: 0.88, duration: 1.1, ease: "power3.out" });

      if (!reduce) {
        gsap.utils.toArray<SVGGElement>(".svc-orbit").forEach((o, i) => {
          gsap.to(o, { rotation: i % 2 ? -360 : 360, svgOrigin: "280 280", repeat: -1, ease: "none", duration: 30 + i * 12 });
        });
        gsap.utils.toArray<SVGCircleElement>(".svc-pcl").forEach((p, i) => {
          gsap.to(p, { y: i % 2 ? 14 : -14, x: i % 3 ? -9 : 9, repeat: -1, yoyo: true, duration: 3 + (i % 4), ease: "sine.inOut", delay: i * 0.18 });
        });
        gsap.utils.toArray<SVGPathElement>(".svc-ribbon").forEach((r, i) => {
          gsap.to(r, { strokeDashoffset: i % 2 ? -220 : 220, repeat: -1, duration: 9 + i * 2, ease: "none" });
        });
        gsap.utils.toArray<SVGElement>(".svc-crystal").forEach((c, i) => {
          gsap.to(c, { y: i % 2 ? 18 : -18, rotation: i % 2 ? 9 : -9, svgOrigin: "280 280", repeat: -1, yoyo: true, duration: 3.8 + i * 0.45, ease: "sine.inOut" });
        });
        gsap.to(".svc-prism-cloud", { rotation: 360, svgOrigin: "280 280", repeat: -1, duration: 58, ease: "none" });
        gsap.to(".svc-core-stack", { scale: 1.08, transformOrigin: "50% 50%", svgOrigin: "280 280", repeat: -1, yoyo: true, duration: 2.6, ease: "sine.inOut" });
        gsap.utils.toArray<SVGCircleElement>(".svc-wave").forEach((w, i) => {
          gsap.fromTo(
            w,
            { attr: { r: 56 }, opacity: 0.5 },
            { attr: { r: 250 }, opacity: 0, duration: 3.4, repeat: -1, delay: i * 1.15, ease: "power1.out" }
          );
        });
        gsap.utils.toArray<SVGLineElement>(".svc-eq-bar").forEach((b, i) => {
          gsap.to(b, { attr: { y2: C - (i % 2 ? 8 : 22) }, repeat: -1, yoyo: true, duration: 0.6 + i * 0.12, ease: "sine.inOut" });
        });

        // gentle pointer parallax
        const front = el.querySelector<SVGGElement>(".svc-art-front");
        const back = el.querySelector<SVGGElement>(".svc-art-back");
        const fx = gsap.quickTo(front, "x", { duration: 0.8, ease: "power3" });
        const fy = gsap.quickTo(front, "y", { duration: 0.8, ease: "power3" });
        const bx = gsap.quickTo(back, "x", { duration: 1.1, ease: "power3" });
        const by = gsap.quickTo(back, "y", { duration: 1.1, ease: "power3" });
        const onMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
          fx(dx * 26); fy(dy * 26); bx(dx * -14); by(dy * -14);
        };
        el.addEventListener("pointermove", onMove);
        cleanups.push(() => el.removeEventListener("pointermove", onMove));
      }

      // scroll parallax drift
      gsap.to(".svc-art-svg", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, el);

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, [variant]);

  const showWaves = variant === "short-video-services" || variant === "ads-boosting";

  return (
    <div className="svc-art-stage" ref={root} aria-hidden>
      <svg className="svc-art-svg" viewBox="0 0 560 560" fill="none">
        <defs>
          <radialGradient id="svc-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--svc-accent)" stopOpacity="0.5" />
            <stop offset="55%" stopColor="var(--svc-accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--svc-accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="svc-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--svc-accent)" />
            <stop offset="100%" stopColor="var(--svc-accent-deep)" />
          </linearGradient>
          <radialGradient id="svc-core" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="var(--svc-accent)" />
            <stop offset="100%" stopColor="var(--svc-accent-deep)" />
          </radialGradient>
          <filter id="svc-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="svc-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="svc-glass" x1="80" y1="120" x2="480" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="38%" stopColor="var(--svc-accent)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="svc-hotline" x1="60" y1="430" x2="520" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff7a59" />
            <stop offset="45%" stopColor="var(--svc-accent)" />
            <stop offset="100%" stopColor="#8ef7ff" />
          </linearGradient>
        </defs>

        <g className="svc-art-back">
          <circle cx={C} cy={C} r="250" fill="url(#svc-halo)" />
          <circle cx={C} cy={C} r="248" stroke="var(--svc-line)" strokeWidth="1" opacity="0.7" />
          <circle cx={C} cy={C} r="186" stroke="var(--svc-line)" strokeWidth="1" opacity="0.5" />
          {showWaves &&
            [0, 1, 2].map((i) => (
              <circle key={i} className="svc-wave" cx={C} cy={C} r="56" stroke="url(#svc-ring)" strokeWidth="1.5" />
            ))}
        </g>

        <g className="svc-art-front">
          <g className="svc-prism-cloud" opacity="0.9">
            <path className="svc-glass-petal" d="M280 72 C342 128 354 210 288 276 C226 206 219 137 280 72Z" fill="url(#svc-glass)" />
            <path className="svc-glass-petal" d="M432 162 C420 248 360 304 280 282 C320 200 365 162 432 162Z" fill="url(#svc-glass)" opacity="0.72" />
            <path className="svc-glass-petal" d="M118 344 C198 286 280 292 330 374 C229 410 160 402 118 344Z" fill="url(#svc-glass)" opacity="0.6" />
            <path className="svc-ribbon" d="M76 372 C164 216 300 448 488 188" stroke="url(#svc-hotline)" strokeWidth="16" strokeLinecap="round" strokeDasharray="44 26" opacity="0.48" filter="url(#svc-glow)" />
            <path className="svc-ribbon" d="M100 248 C178 154 294 390 466 296" stroke="url(#svc-glass)" strokeWidth="10" strokeLinecap="round" strokeDasharray="34 22" opacity="0.64" />
            <path className="svc-ribbon" d="M174 448 C244 326 348 234 474 112" stroke="url(#svc-hotline)" strokeWidth="4" strokeLinecap="round" strokeDasharray="16 14" opacity="0.74" />
            <rect className="svc-crystal" x="91" y="216" width="58" height="26" rx="6" fill="url(#svc-glass)" stroke="#fff" strokeOpacity="0.42" transform="rotate(-19 120 229)" />
            <rect className="svc-crystal" x="420" y="224" width="70" height="28" rx="6" fill="url(#svc-glass)" stroke="#fff" strokeOpacity="0.42" transform="rotate(14 455 238)" />
            <rect className="svc-crystal" x="338" y="96" width="50" height="22" rx="6" fill="url(#svc-glass)" stroke="#fff" strokeOpacity="0.42" transform="rotate(28 363 107)" />
          </g>

          {orbits.map((o, oi) => (
            <g key={oi} className="svc-orbit" transform={`rotate(${o.rot} ${C} ${C})`}>
              <ellipse cx={C} cy={C} rx={o.r} ry={o.ry} stroke="url(#svc-ring)" strokeWidth="1.6" opacity="0.55" />
              {Array.from({ length: o.nodes }, (_, ni) => {
                const p = onRing(ni, o.nodes, o.r, o.ry);
                return (
                  <g key={ni}>
                    <circle cx={p.x} cy={p.y} r="9" fill="#fff" stroke="var(--svc-accent)" strokeWidth="2.4" />
                    <circle cx={p.x} cy={p.y} r="3.4" fill="var(--svc-accent)" />
                  </g>
                );
              })}
            </g>
          ))}

          {particles.map((p, i) => (
            <circle key={i} className="svc-pcl" cx={p.x} cy={p.y} r={i % 3 === 0 ? 4 : 2.4} fill="var(--svc-accent)" opacity={0.35 + (i % 3) * 0.2} />
          ))}

          <g className="svc-core-stack">
            <circle cx={C} cy={C} r="66" fill="url(#svc-halo)" filter="url(#svc-soft)" />
            <circle cx={C} cy={C} r="46" fill="url(#svc-core)" />
            <circle cx={C} cy={C} r="46" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
            <CoreGlyph variant={variant} />
          </g>
        </g>
      </svg>
    </div>
  );
}
