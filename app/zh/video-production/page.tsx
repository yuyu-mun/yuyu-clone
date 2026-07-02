import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePagesZh } from "@/lib/servicePages.zh";

const cfg = servicePagesZh["video-production"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/zh/video-production",
  },
};

export default function VideoProductionZhPage() {
  return <ServiceLanding cfg={cfg} locale="zh" />;
}
