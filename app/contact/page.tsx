import type { Metadata } from "next";
import { company } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Yuyu Creative | Start Your Branding Project",
  description:
    "Take the first step today. Let strategic short video content support your growth and strengthen your presence in the industry.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Yuyu Creative</span>
          <h1>Take the first step today.</h1>
          <p>Let strategic short video content support your growth and strengthen your presence in the industry.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2>Let&apos;s talk about your brand.</h2>
            <p style={{ color: "var(--gray)" }}>{company.intro}</p>

            <div style={{ marginTop: 24 }}>
              <div className="info-row"><span className="k">Address</span><span className="v">{company.address}</span></div>
              <div className="info-row"><span className="k">Office</span><span className="v">{company.phoneOffice}</span></div>
              <div className="info-row"><span className="k">Mobile</span><span className="v">{company.phoneMobile}</span></div>
              <div className="info-row"><span className="k">Email</span><span className="v">{company.email}</span></div>
              <div className="info-row"><span className="k">Company</span><span className="v">{company.legalName} · {company.registration}</span></div>
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
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+60 ..." />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your brand and goals..." required />
              </div>
              <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                Get In Touch
              </button>
              <a
                href={company.social.whatsapp}
                className="btn ghost"
                style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
              >
                Message us on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
