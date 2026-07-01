"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion or no IntersectionObserver support → just show it.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      // Trigger BEFORE the element scrolls into view (bottom margin expands the
      // root downward) so the entrance animation is already settled by the time
      // it reaches the reading area — scrolling feels continuous, not "pop-in".
      { threshold: 0, rootMargin: "0px 0px 15% 0px" }
    );
    io.observe(el);

    // Safety net: anything already on-screen at mount (e.g. above the fold)
    // reveals on the next frame so content can never stay stuck hidden.
    const raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setShown(true);
    });

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${delay ? ` d${delay}` : ""}${shown ? " in-view" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
