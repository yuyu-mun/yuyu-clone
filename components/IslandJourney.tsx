"use client";

import { useEffect, useRef } from "react";

type Step = { step: string; title: string; desc: string };

function IslandArt({ id, big = false }: { id: string; big?: boolean }) {
  return (
    <svg viewBox="0 0 160 110" aria-hidden>
      <defs>
        <linearGradient id={`hill-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00b2f0" />
          <stop offset="1" stopColor="#045cb4" />
        </linearGradient>
      </defs>
      {/* water ripples */}
      <ellipse cx="80" cy="95" rx="66" ry="12" fill="#00b2f0" opacity="0.32" />
      <ellipse cx="80" cy="99" rx="44" ry="7" fill="#045cb4" opacity="0.2" />
      {/* sand */}
      <path d="M26 90 Q80 74 134 90 Q118 100 80 100 Q42 100 26 90 Z" fill="#f6e4b8" />
      {/* hill */}
      <path d="M50 91 Q80 38 110 91 Z" fill={`url(#hill-${id})`} />
      {big && <path d="M30 92 Q52 60 70 92 Z" fill="#00b2f0" opacity="0.85" />}
      {/* palm trunk + fronds */}
      <path d="M96 90 Q99 70 104 58" stroke="#0a2a4f" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M104 57 Q92 50 84 54 M104 57 Q116 50 124 56 M104 57 Q104 46 100 40" stroke="#0a2a4f" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function IslandJourney({ steps, stages }: { steps: Step[]; stages?: string[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".ij-node, .ij-start, .ij-end"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -12% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const st = stages ?? [];

  return (
    <div className="ijourney" ref={rootRef}>
      <div className="ij-start">
        <span className="port" aria-hidden>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M12 6a3 3 0 100-4 3 3 0 000 4zM5 12H3a9 9 0 0018 0h-2M12 22a9 9 0 01-7-3.5M12 22a9 9 0 007-3.5" />
          </svg>
        </span>
        <div className="cap">You set sail — an expert ready to be discovered.</div>
      </div>

      {steps.map((s, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        return (
          <div className={`ij-node ${side}`} key={s.step}>
            <div className="ij-mid">
              <span className="ij-route" />
              <span className="ij-branch" />
              <div className="island">
                <IslandArt id={s.step} />
                <span className="ij-num">{s.step}</span>
              </div>
            </div>
            <div className="ij-card">
              {st[i] && <span className="st">{st[i]}</span>}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        );
      })}

      <div className="ij-end">
        <div className="dest"><IslandArt id="dest" big /></div>
        <h3 className="ij-end-title">You arrive: the name your audience trusts.</h3>
        <div className="cap">A personal brand that keeps drawing the right people in.</div>
      </div>
    </div>
  );
}
