"use client";

import { useEffect, useRef, useState } from "react";

// Animates a numeric value when scrolled into view, preserving the original
// prefix/suffix (e.g. "8000M+", "960%", "20000+").
function zeroValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return value;
  return `${match[1]}0${match[3]}`;
}

// Picks the widest-rendering digit for the current font so we can reserve a box
// that never overflows mid-count. Digits are NOT equal width in every font (and
// tabular-nums isn't always honored), so an intermediate like "200M+" can be
// wider than the final "279M+" — reserving the final value's width lets the box
// jitter. Using the widest digit for every slot is a safe upper bound.
function widestDigitString(el: HTMLElement, numeric: string) {
  const cs = getComputedStyle(el);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return numeric;
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  let widest = "0";
  let max = 0;
  for (const d of "0123456789") {
    const w = ctx.measureText(d).width;
    if (w > max) {
      max = w;
      widest = d;
    }
  }
  // keep separators (comma/dot) in place, swap every digit for the widest one
  return numeric.replace(/\d/g, widest);
}

export default function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const initialDisplay = zeroValue(value);
  const [display, setDisplay] = useState(initialDisplay);
  const [measure, setMeasure] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const prefix = match[1];
    const target = parseFloat(match[2].replace(/,/g, ""));
    const suffix = match[3];
    const hasComma = match[2].includes(",");
    let frame = 0;
    let io: IntersectionObserver | null = null;

    // Reserve a stable box sized to the widest possible frame, not the final one.
    setMeasure(`${prefix}${widestDigitString(el, match[2])}${suffix}`);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    setDisplay(initialDisplay);

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const cur = Math.round(target * eased);
        const formatted = hasComma ? cur.toLocaleString() : String(cur);
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io?.disconnect();
        animate();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration, initialDisplay]);

  return (
    <span ref={ref} className="count-up" aria-label={value}>
      <span className="count-up-measure" aria-hidden="true">
        {measure}
      </span>
      <span className="count-up-value" aria-hidden="true">
        {display}
      </span>
    </span>
  );
}
