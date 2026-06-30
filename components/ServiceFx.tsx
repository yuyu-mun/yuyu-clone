"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page-level GSAP flourishes scoped to the .svc wrapper. Purely decorative —
// content visibility is handled by <Reveal>, so this never hides real content.
export default function ServiceFx() {
  useEffect(() => {
    const scope = document.querySelector(".svc");
    if (!scope) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // Timeline spine draws in as you scroll the process section
      const spine = scope.querySelector(".svc-process-spine");
      if (spine) {
        gsap.fromTo(
          spine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".svc-process", start: "top 78%", end: "bottom 70%", scrub: true },
          }
        );
      }

      const processSteps = gsap.utils.toArray<HTMLElement>(".svc-process article");
      if (processSteps.length) {
        const setProcessState = (activeIndex: number) => {
          processSteps.forEach((step, i) => {
            step.classList.toggle("is-active", i === activeIndex);
            step.classList.toggle("is-past", i < activeIndex);
          });
        };

        setProcessState(0);

        processSteps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 58%",
            end: "bottom 58%",
            onEnter: () => setProcessState(i),
            onEnterBack: () => setProcessState(i),
          });
        });
      }

      if (!reduce) {
        // Soft scroll parallax between hero copy and art
        gsap.to(".svc-hero-copy", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: ".svc-hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".svc-visual-shell", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: ".svc-hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.from(".svc-abstract-frame", {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.12,
        });
        gsap.utils.toArray<HTMLElement>(".svc-proof-card, .svc-offerings article, .svc-platforms article, .svc-related-card").forEach((item, i) => {
          gsap.from(item, {
            y: 40,
            rotateX: 8,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power3.out",
            delay: (i % 3) * 0.05,
            scrollTrigger: { trigger: item, start: "top 88%" },
          });
        });

        // Magnetic hero buttons
        gsap.utils.toArray<HTMLElement>(".svc-hero .svc-btn").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });
          const enter = () => {};
          const move = (e: PointerEvent) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.4);
            yTo((e.clientY - r.top - r.height / 2) * 0.4);
          };
          const leave = () => { xTo(0); yTo(0); };
          btn.addEventListener("pointerenter", enter);
          btn.addEventListener("pointermove", move);
          btn.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            btn.removeEventListener("pointerenter", enter);
            btn.removeEventListener("pointermove", move);
            btn.removeEventListener("pointerleave", leave);
          });
        });

        // Stat numerals rise in
        gsap.from(".svc-hero-stats div", {
          y: 24, autoAlpha: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".svc-hero-stats", start: "top 90%" },
        });
      }
    }, scope);

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  return null;
}
