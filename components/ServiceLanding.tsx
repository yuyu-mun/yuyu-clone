import type { CSSProperties } from "react";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ServiceFx from "@/components/ServiceFx";
import { ArrowIcon } from "@/components/Icons";
import { company } from "@/lib/site";
import type { ServicePageConfig } from "@/lib/servicePages";

const serviceArtwork: Record<string, string> = {
  "short-video-services": "/images/service-art-short-video.webp",
  "video-production": "/images/service-art-video-production.webp",
  "ip-building": "/images/service-art-ip-building.webp",
  "ads-boosting": "/images/service-art-ads-boosting.webp",
};

const serviceDirectionCopy: Record<string, Record<string, { heading: string; lead: string; cues: string[] }>> = {
  en: {
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
  },
  zh: {
    "short-video-services": {
      heading: "一套清晰的內容引擎。",
      lead: "策略、開場鉤子、腳本、拍攝、剪輯與復盤以同一個節奏運轉，讓每支短影音都有明確目的。",
      cues: ["切角", "批次製作", "方向"],
    },
    "video-production": {
      heading: "開機之前，先有策略。",
      lead: "畫面風格、節奏與鏡頭語言在開拍前就已定案，讓每一個畫面都有任務。",
      cues: ["需求梳理", "分鏡規劃", "現場執導"],
    },
    "ip-building": {
      heading: "讓專業被看見。",
      lead: "我們打磨語氣、內容形式與視覺記憶點，讓你的個人品牌一眼就能被認出。",
      cues: ["角色定位", "語氣", "記憶點"],
    },
    "ads-boosting": {
      heading: "只放大有效的內容。",
      lead: "素材訊號、投放節奏與成效報告在同一個循環裡，預算永遠跟著證據走。",
      cues: ["訊號", "受眾", "放大"],
    },
  },
};

const serviceUi = {
  en: {
    viewPricing: "View pricing plan",
    pricingHref: "/pricing-plan",
    artDirection: "Art direction",
    offeringsTitle: "A complete creative system, sculpted end to end.",
    process: "Process",
    platforms: "Platforms",
    answers: "Answers",
    explore: "Explore more",
    otherWays: "Other ways we help you grow.",
    learnMore: "Learn more",
    cta2: "WhatsApp us",
  },
  zh: {
    viewPricing: "查看價格方案",
    pricingHref: "/zh/pricing-plan",
    artDirection: "創意方向",
    offeringsTitle: "一套完整的創意系統，從頭到尾精雕細琢。",
    process: "服務流程",
    platforms: "發布平台",
    answers: "常見問題",
    explore: "探索更多",
    otherWays: "我們還能這樣幫助你成長。",
    learnMore: "了解更多",
    cta2: "WhatsApp 聯絡",
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ServiceLanding({ cfg, locale = "en" }: { cfg: ServicePageConfig; locale?: "en" | "zh" }) {
  const ui = serviceUi[locale];
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
    url: `https://yuyu-creative.my/${locale === "zh" ? "zh/" : ""}${cfg.slug}`,
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
  const direction = serviceDirectionCopy[locale][cfg.slug] ?? {
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
              <Link href={ui.pricingHref} className="svc-btn primary">{ui.viewPricing}</Link>
            </div>
          </Reveal>

          <Reveal className="svc-hero-art" delay={1}>
            <div className="svc-visual-shell">
              <div className="svc-abstract-frame" aria-hidden>
                <img className="svc-abstract-img" src={artwork} alt="" fetchPriority="high" decoding="async" />
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
            <span className="svc-section-code">{ui.artDirection}</span>
            <h2>{direction.heading}</h2>
            <p className="svc-direction-lead">{direction.lead}</p>
          </Reveal>
          <Reveal className="svc-direction-visual" delay={1}>
            <img className="svc-direction-core" src="/images/service-direction-core.webp" alt="" aria-hidden loading="lazy" decoding="async" />
            <img className="svc-direction-accent" src="/images/service-direction-accent.webp" alt="" aria-hidden loading="lazy" decoding="async" />
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
            <h2>{ui.offeringsTitle}</h2>
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
            <span className="svc-eyebrow">{ui.process}</span>
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
            <span className="svc-eyebrow">{ui.platforms}</span>
            <h2>{cfg.platformsHeading}</h2>
            <p>{cfg.platformsLead}</p>
          </Reveal>
          <Reveal className="svc-platform-stage" delay={1}>
            <img className="svc-platform-orbit" src="/images/service-platform-orbit.webp" alt="" aria-hidden loading="lazy" decoding="async" />
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
            <span className="svc-eyebrow">{ui.answers}</span>
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
            <span className="svc-eyebrow">{ui.explore}</span>
            <h2>{ui.otherWays}</h2>
          </Reveal>
          <Reveal className="svc-related" delay={1}>
            {cfg.related.map((r) => (
              <Link key={r.href} href={r.href} className="svc-related-card">
                <h3>{r.label}</h3>
                <p>{r.blurb}</p>
                <span className="svc-related-link">{ui.learnMore} <ArrowIcon /></span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={cfg.ctaTitle}
        sub={cfg.ctaSub}
        cta={ui.viewPricing}
        href={ui.pricingHref}
        cta2={ui.cta2}
      />

      <ServiceFx />
    </div>
  );
}
