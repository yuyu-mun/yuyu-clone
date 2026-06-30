import type { Metadata } from "next";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import CtaBand from "@/components/CtaBand";
import CtaModal from "@/components/CtaModal";
import Reveal from "@/components/Reveal";
import { addOns, planFeatures, plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing Plan | Yuyu Creative Malaysia",
  description:
    "Yuyu Creative pricing for short video services in Malaysia. Compare the starter shoot, monthly personal brand plan, and corporate production, with add-ons, our process, and pricing FAQs.",
  alternates: {
    canonical: "/pricing-plan",
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

const faqs = [
  {
    q: "How long is the commitment?",
    a: "We begin with a 3-period contract (about three months) so the channel has time to build identity and traction. After that you can renew, pause, or adjust freely.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Many founders start with the one-time Starter Shoot, then move up to the monthly Personal Brand plan once they have seen the process work.",
  },
  {
    q: "What is not included?",
    a: "Everything needed to produce the videos — strategy, scripts, guided filming, and editing — is in every plan. Posting, captions, and ad spend are optional add-ons.",
  },
  {
    q: "How does corporate pricing work?",
    a: "Corporate Production is quoted around your campaign, team, locations, and deliverables. Share the brief and we will scope a fixed proposal.",
  },
];

// One primary (solid) CTA on the recommended plan guides the choice;
// the others stay as quieter outline buttons.
const ctaClass = (variant: string) =>
  variant === "personal"
    ? "ref-btn primary plan-cta"
    : variant === "starter"
    ? "ref-btn plan-cta plan-cta-amber"
    : "ref-btn secondary plan-cta";

export default function PricingPlanPage() {
  return (
    <div className="pp">
      <header className="pp-hero">
        <div className="ref-shell pp-hero-inner">
          <Reveal>
            <span className="pp-eyebrow">Pricing</span>
            <h1>Plans that grow with your brand.</h1>
            <p>
              Pick a starting point. Every plan runs on the same proven process — move up, down, or
              pause whenever you need to.
            </p>
            <p className="pp-trustline">
              <strong>1,000+</strong> founders served <span>·</span> <strong>960%</strong> renewal
              rate <span>·</span> <strong>8B+</strong> views produced
            </p>
          </Reveal>
        </div>
      </header>

      <section className="pp-section pp-plans" id="packages">
        <div className="ref-shell">
          <div className="plan-row">
            {plans.map((plan, i) => (
              <Reveal
                as="article"
                delay={(i + 1) as 1 | 2 | 3}
                className={`plan-card plan-${plan.variant}${plan.featured ? " featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="plan-ribbon">Recommended</span>}
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
                      <span className="plan-deal-label">Offer ends in</span>
                      <CountdownTimer />
                    </div>
                  )}

                  <p className="plan-blurb">{plan.blurb}</p>
                </div>

                <div className="plan-foot">
                  <Link href={plan.cta.href} className={ctaClass(plan.variant)}>
                    {plan.cta.label}
                  </Link>
                  <ul className="plan-feat">
                    {planFeatures.map((f) => (
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
            <span className="pp-addons-title">Add to any plan</span>
            <div className="pp-addon-row">
              {addOns.map((addon) => (
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
            <span className="pp-eyebrow">FAQ</span>
            <h2>Before you choose.</h2>
            <p>Not sure which plan fits? A free analysis is the fastest way to find out.</p>
          </Reveal>
          <Reveal className="pp-faq" delay={1}>
            {faqs.map((f) => (
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
        title="Still deciding?"
        sub="Book a free analysis and we will recommend the right plan for your goals — no pressure."
        cta="Get free analysis"
        cta2="Message us on WhatsApp"
      />

      <CtaModal />
    </div>
  );
}
