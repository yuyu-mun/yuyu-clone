import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/servicePages";

const cfg = servicePages["short-video-services"];

export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  keywords: cfg.keywords,
  alternates: {
    canonical: "/short-video-services",
  },
};

export default function ShortVideoServicesPage() {
  return <ServiceLanding cfg={cfg} />;
}
