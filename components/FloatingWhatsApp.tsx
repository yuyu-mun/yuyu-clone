"use client";

import { usePathname } from "next/navigation";
import { company } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  const pathname = usePathname() || "/";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  return (
    <a className="fab" href={company.social.whatsapp} aria-label="WhatsApp">
      <WhatsAppIcon />
      <span className="label">{isZh ? "WhatsApp 联系" : "Chat on WhatsApp"}</span>
    </a>
  );
}
