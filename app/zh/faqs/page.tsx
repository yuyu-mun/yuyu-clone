import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { faqsZh, faqIntroZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: "常见问题 | 嶼嶼創意",
  description: faqIntroZh,
};

export default function FaqZh() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">常见问题</span>
          <h1>常见问题</h1>
          <p>{faqIntroZh}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          {faqsZh.map((group) => (
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

      <CtaBand title="还有其他问题？我们很乐意为你解答。" cta="联络我们" href="/zh/contact" />
    </>
  );
}
