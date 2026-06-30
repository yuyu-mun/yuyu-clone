import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { ArrowIcon } from "@/components/Icons";
import PortfolioReelWall from "@/components/PortfolioReelWall";
import {
  getPortfolioCategoryPath,
  portfolioCategories,
  portfolioWorks,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Yuyu Creative — A Living Reel Wall",
  description: "A wall of short-form work by Yuyu Creative, organised by industry.",
};

export default function PortfolioPage() {
  const heroWorks = portfolioWorks.slice(0, 6);

  return (
    <>
      <section className="portfolio-hero">
        <div className="container portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <span className="portfolio-kicker">Portfolio</span>
            <h1>
              The reel <span>wall.</span>
            </h1>
            <p>Short-form work, by industry.</p>
            <div className="portfolio-actions">
              <Link href="#wall" className="portfolio-pill-link primary">
                Enter <ArrowIcon />
              </Link>
              <Link href="/freeanalysis" className="portfolio-pill-link">
                Talk to us <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="portfolio-collage" aria-label="Selected portfolio previews">
            {heroWorks.map((work, index) => (
              <Link
                href={getPortfolioCategoryPath(work.categorySlug)}
                className={`portfolio-collage-tile tile-${index + 1}`}
                key={work.slug}
              >
                <Image src={work.thumbnail} alt={work.title} width={360} height={640} priority={index < 2} />
                <span>{work.client}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="portfolio-ribbon" aria-hidden>
          <div>
            Reels · Work · Industry · Yuyu · Reels · Work · Industry · Yuyu · Reels · Work ·
            Industry · Yuyu ·
          </div>
        </div>
      </section>

      <div id="wall" />
      <PortfolioReelWall categories={portfolioCategories} />

      <CtaBand
        title="Want yours here?"
        sub="Let's build the next reel wall."
        cta="Book a call"
        cta2="Message us on WhatsApp"
      />
    </>
  );
}
