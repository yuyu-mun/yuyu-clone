import Link from "next/link";
import { company } from "@/lib/site";

export default function CtaBand({
  title = "Ready to Start Your Social Media Content Journey?",
  sub,
  cta = "Get In Touch",
  href = "/contact",
  cta2,
}: {
  title?: string;
  sub?: string;
  cta?: string;
  href?: string;
  cta2?: string;
}) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-brand" aria-hidden>
            <img src="/images/logo-black-vertical.png" alt="Yuyu Creative" />
          </div>

          <div className="cta-body">
            <h2>{title}</h2>
            {sub && <p>{sub}</p>}
            <div className="btn-row">
              <Link href={href} className="btn pill primary">{cta}</Link>
              {cta2 && (
                <a href={company.social.whatsapp} className="btn pill ghost">{cta2}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
