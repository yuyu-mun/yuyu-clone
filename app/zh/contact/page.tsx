import type { Metadata } from "next";
import { company } from "@/lib/site";
import { introZh } from "@/lib/site.zh";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "联络嶼嶼創意 | 开启你的品牌项目",
  description: "今天就踏出第一步。让策略短视频内容支持你的成长，强化你在行业中的影响力。",
};

export default function ContactZh() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">联络嶼嶼創意</span>
          <h1>今天就踏出第一步。</h1>
          <p>让策略短视频内容支持你的成长，强化你在行业中的影响力。</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">联络我们</span>
            <h2>聊聊你的品牌。</h2>
            <p style={{ color: "var(--gray)" }}>{introZh}</p>

            <div style={{ marginTop: 24 }}>
              <div className="info-row"><span className="k">地址</span><span className="v">{company.address}</span></div>
              <div className="info-row"><span className="k">办公室</span><span className="v">{company.phoneOffice}</span></div>
              <div className="info-row"><span className="k">手机</span><span className="v">{company.phoneMobile}</span></div>
              <div className="info-row"><span className="k">电邮</span><span className="v">{company.email}</span></div>
              <div className="info-row"><span className="k">公司</span><span className="v">{company.legalName} · {company.registration}</span></div>
            </div>

            <div className="footer" style={{ background: "transparent", padding: 0, marginTop: 24 }}>
              <div className="social" style={{ marginTop: 0 }}>
                <a href={company.social.facebook} aria-label="Facebook" style={{ color: "var(--dark)", borderColor: "var(--line)" }}><FacebookIcon /></a>
                <a href={company.social.instagram} aria-label="Instagram" style={{ color: "var(--dark)", borderColor: "var(--line)" }}><InstagramIcon /></a>
                <a href={company.social.whatsapp} aria-label="WhatsApp" style={{ color: "var(--dark)", borderColor: "var(--line)" }}><WhatsAppIcon /></a>
              </div>
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
                <label htmlFor="phone">电话</label>
                <input id="phone" name="phone" type="tel" placeholder="+60 ..." />
              </div>
              <div className="form-field">
                <label htmlFor="message">留言</label>
                <textarea id="message" name="message" placeholder="告诉我们你的品牌与目标……" required />
              </div>
              <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                联络我们
              </button>
              <a
                href={company.social.whatsapp}
                className="btn ghost"
                style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
              >
                在 WhatsApp 上联系我们
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
