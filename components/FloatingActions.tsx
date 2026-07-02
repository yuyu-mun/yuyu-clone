"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const pathname = usePathname() || "/";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const isFreeAnalysis = pathname === "/freeanalysis" || pathname === "/zh/freeanalysis";
  const portfolioHref = isZh ? "/zh/our-portfolio" : "/our-portfolio";
  const portfolioLabel = isZh ? "作品集" : "Portfolio";
  const waLabel = isZh ? "洽詢" : "WhatsApp";
  const waMessage = isZh
    ? "你好 Yuyu Creative，我想了解你們的短影音服務，可以分享更多資訊嗎？"
    : "Hi Yuyu Creative, I'm interested in your short video services. Can you share more details?";

  if (isFreeAnalysis) return null;

  return (
    <div className="fab-stack">
      <Link className="fab-card fab-card-portfolio" href={portfolioHref} aria-label={portfolioLabel}>
        <span className="fab-card-ic">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icon-portfolio.png" alt="" width={38} height={38} />
        </span>
        <span className="fab-card-label">{portfolioLabel}</span>
      </Link>

      <a
        className="fab-card fab-card-wa"
        href={whatsappUrl(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={waLabel}
      >
        <span className="fab-card-ic">
          <WhatsAppIcon />
        </span>
        <span className="fab-card-label">{waLabel}</span>
      </a>
    </div>
  );
}
