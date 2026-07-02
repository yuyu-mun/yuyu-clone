import type { Metadata } from "next";
import { company } from "@/lib/site";
import ContactExperience from "@/components/ContactExperience";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Contact Yuyu Creative | Start Your Branding Project",
  description:
    "Get in touch with Yuyu Creative in Kuala Lumpur. Visit our studio at Megan Avenue 1, Jalan Tun Razak, call, WhatsApp, or send a message to start your short-video project.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  image: absoluteUrl("/images/yuyu-social-preview.png"),
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ContactExperience />
    </>
  );
}
