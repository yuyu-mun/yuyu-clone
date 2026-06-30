import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Analysis | Yuyu Creative",
  description: "Request a free short video and personal branding analysis for your business.",
};

const benefits = [
  "A review of your current content and positioning",
  "Audience and industry trust-signal assessment",
  "Recommended content directions aligned with your goals",
  "A clear next step toward short video that converts",
];

export default function FreeAnalysisPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get Free Analysis</span>
          <h1>Let&apos;s find your short video strategy.</h1>
          <p>Request a free analysis and we&apos;ll show you how strategic short video content can build trust and grow your business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">What You&apos;ll Get</span>
            <h2>A clear, no-obligation starting point.</h2>
            <div className="checks" style={{ gridTemplateColumns: "1fr", marginTop: 24 }}>
              {benefits.map((b) => (
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
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="business">Business / Brand</label>
                <input id="business" name="business" type="text" placeholder="Your business or industry" />
              </div>
              <div className="form-field">
                <label htmlFor="goals">Your goals</label>
                <textarea id="goals" name="goals" placeholder="What would you like short video to achieve?" />
              </div>
              <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                Request Free Analysis
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
