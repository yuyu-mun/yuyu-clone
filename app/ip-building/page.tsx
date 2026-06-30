import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/servicePages";

const cfg = servicePages["ip-building"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/ip-building",
  },
};

export default function IpBuildingPage() {
  return <ServiceLanding cfg={cfg} />;
}
