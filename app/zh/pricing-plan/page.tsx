import type { Metadata } from "next";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { addOnsZh, planFeaturesZh, plansZh, pricingZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: pricingZh.metaTitle,
  description: pricingZh.metaDescription,
  alternates: {
    canonical: "/zh/pricing-plan",
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// One primary (solid) CTA on the recommended plan guides the choice;
// the others stay as quieter outline buttons.
const ctaClass = (variant: string) =>
  variant === "personal"
    ? "ref-btn primary plan-cta"
    : variant === "starter"
    ? "ref-btn plan-cta plan-cta-amber"
    : "ref-btn secondary plan-cta";

export default function PricingPlanZhPage() {
  return (
    <div className="pp">
      <header className="pp-hero">
        <div className="ref-shell pp-hero-inner">
          <Reveal>
            <span className="pp-eyebrow">{pricingZh.hero.eyebrow}</span>
            <h1>{pricingZh.hero.title}</h1>
            <p>{pricingZh.hero.sub}</p>
          </Reveal>
        </div>
      </header>

      <section className="pp-section pp-plans" id="packages">
        <div className="ref-shell">
          <div className="plan-row">
            {plansZh.map((plan, i) => (
              <Reveal
                as="article"
                delay={(i + 1) as 1 | 2 | 3}
                className={`plan-card plan-${plan.variant}${plan.featured ? " featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="plan-ribbon">{pricingZh.badges.recommended}</span>}
                {plan.badge && <span className="plan-ribbon plan-ribbon-deal">{plan.badge}</span>}

                <div className="plan-head">
                  <span className="plan-tag">{plan.tag}</span>
                  <h2 className="plan-name">{plan.name}</h2>
                  <div className="plan-price">
                    {plan.original && <s>{plan.original}</s>}
                    <strong>{plan.price}</strong>
                    {plan.save && <span className="plan-save">{plan.save}</span>}
                  </div>
                  <span className="plan-cadence">{plan.cadence}</span>

                  {plan.timer && (
                    <div className="plan-deal">
                      <span className="plan-deal-label">{pricingZh.offer.endsIn}</span>
                      <CountdownTimer locale="zh" />
                    </div>
                  )}

                  <p className="plan-blurb">{plan.blurb}</p>
                </div>

                <div className="plan-foot">
                  {plan.cta.href.startsWith("http") ? (
                    <a href={plan.cta.href} className={ctaClass(plan.variant)} target="_blank" rel="noreferrer">
                      {plan.cta.label}
                    </a>
                  ) : (
                    <Link href={plan.cta.href} className={ctaClass(plan.variant)}>
                      {plan.cta.label}
                    </Link>
                  )}
                  <ul className="plan-feat">
                    {planFeaturesZh.map((f) => (
                      <li key={f.label} className={f.has[i] ? "yes" : "no"}>
                        {f.has[i] ? <CheckIcon /> : <CrossIcon />}
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="pp-addons" delay={1}>
            <span className="pp-addons-title">{pricingZh.addOns.title}</span>
            <div className="pp-addon-row">
              {addOnsZh.map((addon) => (
                <div className="pp-addon" key={addon.title}>
                  <span className="pp-addon-plus" aria-hidden>+</span>
                  <div>
                    <strong>{addon.title}</strong>
                    <p>{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pp-section pp-faq-section">
        <div className="ref-shell pp-faq-layout">
          <Reveal className="pp-head">
            <span className="pp-eyebrow">{pricingZh.faq.eyebrow}</span>
            <h2>{pricingZh.faq.title}</h2>
            <p>{pricingZh.faq.sub}</p>
          </Reveal>
          <Reveal className="pp-faq" delay={1}>
            {pricingZh.faq.items.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <i aria-hidden />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={pricingZh.ctaBand.title}
        sub={pricingZh.ctaBand.sub}
        cta={pricingZh.ctaBand.cta}
        href="/zh/freeanalysis"
        cta2={pricingZh.ctaBand.cta2}
      />
    </div>
  );
}
