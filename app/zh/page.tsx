import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { ArrowIcon } from "@/components/Icons";
import { clients } from "@/lib/site";
import {
  heroZh,
  statsZh,
  clientsLabelZh,
  testimonialsZh,
  servicesZh,
  portfolioZh,
  ctaTitleZh,
} from "@/lib/site.zh";

export const metadata: Metadata = {
  title: "嶼嶼創意 | 马来西亚短视频代运营公司 — 个人品牌与商业增长",
  description: heroZh.body,
};

export default function HomeZh() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">{heroZh.eyebrow}</span>
          <h1>{heroZh.title}</h1>
          <p>{heroZh.body}</p>
          <Link href="/zh/contact" className="btn light">{heroZh.cta}</Link>
        </div>
      </section>

      <section className="section dark" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="container">
          <div className="stats-grid">
            {statsZh.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">关于我们</span>
            <h2>马来西亚短视频代运营公司，专注个人品牌 IP 与商业增长</h2>
          </div>
          <div>
            <p className="lead">
              嶼嶼創意是为企业主与专业人士打造的短视频 IP 策略伙伴。我们以策略为核心，先分析你的商业模式、受众与产业信任信号，再开始制作。
            </p>
            <p style={{ color: "var(--gray)" }}>
              我们不追逐潮流，而是用策略塑造、表达清晰、能帮助生意成长的短视频内容，并由台湾总部经验支持。
            </p>
            <Link href="/zh/about-yuyu" className="readmore">了解更多 <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section-sm light">
        <div className="container">
          <p className="center" style={{ color: "var(--muted)", marginBottom: 36, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.85rem" }}>
            {clientsLabelZh}
          </p>
          <div className="logos">
            {clients.map((c) => (
              <div className="logo-cell" key={c.name}>
                <Image src={c.img} alt={c.name} width={140} height={56} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">客户评价</span>
            <h2>客户好评</h2>
          </div>
          <div className="masonry">
            {testimonialsZh.map((t) => (
              <div className="tcard" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>「{t.quote}」</p>
                <div className="person">
                  <Image src={t.img} alt={t.name} width={50} height={50} />
                  <div>
                    <div className="nm">{t.name}</div>
                    {t.meta && <div className="mt">{t.meta}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">我们提供</span>
            <h2>短视频制作</h2>
          </div>
          <div className="grid-2" style={{ alignItems: "stretch" }}>
            {servicesZh.map((s) => (
              <div className="card" key={s.title}>
                <div className="thumb"><Image src={s.img} alt={s.title} width={600} height={600} /></div>
                <div className="body">
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--gray)" }}>{s.desc}</p>
                  <div className="svc-price" style={{ marginTop: "auto" }}>
                    {s.price} <span>/ {s.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/zh/short-video-services" className="btn ghost">查看所有服务</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">作品集</span>
            <h2>战略与执行的完美融合</h2>
          </div>
          <div className="grid-3">
            {portfolioZh.slice(0, 3).map((p) => (
              <Link href="/zh/our-portfolio" className="card" key={p.name}>
                <div className="thumb"><Image src={p.img} alt={p.name} width={600} height={600} /></div>
                <div className="body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.95rem" }}>{p.blurb}</p>
                  <div className="meta">{p.metric} · {p.platform}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/zh/our-portfolio" className="btn ghost">查看完整作品集</Link>
          </div>
        </div>
      </section>

      <CtaBand title={ctaTitleZh} cta="联络我们" href="/zh/contact" />
    </>
  );
}
