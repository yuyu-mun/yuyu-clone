import Link from "next/link";
import BrandFilm from "@/components/BrandFilm";
import CtaBand from "@/components/CtaBand";
import DomeGallery from "@/components/DomeGallery";
import { ArrowIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import RotatingText from "@/components/RotatingText";
import { reelBrands } from "@/lib/reels";
import { testimonials } from "@/lib/site";

const heroImage = "/images/yuyu-team-2025.jpg";

// Every downloaded reel across all brands, INTERLEAVED round-robin by brand:
// one reel from each person, then the next from each, and so on. This keeps the
// same person's reels ~one-brand-count apart in the list, so when tiles are
// filled sequentially, neighbouring tiles always show different people.
const brandReels = reelBrands.map((brand) =>
  brand.reels
    .filter((reel) => reel.video)
    .map((reel) => ({ src: reel.video as string, poster: reel.cover, alt: `${brand.name} reel` }))
);
const maxReelsPerBrand = Math.max(0, ...brandReels.map((r) => r.length));
const domeReels: { src: string; poster: string; alt: string }[] = [];
for (let j = 0; j < maxReelsPerBrand; j++) {
  for (const reels of brandReels) {
    if (reels[j]) domeReels.push(reels[j]);
  }
}

// Brands and clients we have produced short-form content for.
// Logos are pre-normalised (trimmed + optically area-matched onto a uniform
// canvas) so every mark reads at the same visual size — see
// public/images/partners-normalized.
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

// Industry recognition for our short-form work
const achievements = [
  {
    award: "數位奇點獎 · DSA",
    title: "Won on reach alone.",
    rank: "Bronze · Best Social Media Video",
    desc: "Our 愛康 (Aikang) series took Bronze for Best Social Media Video at the Digital Singularity Award — over 3 million organic views with zero paid media. Proof that sharp creative, not ad budget, is what makes content travel.",
    img: "/images/award-dsa.webp",
    href: "https://www.businessweekly.com.tw/business/indep/1006260",
  },
  {
    award: "金刻獎 · GMA",
    title: "On Taiwan's biggest stage.",
    rank: "2nd Golden Moment Awards",
    desc: "Honoured at the 2nd Golden Moment Awards (金刻獎) — Taiwan's leading awards for short-video creators and the first ceremony staged entirely in vertical video. Recognition for work that holds its own against the best in the industry.",
    img: "/images/award-gma.webp",
    href: "https://gma-tw.com/winner/",
  },
];

function Stars() {
  return (
    <div className="ref-stars" aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.56 6.1 20.67l1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="ref-hero">
        <div className="ref-shell">
          <div className="ref-hero-copy">
            <h1>
              Short videos that turn viewers into{" "}
              <RotatingText words={["clients", "fans", "followers", "advocates"]} />
            </h1>
            <p>
              We help clients, professionals, and brands across Malaysia turn expertise into
              short-form content that earns attention, builds authority, and brings the right people
              to you. Strategy first, trends never.
            </p>
            <div className="ref-actions">
              <Link href="/short-video-services" className="ref-btn primary">Our services</Link>
              <Link href="/our-portfolio" className="ref-btn secondary">Our work</Link>
            </div>
          </div>

          <div className="ref-hero-media">
            <img src={heroImage} alt="The Yuyu Creative team at the 2025 annual dinner" />
          </div>
        </div>
      </section>

      <section className="ref-video-feature">
        <div className="ref-shell ref-video-grid">
          <Reveal className="ref-video-copy">
            <h2>Build a brand, not just ads.</h2>
            <p>
              People follow and trust people, not logos. A personal brand — or founder IP — puts a
              recognisable face, voice, and point of view on your business, so your expertise becomes
              something audiences remember and return to. Yuyu Creative helps clients and professionals
              across Malaysia build that IP with strategy-led short video: every clip compounds your
              authority, warms up your audience, and drives inbound leads. Instead of renting attention
              from the algorithm one paid campaign at a time, you own a brand that keeps working long
              after the post goes live.
            </p>
          </Reveal>
          <Reveal className="ref-video-stage" delay={2}>
            <BrandFilm />
          </Reveal>
        </div>
      </section>

      <section className="ref-section ref-dome">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact center">
            <h2>Work people remember.</h2>
            <p>
              Browse autoplaying reel clips from clients, professionals, and brands Yuyu Creative
              has filmed — spanning healthcare, beauty, automotive, home, pet, finance, and lifestyle.
              Drag the gallery to explore the range of formats and faces we&apos;ve helped become names
              their audiences recognise.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <DomeGallery media={domeReels} />
          </Reveal>

          <div className="ref-dome-cta">
            <Link href="/our-portfolio" className="ref-btn primary">
              See the full portfolio <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="ref-partners">
        <div className="ref-shell">
          <Reveal className="ref-section-head compact center">
            <h2>Brands that trust us.</h2>
            <p className="ref-partners-sub">
              A strategy-first approach travels, whatever you sell — these are some of the teams
              we&apos;ve helped become the name their customers remember.
            </p>
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
            <h2>Achievements.</h2>
            <p>
              Yuyu Creative&apos;s short-form work is built to earn both results and recognition. We took
              Bronze for Best Social Media Video at the Digital Singularity Award (數位奇點獎) with a
              campaign that reached over 3 million organic views, and were honoured at the 2nd Golden
              Moment Awards (金刻獎) — Taiwan&apos;s leading awards for short-video creators. Proof that
              strategy-first content gets noticed by audiences and judges alike.
            </p>
          </Reveal>

          <Reveal className="ref-award-grid" delay={2}>
            {achievements.map((a) => (
              <a
                className="ref-award-card"
                key={a.award}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ref-award-media">
                  <img src={a.img} alt={a.title} loading="lazy" />
                </div>
                <div className="ref-award-overlay">
                  <span className="ref-award-name">{a.award}</span>
                  <strong className="ref-award-title">{a.title}</strong>
                  <span className="ref-award-rank">{a.rank}</span>
                  <p>{a.desc}</p>
                  <span className="ref-award-link">
                    Read the story <ArrowIcon />
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
            <h2>What clients say.</h2>
            <p>
              Honest feedback from the clients and brands we partner with — once filming wraps and the
              numbers are in. High renewal rates, measurable results, and long-term partnerships are why
              clients keep coming back season after season.
            </p>
          </Reveal>
          <Reveal className="ref-review-grid" delay={2}>
            {testimonials.slice(0, 6).map((t) => (
              <article className="ref-review-card" key={t.name}>
                <Stars />
                <p>“{t.quote}”</p>
                <div className="ref-review-by">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    {t.meta && <span>{t.meta}</span>}
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to build a personal brand people can trust?"
        sub="Explore the service cycle and see how we turn strategy, filming, editing, and optimisation into consistent short-form content."
        cta="Our services"
        href="/short-video-services"
        cta2="WhatsApp us"
      />
    </>
  );
}
