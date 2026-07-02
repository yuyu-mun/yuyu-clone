import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePagesZh } from "@/lib/servicePages.zh";

const cfg = servicePagesZh["ip-building"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/zh/ip-building",
  },
};

export default function IpBuildingZhPage() {
  return <ServiceLanding cfg={cfg} locale="zh" />;
}
