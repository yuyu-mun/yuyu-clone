import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/servicePages";

const cfg = servicePages["ads-boosting"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/ads-boosting",
  },
};

export default function AdsBoostingPage() {
  return <ServiceLanding cfg={cfg} />;
}
