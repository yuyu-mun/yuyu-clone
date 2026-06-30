import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs | Yuyu Creative Malaysia",
  description:
    "Everything you need to know about building a sustainable short video ecosystem for your personal brand or business.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about building a sustainable short video ecosystem for your personal brand or business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          {faqs.map((group) => (
            <div className="faq-group" key={group.group}>
              <h3>{group.group}</h3>
              {group.items.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p className="ans">{item.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have questions? We're happy to help." cta="Contact Us" />
    </>
  );
}
