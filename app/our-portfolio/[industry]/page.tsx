import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { ArrowIcon } from "@/components/Icons";
import PortfolioShare from "@/components/PortfolioShare";
import PortfolioWorkCard from "@/components/PortfolioWorkCard";
import {
  getPortfolioCategory,
  getPortfolioCategoryCount,
  getPortfolioCategoryPath,
  getPortfolioWorksByCategory,
  portfolioCategories,
} from "@/lib/portfolio";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({ industry: category.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { industry } = await params;
  const category = getPortfolioCategory(industry);

  if (!category) {
    return {
      title: "Portfolio | Yuyu Creative",
    };
  }

  return {
    title: `${category.label} Reels | Yuyu Creative`,
    description: `${category.label} short-form reel wall by Yuyu Creative.`,
  };
}

export default async function PortfolioIndustryPage({ params }: IndustryPageProps) {
  const { industry } = await params;
  const category = getPortfolioCategory(industry);

  if (!category) notFound();

  const accent = portfolioCategories.findIndex((c) => c.slug === category.slug) % 5;
  const works = getPortfolioWorksByCategory(category.slug);
  const path = getPortfolioCategoryPath(category.slug);

  return (
    <>
      <section className="portfolio-hero portfolio-hero-compact" data-accent={accent}>
        <div className="container portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <span className="portfolio-kicker">Portfolio</span>
            <h1>{category.label}</h1>
            <div className="portfolio-actions">
              <PortfolioShare href={path} label={category.label} />
              <Link className="portfolio-pill-link" href="/our-portfolio">
                All industries <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="portfolio-category-brief">
            <span>{String(works.length).padStart(2, "0")}</span>
            <strong>Reels</strong>
          </div>
        </div>
      </section>

      <div className="portfolio-nav-dock portfolio-nav-dock-compact">
        <div className="container">
          <nav className="portfolio-filter" aria-label="Portfolio industry categories">
            {portfolioCategories.map((item, itemIndex) => (
              <Link
                href={getPortfolioCategoryPath(item.slug)}
                className={`portfolio-filter-pill${item.slug === category.slug ? " is-active" : ""}`}
                data-accent={itemIndex % 5}
                key={item.slug}
              >
                <span>{item.shortLabel}</span>
                <strong>{getPortfolioCategoryCount(item.slug)}</strong>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <section className="portfolio-category-section is-focused" data-accent={accent}>
        <div className="container">
          <div className="portfolio-reel-grid portfolio-reel-grid-focused">
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

      <CtaBand
        title="Want yours here?"
        sub="Let's build it."
        cta="Book a call"
        cta2="WhatsApp us"
      />
    </>
  );
}
