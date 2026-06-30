import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "免费咨询 | 嶼嶼創意",
  description: "为你的生意预约一次免费的短视频与个人品牌诊断。",
};

const benefitsZh = [
  "检视你目前的内容与定位",
  "受众与产业信任信号评估",
  "对齐目标的内容方向建议",
  "迈向能成交短视频的明确下一步",
];

export default function FreeAnalysisZh() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">免费咨询</span>
          <h1>一起找出你的短视频策略。</h1>
          <p>预约免费咨询，我们将告诉你策略短视频内容如何为你建立信任、推动生意成长。</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">你将获得</span>
            <h2>一个清晰、无负担的起点。</h2>
            <div className="checks" style={{ gridTemplateColumns: "1fr", marginTop: 24 }}>
              {benefitsZh.map((b) => (
                <div className="check" key={b}>
                  <span className="ic">✓</span>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form className="card" style={{ padding: 30 }} action={`mailto:${company.email}`} method="post">
              <div className="form-field">
                <label htmlFor="name">姓名</label>
                <input id="name" name="name" type="text" placeholder="你的姓名" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">电邮</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="business">公司 / 品牌</label>
                <input id="business" name="business" type="text" placeholder="你的公司或产业" />
              </div>
              <div className="form-field">
                <label htmlFor="goals">你的目标</label>
                <textarea id="goals" name="goals" placeholder="你希望短视频帮你达成什么？" />
              </div>
              <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                预约免费咨询
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
