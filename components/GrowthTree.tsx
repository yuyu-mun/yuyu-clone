"use client";

import { useEffect, useRef } from "react";

type Step = { step: string; title: string; desc: string };

function Leaf({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
      <path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z" />
      <path d="M7.5 16.5C10 14 13.5 10.5 16 8" stroke="rgba(14,14,16,0.5)" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function GrowthTree({ steps, platforms, stage }: { steps: Step[]; platforms: string[]; stage?: string[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".tnode, .tstart, .tend"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const stages = stage ?? [];

  return (
    <div className="tree" ref={rootRef}>
      {/* seed / start */}
      <div className="tstart">
        <span className="seed"><Leaf style={{ color: "var(--ink)" }} /></span>
        <div className="tstart-cap">You, the expert — ready to be seen.</div>
      </div>

      {steps.map((s, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        const tw = 10 + i * 3.4; // trunk thickens as it grows
        const leaves = Math.min(3, Math.floor(i / 2) + 1);
        return (
          <div className={`tnode ${side}`} key={s.step}>
            <div className="tcol-mid">
              <span className="seg" style={{ width: `${tw}px` }} />
              <span className="branch" />
              <span className="dot">{s.step}</span>
              {Array.from({ length: leaves }).map((_, li) => (
                <Leaf
                  key={li}
                  className={`leaf l${li}`}
                  style={{ ["--ld" as string]: `${0.35 + li * 0.12}s` }}
                />
              ))}
            </div>
            <div className="tcard">
              {stages[i] && <span className="st">{stages[i]}</span>}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        );
      })}

      {/* canopy / fruit */}
      <div className="tend">
        <div className="canopy">
          <span className="glow" />
          <Leaf className="cl c1" />
          <Leaf className="cl c2" />
          <Leaf className="cl c3" />
          <Leaf className="cl c4" />
          <Leaf className="cl c5" />
        </div>
        <h3 className="tend-title">Your personal brand, in full bloom.</h3>
        <div className="tend-platforms">
          {platforms.map((p) => (
            <span className="pchip" key={p}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
