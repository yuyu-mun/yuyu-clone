"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { nav, uiEn, whatsappUrl, type NavItem } from "@/lib/site";
import { navZh, uiZh } from "@/lib/site.zh";

function LanguageIcon() {
  return (
    <svg className="lang-icon-svg" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M5 8.5h11M10.5 4.8v3.7M8.1 8.7c.7 3.8 3.2 6.8 7.2 8.5M15.3 8.7c-1 4.4-4 7.4-9.5 8.8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8 22.2l4.4-12.4 4.5 12.4M17.4 17.8h5.8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<string | null>(null);
  const [solid, setSolid] = useState(pathname === "/our-portfolio" || pathname.endsWith("/about-yuyu") ? 1 : 0);
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const headerSolid = pathname === "/our-portfolio" ? 1 : solid;

  const menu = (isZh ? navZh : nav) as NavItem[];
  const homeHref = isZh ? "/zh" : "/";
  const toggleHref = isZh
    ? pathname.replace(/^\/zh/, "") || "/"
    : pathname.startsWith("/our-portfolio/")
    ? "/zh/our-portfolio"
    : pathname.startsWith("/marketing-insight/")
    ? "/zh/marketing-insight"
    : pathname === "/"
    ? "/zh"
    : `/zh${pathname}`;
  const languageLabel = isZh ? "Switch to English" : "Switch to Chinese";

  const normalizePath = (href: string) => (href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href);
  const isActiveHref = (href: string) => {
    const current = normalizePath(pathname);
    const target = normalizePath(href);
    if (target === "/" || target === "/zh") return current === target;
    return current === target || current.startsWith(`${target}/`);
  };
  const isActiveItem = (item: NavItem) => isActiveHref(item.href) || Boolean(item.children?.some((child) => isActiveHref(child.href)));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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
        hero.classList.contains("portfolio-hero") ||
        hero.classList.contains("rw-hero");
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
    <header className={`header${open ? " is-menu-open" : ""}`} style={{ "--header-solid": headerSolid } as CSSProperties}>
      <div className="container header-inner">
        <Link href={homeHref} className="logo" aria-label="Yuyu Creative home">
          <Image src="/images/logo-white-horizontal.png" alt="Yuyu Creative" width={230} height={52} priority />
        </Link>

        <nav className="nav">
          {menu.map((item) => {
            const itemActive = isActiveItem(item);
            return item.children ? (
              <div
                className={`nav-group${collapsed === item.label ? " is-collapsed" : ""}${itemActive ? " active" : ""}`}
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
                  {item.children.map((child) => {
                    const childActive = isActiveHref(child.href);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={childActive ? "active" : undefined}
                        aria-current={childActive ? "page" : undefined}
                        onClick={(e) => {
                          setCollapsed(item.label);
                          e.currentTarget.blur();
                        }}
                      >
                        <strong>{child.label}</strong>
                        {child.desc && <span>{child.desc}</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={itemActive ? "active" : undefined} aria-current={itemActive ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href={toggleHref} className="lang" aria-label={languageLabel} title={languageLabel}>
            <LanguageIcon />
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
        {menu.map((item) => {
          const itemActive = isActiveItem(item);
          return item.children ? (
            <div className="mobile-group" key={item.label}>
              <span className="mobile-group-label">{item.label}</span>
              {item.children.map((child) => {
                const childActive = isActiveHref(child.href);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`mobile-sub${childActive ? " active" : ""}`}
                    aria-current={childActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={itemActive ? "active" : undefined}
              aria-current={itemActive ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mobile-menu-cta">
          <Link
            href={isZh ? "/zh/freeanalysis" : "/freeanalysis"}
            className="btn mobile-cta-primary"
            onClick={() => setOpen(false)}
          >
            {(isZh ? uiZh : uiEn).freeAnalysis}
          </Link>
          <a
            href={whatsappUrl()}
            className="btn mobile-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
