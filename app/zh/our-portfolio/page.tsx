import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { portfolioZh, ctaTitleZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: "作品集 | 嶼嶼創意 — 战略与执行的完美融合",
  description: "横跨汽车、居家清洁、宠物、电商与医疗保健等产业的短视频作品。",
};

export default function PortfolioZh() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">作品集</span>
          <h1>战略与执行的完美融合</h1>
          <p>横跨多个产业的真实成果——从汽车产业 KOL 到医疗专科医师，皆建立在策略与稳定的执行之上。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {portfolioZh.map((p) => (
              <div className="card" key={p.name}>
                <div className="thumb"><Image src={p.img} alt={p.name} width={600} height={600} /></div>
                <div className="body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.95rem" }}>{p.blurb}</p>
                  <div className="meta">{p.metric} · {p.platform}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={ctaTitleZh} cta="联络我们" href="/zh/contact" />
    </>
  );
}
