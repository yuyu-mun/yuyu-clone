import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePagesZh } from "@/lib/servicePages.zh";

const cfg = servicePagesZh["ads-boosting"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/zh/ads-boosting",
  },
};

export default function AdsBoostingZhPage() {
  return <ServiceLanding cfg={cfg} locale="zh" />;
}
