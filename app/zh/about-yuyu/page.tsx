import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { aboutStatsZh, strengthsZh, teamMalaysiaZh, teamTaiwanZh, ctaTitleZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: "关于嶼嶼 | 战略性短视频合作伙伴",
  description: "内容以策略为核心，表达清晰，帮助品牌实现稳定而长期的成长。",
};

export default function AboutZh() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">关于嶼嶼創意</span>
          <h1>用策略短视频建立真正的信任</h1>
          <p>内容以策略为核心，表达清晰，帮助品牌实现稳定而长期的成长。思考严谨，执行利落，内容有意义。</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">策略先行</span>
            <h2>我们从你的生意开始，而不是从镜头开始。</h2>
          </div>
          <div>
            <p className="lead">嶼嶼創意是一家专注于真实商业成果的短视频与个人品牌公司，服务创办人与专业人士。</p>
            <p style={{ color: "var(--gray)" }}>
              我们以策略为核心，先分析商业模式、受众与产业信任信号，再开始制作。我们的运营由台湾总部经验支持，把成熟的框架带进马来西亚市场。
            </p>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {aboutStatsZh.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">为什么选择嶼嶼</span>
            <h2>六项核心优势</h2>
          </div>
          <div className="checks">
            {strengthsZh.map((s) => (
              <div className="check" key={s.title}>
                <span className="ic">✓</span>
                <p><b>{s.title}</b>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">我们的团队</span>
            <h2>马来西亚团队</h2>
          </div>
          <div className="team-grid">
            {teamMalaysiaZh.map((m) => (
              <div className="member" key={m.name}>
                <div className="ph">{m.initials}</div>
                <div className="cap">
                  <div className="nm">{m.name}</div>
                  <div className="rl">{m.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ margin: "64px 0 26px" }}>
            <h3 style={{ fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)" }}>台湾总部管理团队</h3>
          </div>
          <div className="leader">
            {teamTaiwanZh.map((m) => (
              <div className="leader-card" key={m.name}>
                <div className="av">{m.initials}</div>
                <div className="rl">{m.role}</div>
                <div className="nm">{m.name}</div>
                <p style={{ color: "var(--gray)", fontSize: "0.92rem", margin: "8px 0 0" }}>{m.note}</p>
                <span className="badge">{m.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={ctaTitleZh} cta="联络我们" href="/zh/contact" />
    </>
  );
}
