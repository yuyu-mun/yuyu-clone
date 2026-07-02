import type { Metadata } from "next";
import Link from "next/link";
import BrandFilm from "@/components/BrandFilm";
import CtaBand from "@/components/CtaBand";
import DomeGallery from "@/components/DomeGallery";
import { ArrowIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import RotatingText from "@/components/RotatingText";
import { reelBrands } from "@/lib/reels";
import { homeZh, testimonialsZh } from "@/lib/site.zh";

export const metadata: Metadata = {
  title: homeZh.metaTitle,
  description: homeZh.metaDescription,
};

const heroImage = "/images/yuyu-team-2025.jpg";

// Same round-robin interleave as the English homepage: one reel from each
// brand in turn, so neighbouring dome tiles always show different people.
const brandReels = reelBrands.map((brand) =>
  brand.reels
    .filter((reel) => reel.video)
    .map((reel) => ({ src: reel.video as string, poster: reel.cover, alt: `${brand.name} 影片` }))
);
const maxReelsPerBrand = Math.max(0, ...brandReels.map((r) => r.length));
const domeReels: { src: string; poster: string; alt: string }[] = [];
for (let j = 0; j < maxReelsPerBrand; j++) {
  for (const reels of brandReels) {
    if (reels[j]) domeReels.push(reels[j]);
  }
}

// Brands and clients we have produced short-form content for (shared with EN).
const partners = [
  { name: "犀牛盾 RhinoShield", img: "/images/partners-normalized/rhinoshield.png" },
  { name: "新東陽 Hsin Tung Yang", img: "/images/partners-normalized/hsintungyang.png" },
  { name: "愛康 Aikang", img: "/images/partners-normalized/aikang.png" },
  { name: "得來素 Deli Vegetarian", img: "/images/partners-normalized/deli.png" },
  { name: "超級數字力 Super Numbers", img: "/images/partners-normalized/supernumbers.png" },
  { name: "汪喵星球 Dog&Cat Star", img: "/images/partners-normalized/wangmiao.png" },
  { name: "淨淨 Jing Jing", img: "/images/partners-normalized/jingjing.png" },
  { name: "布布童鞋 Bubu Kids", img: "/images/partners-normalized/bubu.png" },
  { name: "抱抱身心診所 Baobao Clinic", img: "/images/partners-normalized/baobao-clinic.png" },
  { name: "鉅瑋 Juwei", img: "/images/partners-normalized/juwei.png" },
  { name: "怪獸部落 Li&MON", img: "/images/partners-normalized/p4.png" },
  { name: "Eagle", img: "/images/partners-normalized/p5.png" },
  { name: "K-WAX", img: "/images/partners-normalized/p6.png" },
  { name: "W.RICH", img: "/images/partners-normalized/p7.png" },
  { name: "KOZY", img: "/images/partners-normalized/p8.png" },
  { name: "立月初 June 1st", img: "/images/partners-normalized/p9.png" },
  { name: "snug 給足呵護", img: "/images/partners-normalized/p10.png" },
  { name: "三輪嶼 Motor Island", img: "/images/partners-normalized/p11.png" },
  { name: "顧家醫療 GU+ Medical Group", img: "/images/partners-normalized/p12.png" },
  { name: "惠森復健科診所 Huisen Rehab", img: "/images/partners-normalized/p13.png" },
  { name: "Select 99", img: "/images/partners-normalized/p14.png" },
  { name: "樂檸漢堡 The Freen Burger", img: "/images/partners-normalized/p15.png" },
];

// Award imagery + press links (copy lives in homeZh.awards.items).
const achievementMedia = [
  { img: "/images/award-dsa.webp", href: "https://www.businessweekly.com.tw/business/indep/1006260" },
  { img: "/images/award-gma.webp", href: "https://gma-tw.com/winner/" },
];

function Stars() {
  return (
    <div className="ref-stars" aria-label="5 顆星（滿分 5 顆）">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.56 6.1 20.67l1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeZhPage() {
  const t = homeZh;
  return (
    <>
      <section className="ref-hero">
        <div className="ref-shell">
          <div className="ref-hero-copy">
            <h1>
              {t.hero.title}
              <RotatingText words={t.hero.words} />
            </h1>
            <p>{t.hero.body}</p>
            <div className="ref-actions">
              <Link href="/zh/short-video-services" className="ref-btn primary">{t.hero.ctaPrimary}</Link>
              <Link href="/zh/our-portfolio" className="ref-btn secondary">{t.hero.ctaSecondary}</Link>
            </div>
          </div>

          <div className="ref-hero-media">
            <img src={heroImage} alt="嶼嶼創意團隊於 2025 年度晚宴合影" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="ref-video-feature">
        <div className="ref-shell ref-video-grid">
          <Reveal className="ref-video-copy">
            <h2>{t.videoFeature.heading}</h2>
            <p>{t.videoFeature.body}</p>
          </Reveal>
          <Reveal className="ref-video-stage" delay={2}>
            <BrandFilm />
          </Reveal>
        </div>
      </section>

      <section className="ref-section ref-dome">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact center">
            <h2>{t.dome.heading}</h2>
            <p>{t.dome.body}</p>
          </Reveal>

          <Reveal delay={2}>
            <DomeGallery media={domeReels} />
          </Reveal>

          <div className="ref-dome-cta">
            <Link href="/zh/our-portfolio" className="ref-btn primary">
              {t.dome.cta} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="ref-partners">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact center">
            <h2>{t.partners.heading}</h2>
            <p className="ref-partners-sub">{t.partners.sub}</p>
          </Reveal>

          <Reveal className="ref-partner-grid" delay={2}>
            {partners.map((p) => (
              <img
                className="ref-partner-logo"
                src={p.img}
                alt={p.name}
                key={p.name}
                loading="lazy"
              />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ref-awards">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact center">
            <h2>{t.awards.heading}</h2>
            <p>{t.awards.intro}</p>
          </Reveal>

          <Reveal className="ref-award-grid" delay={2}>
            {t.awards.items.map((a, i) => (
              <a
                className="ref-award-card"
                key={a.award}
                href={achievementMedia[i].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ref-award-media">
                  <img src={achievementMedia[i].img} alt={a.title} loading="lazy" />
                </div>
                <div className="ref-award-overlay">
                  <span className="ref-award-name">{a.award}</span>
                  <strong className="ref-award-title">{a.title}</strong>
                  <span className="ref-award-rank">{a.rank}</span>
                  <p>{a.desc}</p>
                  <span className="ref-award-link">
                    {t.awards.readStory} <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ref-section">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact">
            <h2>{t.reviews.heading}</h2>
            <p>{t.reviews.body}</p>
          </Reveal>
          <Reveal className="ref-review-grid" delay={2}>
            {testimonialsZh.slice(0, 6).map((r) => (
              <article className="ref-review-card" key={r.name}>
                <Stars />
                <p>「{r.quote}」</p>
                <div className="ref-review-by">
                  <img src={r.img} alt={r.name} loading="lazy" decoding="async" />
                  <div>
                    <strong>{r.name}</strong>
                    {r.meta && <span>{r.meta}</span>}
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={t.cta.title}
        sub={t.cta.sub}
        cta={t.cta.cta}
        href="/zh/short-video-services"
        cta2={t.cta.cta2}
      />
    </>
  );
}
