"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { company, nav, uiEn, type NavItem } from "@/lib/site";
import { navZh, uiZh, introZh } from "@/lib/site.zh";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const ui = isZh ? uiZh : uiEn;
  const menu = (isZh ? navZh : nav) as NavItem[];
  const servicesGroup = menu.find((n) => n.children);
  const quickLinks = menu.filter((n) => n.label !== "Marketing Insight" && !n.children);

  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <Image src="/images/logo-white-horizontal.png" alt="Yuyu Creative" width={200} height={44} className="flogo" />
            <p style={{ maxWidth: "42ch" }}>{isZh ? introZh : company.intro}</p>
            <div className="social">
              <a href={company.social.facebook} aria-label="Facebook"><FacebookIcon /></a>
              <a href={company.social.instagram} aria-label="Instagram"><InstagramIcon /></a>
              <a href={company.social.whatsapp} aria-label="WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>

          <div>
            <h4>{ui.quickLinks}</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {servicesGroup?.children && (
            <div>
              <h4>{servicesGroup.label}</h4>
              <ul>
                {servicesGroup.children.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4>{ui.contacts}</h4>
            <ul>
              <li>{company.address}</li>
              <li><a href={`tel:${company.phoneOffice.replace(/\s/g, "")}`}>{company.phoneOffice} (O)</a></li>
              <li><a href={`tel:${company.phoneMobile.replace(/\s/g, "")}`}>{company.phoneMobile} (H)</a></li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>© 2026 Yuyu Creative. All Rights Reserved.</span>
          <span>{company.legalName} · {company.registration}</span>
        </div>
      </div>
    </footer>
  );
}
