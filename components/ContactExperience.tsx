import { company } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import ContactMap from "@/components/ContactMap";

/* --- Location + map deep links (no Google Maps API needed) --- */
const MAP_QUERY = "Megan Avenue 1, 189 Jalan Tun Razak, 50400 Kuala Lumpur";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAP_QUERY
)}`;

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6.5 4h3l1.2 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tel = (n: string) => `tel:${n.replace(/[\s-]/g, "")}`;

const details = [
  {
    icon: <PinIcon />,
    label: "Studio address",
    value: "E-9-4, Block E, Megan Avenue 1, 189 Jalan Tun Razak, 50400 Kuala Lumpur",
    href: googleMapsUrl,
    external: true,
    cta: "Directions",
    aria: `Open ${MAP_QUERY} in maps`,
  },
  {
    icon: <PhoneIcon />,
    label: "Office",
    value: company.phoneOffice,
    tag: "(O)",
    href: tel(company.phoneOffice),
    cta: "Call",
    aria: `Call the office at ${company.phoneOffice}`,
  },
  {
    icon: <PhoneIcon />,
    label: "Mobile",
    value: company.phoneMobile,
    tag: "(H)",
    href: tel(company.phoneMobile),
    cta: "Call",
    aria: `Call the mobile at ${company.phoneMobile}`,
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    cta: "Email",
    aria: `Email ${company.email}`,
  },
];

export default function ContactExperience() {
  return (
    <section className="cx">
      <div className="container cx-inner">
        <header className="cx-head">
          <span className="eyebrow">Get in touch</span>
          <h1 className="cx-title">Our details</h1>
        </header>

        <div className="cx-main">
          {/* Details */}
          <div className="cx-panel">
            <ul className="cx-details">
              {details.map((d) => (
                <li key={d.label}>
                  <a
                    className="cx-detail"
                    href={d.href}
                    aria-label={d.aria}
                    {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="cx-detail-ic">{d.icon}</span>
                    <span className="cx-detail-body">
                      <span className="cx-k">{d.label}</span>
                      <span className="cx-v">
                        {d.value}
                        {d.tag ? <span className="cx-tag"> {d.tag}</span> : null}
                      </span>
                    </span>
                    <span className="cx-detail-go" aria-hidden>
                      <span className="cx-detail-cta">{d.cta}</span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="cx-panel-foot">
              <div className="cx-hours">
                <span className="cx-k">Studio hours</span>
                <span className="cx-hours-v">Mon – Fri · 9:30am – 6:30pm</span>
              </div>
              <div className="cx-social-icons">
                <a href={company.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href={company.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                <a href={company.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
              </div>
            </div>
          </div>

          {/* Draggable map preview */}
          <div className="cx-mapcard">
            <ContactMap googleMapsUrl={googleMapsUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
