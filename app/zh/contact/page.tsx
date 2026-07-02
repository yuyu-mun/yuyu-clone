import type { Metadata } from "next";
import { company } from "@/lib/site";
import ContactExperience from "@/components/ContactExperience";

export const metadata: Metadata = {
  title: "聯絡嶼嶼創意｜開始你的品牌專案",
  description:
    "與吉隆坡的嶼嶼創意聯繫。歡迎造訪我們位於 Megan Avenue 1（Jalan Tun Razak）的工作室，或透過電話、WhatsApp、Email 展開你的短影音專案。",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  image: "https://yuyu-creative.com.my/images/yuyu-social-preview.png",
  email: company.email,
  telephone: company.phoneOffice,
  address: {
    "@type": "PostalAddress",
    streetAddress: "E-9-4, Block E, Megan Avenue 1, 189 Jalan Tun Razak",
    addressLocality: "Kuala Lumpur",
    postalCode: "50400",
    addressCountry: "MY",
  },
  geo: { "@type": "GeoCoordinates", latitude: 3.1628284, longitude: 101.7144152 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "18:30",
  },
};

export default function ContactZhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ContactExperience locale="zh" />
    </>
  );
}
