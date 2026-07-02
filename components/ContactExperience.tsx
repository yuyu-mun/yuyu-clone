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

const strings = {
  en: {
    eyebrow: "Get in touch",
    title: "Our details",
    address: "Studio address",
    office: "Office",
    mobile: "Mobile",
    email: "Email",
    directions: "Directions",
    call: "Call",
    emailCta: "Email",
    hours: "Studio hours",
    hoursValue: "Mon – Fri · 9:30am – 6:30pm",
    ariaMap: `Open ${MAP_QUERY} in maps`,
    ariaCallOffice: (n: string) => `Call the office at ${n}`,
    ariaCallMobile: (n: string) => `Call the mobile at ${n}`,
    ariaEmail: (e: string) => `Email ${e}`,
  },
  zh: {
    eyebrow: "聯絡我們",
    title: "聯絡資訊",
    address: "工作室地址",
    office: "辦公室電話",
    mobile: "手機",
    email: "Email",
    directions: "導航",
    call: "撥打",
    emailCta: "寄信",
    hours: "營業時間",
    hoursValue: "週一至週五 · 9:30am – 6:30pm",
    ariaMap: `在地圖中開啟 ${MAP_QUERY}`,
    ariaCallOffice: (n: string) => `撥打辦公室電話 ${n}`,
    ariaCallMobile: (n: string) => `撥打手機 ${n}`,
    ariaEmail: (e: string) => `寄信給 ${e}`,
  },
};

export default function ContactExperience({ locale = "en" }: { locale?: "en" | "zh" }) {
  const t = strings[locale];

  const details = [
    {
      icon: <PinIcon />,
      label: t.address,
      value: "E-9-4, Block E, Megan Avenue 1, 189 Jalan Tun Razak, 50400 Kuala Lumpur",
      href: googleMapsUrl,
      external: true,
      cta: t.directions,
      aria: t.ariaMap,
    },
    {
      icon: <PhoneIcon />,
      label: t.office,
      value: company.phoneOffice,
      tag: "(O)",
      href: tel(company.phoneOffice),
      cta: t.call,
      aria: t.ariaCallOffice(company.phoneOffice),
    },
    {
      icon: <PhoneIcon />,
      label: t.mobile,
      value: company.phoneMobile,
      tag: "(H)",
      href: tel(company.phoneMobile),
      cta: t.call,
      aria: t.ariaCallMobile(company.phoneMobile),
    },
    {
      icon: <MailIcon />,
      label: t.email,
      value: company.email,
      href: `mailto:${company.email}`,
      cta: t.emailCta,
      aria: t.ariaEmail(company.email),
    },
  ];

  return (
    <section className="cx">
      <div className="container cx-inner">
        <header className="cx-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="cx-title">{t.title}</h1>
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
                <span className="cx-k">{t.hours}</span>
                <span className="cx-hours-v">{t.hoursValue}</span>
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
            <ContactMap googleMapsUrl={googleMapsUrl} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
