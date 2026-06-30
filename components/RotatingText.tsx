"use client";

import { useEffect, useState } from "react";

// Cycles through a list of words with a slide/fade animation. Used in the hero.
export default function RotatingText({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rot-text" aria-live="polite">
      {/* reserve width so the line never collapses */}
      <span className="rot-text-sizer" aria-hidden>
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <span key={index} className="rot-text-word">
        {words[index]}
      </span>
    </span>
  );
}
