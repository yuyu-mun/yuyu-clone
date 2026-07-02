import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import ReelWall from "@/components/ReelWall";
import { allTiles, reelBrands, reelCategories } from "@/lib/reels";

export const metadata: Metadata = {
  title: "短影音作品集｜嶼嶼創意 馬來西亞",
  description:
    "瀏覽嶼嶼創意的短影音作品集——橫跨醫療保健、美妝保養、汽機車、居家生活、寵物、財經與生活風格的真實客戶影片，證明策略先行的內容真的有成效。",
};

export default function PortfolioZhPage() {
  const tiles = allTiles(reelBrands);
  const totalViews = reelBrands.reduce((s, b) => s + (b.views || 0), 0);
  const totalViewsLabel = `${Math.round(totalViews / 1_000_000)}M+`;

  const metrics = [
    { value: totalViewsLabel, label: "觀看數" },
    { value: `${tiles.length}`, label: "支影片" },
    { value: `${reelBrands.length}`, label: "合作品牌" },
    { value: `${reelCategories.length}`, label: "個產業" },
  ];

  return (
    <>
      <section className="pf9-hero">
        <div className="container pf9-inner">
          <h1 className="pf9-title">
            <span className="pf9-w pf9-w--ul">
              為成效而生，
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
              <span className="pf9-w pf9-w--st">
                不為取悅。
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

          <dl className="pf9-metrics" aria-label="作品集數據">
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
            探索作品
            <span className="pf9-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div id="showcase" />
      <ReelWall locale="zh" />

      <CtaBand
        title="想讓你的作品也出現在這裡嗎？"
        sub="一起打造下一個成功案例。"
        cta="預約諮詢"
        href="/zh/contact"
        cta2="WhatsApp 聯絡"
      />
    </>
  );
}
