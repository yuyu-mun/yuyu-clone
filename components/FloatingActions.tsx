"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/site";
import { PortfolioIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const pathname = usePathname() || "/";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const portfolioHref = isZh ? "/zh/our-portfolio" : "/our-portfolio";

  return (
    <div className="fab-stack">
      <a
        className="fab fab-wa"
        href={company.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isZh ? "WhatsApp 聯絡" : "Chat on WhatsApp"}
      >
        <span className="fab-ic"><WhatsAppIcon /></span>
        <span className="fab-label">{isZh ? "聯絡我們" : "WhatsApp"}</span>
      </a>

      <Link
        className="fab fab-portfolio"
        href={portfolioHref}
        aria-label={isZh ? "查看作品集" : "View portfolio"}
      >
        <span className="fab-ic"><PortfolioIcon /></span>
        <span className="fab-label">{isZh ? "作品集" : "Portfolio"}</span>
      </Link>
    </div>
  );
}
