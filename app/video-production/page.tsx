import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/servicePages";

const cfg = servicePages["video-production"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/video-production",
  },
};

export default function VideoProductionPage() {
  return <ServiceLanding cfg={cfg} />;
}
