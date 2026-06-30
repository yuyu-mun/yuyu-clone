"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import PortfolioShare from "@/components/PortfolioShare";
import PortfolioWorkCard from "@/components/PortfolioWorkCard";
import {
  getPortfolioCategoryPath,
  getPortfolioWorksByCategory,
  type PortfolioCategory,
} from "@/lib/portfolio";

type PortfolioReelWallProps = {
  categories: PortfolioCategory[];
};

const ALL = "all";

export default function PortfolioReelWall({ categories }: PortfolioReelWallProps) {
  const [active, setActive] = useState<string>(ALL);

  // Deep links: /our-portfolio#reel-slug scrolls straight to that reel (in context,
  // so the visitor can keep browsing the rest of the wall).
  useEffect(() => {
    const scrollToHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug) return;
      // A beat for layout/hydration, then bring the reel into view.
      requestAnimationFrame(() => {
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const visible = active === ALL ? categories : categories.filter((c) => c.slug === active);

  return (
    <>
      <div className="portfolio-nav-dock">
        <div className="container">
          <nav className="portfolio-filter" aria-label="Filter reels by industry">
            <button
              type="button"
              className={`portfolio-filter-pill${active === ALL ? " is-active" : ""}`}
              onClick={() => setActive(ALL)}
            >
              <span>All</span>
              <strong>{categories.reduce((sum, c) => sum + getPortfolioWorksByCategory(c.slug).length, 0)}</strong>
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={`portfolio-filter-pill${active === category.slug ? " is-active" : ""}`}
                data-accent={categories.indexOf(category) % 5}
                onClick={() => setActive(category.slug)}
              >
                <span>{category.shortLabel}</span>
                <strong>{getPortfolioWorksByCategory(category.slug).length}</strong>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {visible.map((category) => {
        const accent = categories.indexOf(category) % 5;
        const works = getPortfolioWorksByCategory(category.slug);
        const path = getPortfolioCategoryPath(category.slug);

        return (
          <section className="portfolio-category-section" id={category.slug} key={category.slug} data-accent={accent}>
            <div className="container">
              <div className="portfolio-section-heading">
                <span className="portfolio-section-count">
                  {String(categories.indexOf(category) + 1).padStart(2, "0")}
                </span>
                <h2>{category.label}</h2>
                <div className="portfolio-section-actions">
                  <PortfolioShare href={path} label={category.label} />
                  <Link href={path} className="portfolio-text-link">
                    Open page <ArrowIcon />
                  </Link>
                </div>
              </div>

              <div className="portfolio-reel-grid">
                {works.map((work, index) => (
                  <PortfolioWorkCard
                    work={work}
                    index={index}
                    accent={accent}
                    shareHref={path}
                    key={work.slug}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
