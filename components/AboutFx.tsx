"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFx() {
  useEffect(() => {
    const scope = document.querySelector(".about-redesign");
    if (!scope) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const fill = scope.querySelector(".about-process-fill");
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-process-list",
              start: "top 78%",
              end: "bottom 72%",
              scrub: true,
            },
          }
        );
      }

      const metricsSection = scope.querySelector(".about-metrics-section");
      const counters = scope.querySelectorAll<HTMLElement>(".about-count-number");
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count || "0");
        const suffix = counter.dataset.suffix || "";

        if (reduce || !metricsSection) {
          counter.textContent = `${target}${suffix}`;
          return;
        }

        counter.textContent = `0${suffix}`;
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.45,
          ease: "power3.out",
          onUpdate: () => {
            counter.textContent = `${Math.round(state.value)}${suffix}`;
          },
          onComplete: () => {
            counter.textContent = `${target}${suffix}`;
          },
          scrollTrigger: {
            trigger: metricsSection,
            start: "top 78%",
            once: true,
          },
        });
      });

      if (reduce) return;

      gsap.to(".about-studio-copy", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: ".about-studio-hero", start: "top top", end: "bottom top", scrub: true },
      });

      // NOTE: .about-origin-note / .about-team-panel are already revealed by the
      // <Reveal> component. Animating them here too made GSAP set an inline
      // opacity:0 that won the cascade and left them stuck hidden when the
      // ScrollTrigger didn't complete. Reveal handles their entrance now.
    }, scope);

    return () => ctx.revert();
  }, []);

  return null;
}
