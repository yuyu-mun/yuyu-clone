import type { CSSProperties } from "react";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import CtaModal from "@/components/CtaModal";
import Reveal from "@/components/Reveal";
import ServiceFx from "@/components/ServiceFx";
import { ArrowIcon } from "@/components/Icons";
import { company } from "@/lib/site";
import type { ServicePageConfig } from "@/lib/servicePages";

const serviceArtwork: Record<string, string> = {
  "short-video-services": "/images/service-art-short-video.png",
  "video-production": "/images/service-art-video-production.png",
  "ip-building": "/images/service-art-ip-building.png",
  "ads-boosting": "/images/service-art-ads-boosting.png",
};

const serviceDirectionCopy: Record<string, { heading: string; lead: string; cues: string[] }> = {
  "short-video-services": {
    heading: "One clear content engine.",
    lead: "Strategy, hook, script, shoot, edit, and review move as one rhythm, so every short video feels intentional.",
    cues: ["Angle", "Batch", "Direction"],
  },
  "video-production": {
    heading: "Strategy before the camera.",
    lead: "The look, pacing, and shot language are decided before filming, so every frame has a job.",
    cues: ["Brief", "Shot map", "Directed shoot"],
  },
  "ip-building": {
    heading: "Make expertise visible.",
    lead: "We shape the voice, formats, and visual cues that make a person-brand easy to recognise.",
    cues: ["Role", "Voice", "Signature"],
  },
  "ads-boosting": {
    heading: "Scale only what signals.",
    lead: "Creative signal, media pacing, and reporting sit in one loop, so budget follows proof.",
    cues: ["Signal", "Target", "Scale"],
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ServiceLanding({ cfg }: { cfg: ServicePageConfig }) {
  const themeStyle = {
    "--svc-accent": cfg.accent,
    "--svc-accent-soft": cfg.accentSoft,
    "--svc-accent-deep": cfg.accentDeep,
  } as CSSProperties;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cfg.metaTitle,
    serviceType: cfg.schemaType,
    description: cfg.metaDescription,
    keywords: cfg.keywords.join(", "),
    url: `https://yuyu-creative.my/${cfg.slug}`,
    areaServed: "Malaysia",
    provider: {
      "@type": "Organization",
      name: company.name,
      legalName: company.legalName,
      telephone: company.phoneMobile,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressCountry: "MY",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${cfg.title} deliverables`,
      itemListElement: cfg.offerings.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cfg.answers.map((answer) => ({
      "@type": "Question",
      name: answer.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer.a,
      },
    })),
  };

  const titleWords = cfg.title.split(" ");
  const marquee = [...cfg.keywords, cfg.schemaType, cfg.eyebrow, ...cfg.keywords];
  const artwork = serviceArtwork[cfg.slug] ?? serviceArtwork["short-video-services"];
  const direction = serviceDirectionCopy[cfg.slug] ?? {
    heading: cfg.intro.heading,
    lead: cfg.intro.body[0],
    cues: cfg.process.slice(0, 3).map((point) => point.title),
  };

  return (
    <div className="svc" style={themeStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />

      <section className="svc-hero service-hero">
        <div className="svc-noise" aria-hidden />
        <div className="svc-art svc-art-one" aria-hidden />
        <div className="svc-art svc-art-two" aria-hidden />
        <div className="svc-hero-type" aria-hidden>{cfg.title}</div>
        <div className="ref-shell svc-hero-grid">
          <Reveal className="svc-hero-copy">
            <h1>
              {titleWords.map((word, i) => (
                <span key={`${word}-${i}`}>{word}</span>
              ))}
            </h1>
            <strong className="svc-subtitle">{cfg.subtitle}</strong>
            <p>{cfg.lead}</p>
            <div className="svc-hero-actions">
              <Link href="/freeanalysis" className="svc-btn primary">Get free analysis</Link>
              <Link href="/pricing-plan" className="svc-btn ghost">View pricing plan</Link>
            </div>
          </Reveal>

          <Reveal className="svc-hero-art" delay={1}>
            <div className="svc-visual-shell">
              <div className="svc-abstract-frame" aria-hidden>
                <img className="svc-abstract-img" src={artwork} alt="" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="svc-marquee" aria-hidden>
        <div className="svc-marquee-track">
          {marquee.map((k, i) => (
            <span key={i}>{k}</span>
          ))}
        </div>
      </div>

      <section className="svc-section svc-manifesto-section">
        <div className="ref-shell svc-direction-showcase">
          <Reveal className="svc-direction-copy">
            <span className="svc-section-code">Art direction</span>
            <h2>{direction.heading}</h2>
            <p className="svc-direction-lead">{direction.lead}</p>
          </Reveal>
          <Reveal className="svc-direction-visual" delay={1}>
            <img className="svc-direction-core" src="/images/service-direction-core.png" alt="" aria-hidden />
            <img className="svc-direction-accent" src="/images/service-direction-accent.png" alt="" aria-hidden />
            <span className="svc-direction-plane svc-direction-plane-one" aria-hidden />
            <span className="svc-direction-plane svc-direction-plane-two" aria-hidden />
          </Reveal>
          <Reveal className="svc-direction-points" delay={2}>
            {direction.cues.map((cue, i) => (
              <article key={`${cue}-${i}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{cue}</strong>
              </article>
            ))}
          </Reveal>
          <Reveal className="svc-direction-proof" delay={3}>
            {cfg.proof.map((item) => (
              <article key={item.title}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-section-soft">
        <div className="ref-shell">
          <Reveal className="svc-head">
            <span className="svc-eyebrow">{cfg.offeringsHeading}</span>
            <h2>A complete creative system, sculpted end to end.</h2>
            <p>{cfg.offeringsSub}</p>
          </Reveal>
          <Reveal className="svc-offerings" delay={1}>
            {cfg.offerings.map((o) => (
              <article key={o.title}>
                <span className="svc-check"><CheckIcon /></span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-process-section">
        <div className="ref-shell svc-process-layout">
          <Reveal className="svc-head svc-process-copy">
            <span className="svc-eyebrow">Process</span>
            <h2>{cfg.processHeading}</h2>
            <p>{cfg.processLead}</p>
          </Reveal>
          <Reveal className="svc-process" delay={1}>
            <i className="svc-process-spine" aria-hidden />
            {cfg.process.map((step) => (
              <article key={step.step}>
                <span>{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-platform-section">
        <div className="ref-shell svc-platform-showcase">
          <Reveal className="svc-head svc-platform-copy">
            <span className="svc-eyebrow">Platforms</span>
            <h2>{cfg.platformsHeading}</h2>
            <p>{cfg.platformsLead}</p>
          </Reveal>
          <Reveal className="svc-platform-stage" delay={1}>
            <img className="svc-platform-orbit" src="/images/service-platform-orbit.png" alt="" aria-hidden />
            <span className="svc-platform-float svc-platform-float-one" aria-hidden />
            <span className="svc-platform-float svc-platform-float-two" aria-hidden />
          </Reveal>
          <Reveal className="svc-platforms" delay={2}>
            {cfg.platforms.map((p) => (
              <article key={p.key}>
                <img src={p.icon} alt={p.name} width={34} height={34} loading="lazy" />
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-section-soft">
        <div className="ref-shell svc-answers-layout">
          <Reveal className="svc-head">
            <span className="svc-eyebrow">Answers</span>
            <h2>{cfg.answersHeading}</h2>
          </Reveal>
          <Reveal className="svc-answers" delay={1}>
            {cfg.answers.map((answer) => (
              <article key={answer.q}>
                <h3>{answer.q}</h3>
                <p>{answer.a}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-related-section">
        <div className="ref-shell">
          <Reveal className="svc-head center">
            <span className="svc-eyebrow">Explore more</span>
            <h2>Other ways we help you grow.</h2>
          </Reveal>
          <Reveal className="svc-related" delay={1}>
            {cfg.related.map((r) => (
              <Link key={r.href} href={r.href} className="svc-related-card">
                <h3>{r.label}</h3>
                <p>{r.blurb}</p>
                <span className="svc-related-link">Learn more <ArrowIcon /></span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={cfg.ctaTitle}
        sub={cfg.ctaSub}
        cta="Get free analysis"
        href="/freeanalysis"
        cta2="Message us on WhatsApp"
      />

      <CtaModal />
      <ServiceFx />
    </div>
  );
}
