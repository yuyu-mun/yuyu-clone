"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { company } from "@/lib/site";

// Pops up after the CTA band has been fully reached, then re-arms if the
// visitor scrolls back above the end of that section.
export default function CtaModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cta = document.querySelector<HTMLElement>(".cta");
    if (!cta) return;

    let raf = 0;
    let armed = true;

    const show = () => {
      if (!armed) return;
      armed = false;
      setOpen(true);
    };

    const check = () => {
      raf = 0;
      const ctaBottom = cta.getBoundingClientRect().bottom;
      const reachedTrigger = ctaBottom <= window.innerHeight + 2;
      const aboveTrigger = ctaBottom > window.innerHeight + 80;

      if (reachedTrigger) {
        show();
      } else if (aboveTrigger) {
        armed = true;
      }
    };

    function schedule() {
      if (!raf) raf = requestAnimationFrame(check);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="cta-modal-backdrop" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
      <div className="cta-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cta-modal-close" onClick={() => setOpen(false)} aria-label="Close">
          ×
        </button>
        <div className="cta-modal-brand">
          <img className="cta-modal-photo" src="/images/cta-modal-visual.webp" alt="" loading="lazy" decoding="async" />
          <img className="cta-modal-logo" src="/images/logo-white-horizontal.png" alt="Yuyu Creative" />
          <div className="cta-modal-brand-card">
            <span>Free audit</span>
            <strong>15 min</strong>
          </div>
        </div>
        <div className="cta-modal-copy">
          <span className="cta-modal-kicker">Free brand analysis</span>
          <h3>Know what to film next.</h3>
          <p>Get a quick read on your positioning, proof, and first content angles.</p>
          <ul className="cta-modal-points">
            <li>Positioning</li>
            <li>Proof assets</li>
            <li>Video angles</li>
          </ul>
          <div className="cta-modal-actions">
            <Link href="/freeanalysis" className="ref-btn primary" onClick={() => setOpen(false)}>
              Get free analysis
            </Link>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="ref-btn secondary whatsapp"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
