import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import ReelWall from "@/components/ReelWall";
import { allTiles, reelBrands, reelCategories } from "@/lib/reels";

export const metadata: Metadata = {
  title: "Portfolio | Yuyu Creative — The Proof Gallery",
  description: "A blue-and-white portfolio gallery of short-form work by Yuyu Creative, by industry.",
};

export default function PortfolioPage() {
  const tiles = allTiles(reelBrands);
  const totalViews = reelBrands.reduce((s, b) => s + (b.views || 0), 0);
  const totalViewsLabel = `${Math.round(totalViews / 1_000_000)}M+`;

  const metrics = [
    { value: totalViewsLabel, label: "views" },
    { value: `${tiles.length}`, label: "reels" },
    { value: `${reelBrands.length}`, label: "brands" },
    { value: `${reelCategories.length}`, label: "industries" },
  ];

  return (
    <>
      <section className="pf9-hero">
        <div className="container pf9-inner">
          <h1 className="pf9-title">
            <span className="pf9-w pf9-w--ul">
              Built to perform,
              <svg
                className="pf9-swash"
                viewBox="0 0 320 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M6 16 C 92 6 214 6 314 12"
                  pathLength="1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="pf9-dim">
              not{" "}
              <span className="pf9-w pf9-w--st">
                to please.
                <svg
                  className="pf9-strike"
                  viewBox="0 0 360 24"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 13 C 118 8 244 18 352 11"
                    pathLength="1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <dl className="pf9-metrics" aria-label="Portfolio metrics">
            {metrics.map((m) => (
              <div className="pf9-metric" key={m.label}>
                <dt className="pf9-metric-num">
                  <CountUp value={m.value} duration={2000} />
                </dt>
                <dd className="pf9-metric-label">{m.label}</dd>
              </div>
            ))}
          </dl>

          <a className="pf9-cta" href="#showcase">
            Explore the work
            <span className="pf9-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div id="showcase" />
      <ReelWall />

      <CtaBand
        title="Want yours in the gallery?"
        sub="Let's build the next proof point."
        cta="Book a call"
        cta2="WhatsApp us"
      />
    </>
  );
}
