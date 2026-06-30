import InstagramReelEmbed from "@/components/InstagramReelEmbed";
import PortfolioShare from "@/components/PortfolioShare";
import Reveal from "@/components/Reveal";
import type { PortfolioWork } from "@/lib/portfolio";

type PortfolioWorkCardProps = {
  work: PortfolioWork;
  index: number;
  /** Category index — drives the blue/white poster hue (color-codes industries). */
  accent?: number;
  /** Hierarchical category path, e.g. /our-portfolio/pet-food, for per-reel deep links. */
  shareHref?: string;
};

export default function PortfolioWorkCard({ work, index, accent = 0, shareHref }: PortfolioWorkCardProps) {
  return (
    <Reveal delay={(((index % 4) + 1) as 1 | 2 | 3 | 4)} className="portfolio-work-reveal">
      <article id={work.slug} className={`portfolio-work-card${work.sample ? " is-sample" : ""}`}>
        <InstagramReelEmbed
          reelUrl={work.reelUrl}
          title={work.title}
          client={work.client}
          accent={accent}
        />
        <div className="reel-tag">
          <span>{work.client}</span>
          {shareHref && (
            <PortfolioShare href={`${shareHref}#${work.slug}`} label={work.title} compact />
          )}
        </div>
      </article>
    </Reveal>
  );
}
