"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { nav, uiEn, type NavItem } from "@/lib/site";
import { navZh, uiZh } from "@/lib/site.zh";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<string | null>(null);
  const [solid, setSolid] = useState(pathname.endsWith("/about-yuyu") ? 1 : 0);
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  const menu = (isZh ? navZh : nav) as NavItem[];
  const ui = isZh ? uiZh : uiEn;
  const homeHref = isZh ? "/zh" : "/";
  const freeHref = isZh ? "/zh/freeanalysis" : "/freeanalysis";
  const toggleHref = isZh
    ? pathname.replace(/^\/zh/, "") || "/"
    : pathname.startsWith("/our-portfolio/")
    ? "/zh/our-portfolio"
    : pathname === "/"
    ? "/zh"
    : `/zh${pathname}`;

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const hero = document.querySelector<HTMLElement>("main > section:first-child");
      if (!hero) {
        setSolid(1);
        return;
      }

      const isBlueHero =
        hero.classList.contains("ref-hero") ||
        hero.classList.contains("service-hero") ||
        hero.classList.contains("about-hero") ||
        hero.classList.contains("portfolio-hero");
      if (!isBlueHero) {
        setSolid(1);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      const headerHeight = getComputedStyle(document.documentElement).getPropertyValue("--header-h") || "76";
      const headerPx = Number.parseFloat(headerHeight) || 76;
      const distance = Math.max(1, heroBottom - headerPx);
      const next = Math.min(1, Math.max(0, window.scrollY / distance));
      setSolid(next);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <header className={`header${open ? " is-menu-open" : ""}`} style={{ "--header-solid": solid } as CSSProperties}>
      <div className="container header-inner">
        <Link href={homeHref} className="logo" aria-label="Yuyu Creative home">
          <Image src="/images/logo-white-horizontal.png" alt="Yuyu Creative" width={180} height={40} priority />
        </Link>

        <nav className="nav">
          {menu.map((item) =>
            item.children ? (
              <div
                className={`nav-group${collapsed === item.label ? " is-collapsed" : ""}`}
                key={item.label}
                onMouseLeave={() => setCollapsed(null)}
              >
                <button type="button" className="nav-group-trigger" aria-haspopup="true">
                  {item.label}
                  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="nav-dropdown" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      onClick={(e) => {
                        setCollapsed(item.label);
                        e.currentTarget.blur();
                      }}
                    >
                      <strong>{child.label}</strong>
                      {child.desc && <span>{child.desc}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-actions">
          <Link href={toggleHref} className="lang">{ui.toggle}</Link>
          <Link href={freeHref} className="btn btn-sm">
            {ui.freeAnalysis}
          </Link>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {menu.map((item) =>
          item.children ? (
            <div className="mobile-group" key={item.label}>
              <span className="mobile-group-label">{item.label}</span>
              {item.children.map((child) => (
                <Link key={child.href} href={child.href} className="mobile-sub" onClick={() => setOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          )
        )}
        <Link href={toggleHref} onClick={() => setOpen(false)}>{ui.toggle}</Link>
        <Link href={freeHref} className="btn" onClick={() => setOpen(false)}>
          {ui.freeAnalysis}
        </Link>
      </div>
    </header>
  );
}
