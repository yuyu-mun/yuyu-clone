"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = { step: string; shortTitle?: string; title: string; desc: string; img?: string };

// Pinned process scene: scroll progress advances the active step before the page releases.
export default function ProcessFlow({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const trackFill = el.querySelector(".ref-flow-track-fill");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(trackFill, { scaleY: 1 });
        return;
      }

      gsap.set(trackFill, { scaleY: 0, transformOrigin: "center top" });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80px",
        end: () => `+=${Math.max(window.innerHeight * 1.8, steps.length * 240)}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.25,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(trackFill, { scaleY: self.progress });
          const next = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));

          if (next !== activeRef.current) {
            activeRef.current = next;
            setActiveIndex(next);
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <div className="ref-flow" ref={ref}>
      <div className="ref-flow-stage">
        <div className="ref-flow-head">
          <div>
            <span className="ref-eyebrow">Process</span>
            <h2>From idea to published.</h2>
            <p>
              Scroll through the cycle. Each stage shows what happens next, why it matters, and how
              the work moves closer to content people can trust.
            </p>
          </div>
          <strong className="ref-flow-count">
            {steps[activeIndex]?.step}
            <span>/ {String(steps.length).padStart(2, "0")}</span>
          </strong>
        </div>

        <div className="ref-flow-progress" aria-label="Production process steps">
          <div className="ref-flow-track" aria-hidden>
            <div className="ref-flow-track-fill" />
          </div>
          {steps.map((item, index) => {
            const stepState =
              index === activeIndex ? " is-active" : index < activeIndex ? " is-past" : " is-future";

            return (
              <article className={`ref-flow-step${stepState}`} key={item.step}>
                <span className="ref-flow-num">{item.step}</span>
                <span className="ref-flow-step-title">{item.shortTitle ?? item.title}</span>
              </article>
            );
          })}
        </div>

        <div className="ref-flow-panel" aria-live="polite">
          <div className="ref-flow-media">
            {steps.map((item, index) =>
              item.img ? (
                <div
                  className={`ref-flow-image${index === activeIndex ? " is-active" : ""}`}
                  key={item.img}
                  aria-hidden={index !== activeIndex}
                >
                  <Image
                    src={item.img}
                    alt=""
                    width={1280}
                    height={820}
                    sizes="(max-width: 900px) 100vw, 48vw"
                    priority={index === 0}
                  />
                </div>
              ) : null
            )}
          </div>

          <div className="ref-flow-copy">
            <span>Step {steps[activeIndex]?.step}</span>
            <h3>{steps[activeIndex]?.title}</h3>
            <p>{steps[activeIndex]?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
