import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import CtaModal from "@/components/CtaModal";
import Reveal from "@/components/Reveal";
import ServiceFx from "@/components/ServiceFx";
import { ctaTitleZh, platformsZh, processZh, promiseZh, servicesZh, strengthsZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: "短视频服务 | 嶼嶼創意",
  description: "以策略为核心的短视频内容制作，帮助创办人与品牌把专业转化为成长动能。",
};

const themeStyle = {
  "--svc-accent": "#2f6bff",
  "--svc-accent-soft": "#eef4ff",
  "--svc-accent-deep": "#10307e",
} as CSSProperties;

const platformIcons = [
  "https://cdn.simpleicons.org/tiktok/111111",
  "https://cdn.simpleicons.org/instagram/E4405F",
  "https://cdn.simpleicons.org/youtube/FF0000",
  "https://cdn.simpleicons.org/facebook/1877F2",
  "https://cdn.simpleicons.org/xiaohongshu/FF2442",
];

export default function ServicesZh() {
  const directionCues = ["定位", "脚本", "镜头"];
  const directionProofZh = strengthsZh.slice(0, 3);

  return (
    <div className="svc svc-zh" style={themeStyle}>
      <section className="svc-hero service-hero">
        <div className="svc-noise" aria-hidden />
        <div className="svc-art svc-art-one" aria-hidden />
        <div className="svc-art svc-art-two" aria-hidden />
        <div className="svc-hero-type" aria-hidden>短视频服务</div>

        <div className="ref-shell svc-hero-grid">
          <Reveal className="svc-hero-copy">
            <h1>
              <span>短视频</span>
              <span>制作服务</span>
            </h1>
            <strong className="svc-subtitle">以策略、镜头语言与剪辑节奏，把专业变成让人记住的内容资产。</strong>
            <p>{promiseZh.body}</p>
            <div className="svc-hero-actions">
              <Link href="/zh/freeanalysis" className="svc-btn primary">预约免费咨询</Link>
              <a href="#packages" className="svc-btn ghost">查看制作方案</a>
            </div>
          </Reveal>

          <Reveal className="svc-hero-art" delay={1}>
            <div className="svc-visual-shell">
              <div className="svc-abstract-frame" aria-hidden>
                <img className="svc-abstract-img" src="/images/service-art-short-video.png" alt="" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="svc-marquee" aria-hidden>
        <div className="svc-marquee-track">
          {[...platformsZh, "人设定位", "脚本撰写", "拍摄指导", "成效追踪", ...platformsZh].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="svc-section svc-manifesto-section">
        <div className="ref-shell svc-direction-showcase">
          <Reveal className="svc-direction-copy">
            <span className="svc-section-code">{promiseZh.eyebrow}</span>
            <h2>先定方向，再拍内容。</h2>
            <p className="svc-direction-lead">把定位、脚本和镜头节奏先整理清楚，让每支短视频都有同一个清晰目标。</p>
          </Reveal>
          <Reveal className="svc-direction-visual" delay={1}>
            <img className="svc-direction-core" src="/images/service-direction-core.png" alt="" aria-hidden />
            <img className="svc-direction-accent" src="/images/service-direction-accent.png" alt="" aria-hidden />
            <span className="svc-direction-plane svc-direction-plane-one" aria-hidden />
            <span className="svc-direction-plane svc-direction-plane-two" aria-hidden />
          </Reveal>
          <Reveal className="svc-direction-points" delay={2}>
            {directionCues.map((cue, i) => (
              <article key={cue}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{cue}</strong>
              </article>
            ))}
          </Reveal>
          <Reveal className="svc-direction-proof" delay={3}>
            {directionProofZh.map((item) => (
              <article key={item.title}>
                <span>创意重点</span>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-section-soft" id="packages">
        <div className="ref-shell">
          <Reveal className="svc-head">
            <span className="svc-eyebrow">制作方案</span>
            <h2>让每一个周期都像一套完整的创意系统。</h2>
            <p>根据你的场景、预算与品牌气质，选择摄影棚或实地拍摄。所有方案都包含策略、脚本、拍摄、剪辑与成效追踪。</p>
          </Reveal>
          <Reveal className="svc-packages-art" delay={1}>
            {servicesZh.map((s) => (
              <article key={s.title} className={s.feature ? "is-featured" : ""}>
                <div className="svc-package-media">
                  <span>{s.feature ? "02" : "01"}</span>
                  <i aria-hidden />
                </div>
                <div className="svc-package-body">
                  <span>{s.feature ? "旗舰方案" : "影棚方案"}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <strong>{s.price} <small>{s.unit}</small></strong>
                  <ul>
                    {s.features.slice(0, 5).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-process-section">
        <div className="ref-shell svc-process-layout">
          <Reveal className="svc-head svc-process-copy">
            <span className="svc-eyebrow">合作流程</span>
            <h2>从定位到发布，每一步都有美感与目的。</h2>
            <p>流程不只是交付影片，而是持续把你的个人品牌变得更清楚、更稳定、更容易被记住。</p>
          </Reveal>
          <Reveal className="svc-process" delay={1}>
            <i className="svc-process-spine" aria-hidden />
            {processZh.map((p) => (
              <article key={p.step}>
                <span>{p.step}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-platform-section">
        <div className="ref-shell svc-platform-showcase">
          <Reveal className="svc-head svc-platform-copy">
            <span className="svc-eyebrow">分发平台</span>
            <h2>一个内容核心，五个平台各自发光。</h2>
            <p>我们会根据不同平台的观看习惯调整节奏、封面、文案与发布方式。</p>
          </Reveal>
          <Reveal className="svc-platform-stage" delay={1}>
            <img className="svc-platform-orbit" src="/images/service-platform-orbit.png" alt="" aria-hidden />
            <span className="svc-platform-float svc-platform-float-one" aria-hidden />
            <span className="svc-platform-float svc-platform-float-two" aria-hidden />
          </Reveal>
          <Reveal className="svc-platforms" delay={2}>
            {platformsZh.map((platform, i) => (
              <article key={platform}>
                <img src={platformIcons[i]} alt={platform} width={34} height={34} loading="lazy" />
                <h3>{platform}</h3>
                <p>依据平台语境调整内容包装，让同一个专业观点以更自然的方式抵达受众。</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="svc-section svc-related-section">
        <div className="ref-shell">
          <Reveal className="svc-head center">
            <span className="svc-eyebrow">内容优势</span>
            <h2>专业感、记忆点与商业结果一起成立。</h2>
          </Reveal>
          <Reveal className="svc-related svc-zh-strengths" delay={1}>
            {strengthsZh.slice(0, 3).map((s) => (
              <article key={s.title} className="svc-related-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="svc-related-link">YuYu Creative</span>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand title={ctaTitleZh} cta="预约免费咨询" href="/zh/freeanalysis" />
      <CtaModal />
      <ServiceFx />
    </div>
  );
}
