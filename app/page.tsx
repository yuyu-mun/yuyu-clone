import Link from "next/link";
import BrandFilm from "@/components/BrandFilm";
import CtaBand from "@/components/CtaBand";
import CtaModal from "@/components/CtaModal";
import DomeGallery from "@/components/DomeGallery";
import { ArrowIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import RotatingText from "@/components/RotatingText";
import { testimonials } from "@/lib/site";

const heroImage = "/images/yuyu-team-2025.jpg";

// Real production stills for the draggable client gallery
const domeImages = [
  "case-2", "case-3", "case-4", "case-5", "case-6", "case-7", "case-8",
  "case-9", "case-10", "case-11", "case-12", "case-13", "case-14", "case-15",
].map((n) => `/images/${n}.jpg`);

// Brands and founders we have produced short-form content for
const partners = [
  { name: "犀牛盾 RhinoShield", img: "/images/partners/rhinoshield.png" },
  { name: "新東陽 Hsin Tung Yang", img: "/images/partners/hsintungyang.jpg", boxed: true },
  { name: "愛康 Aikang", img: "/images/partners/aikang.png" },
  { name: "得來素 Deli Vegetarian", img: "/images/partners/deli.png" },
  { name: "超級數字力 Super Numbers", img: "/images/partners/supernumbers.png" },
  { name: "汪喵星球 Dog&Cat Star", img: "/images/partners/wangmiao.png" },
  { name: "淨淨 Jing Jing", img: "/images/partners/jingjing.png" },
  { name: "布布童鞋 Bubu Kids", img: "/images/partners/bubu.png", boxed: true },
  { name: "抱抱身心診所 Baobao Clinic", img: "/images/partners/baobao-clinic.png" },
  { name: "鉅瑋 Juwei", img: "/images/partners/juwei.png" },
  { name: "怪獸部落 Li&MON", img: "/images/partners/p4.png", boxed: true },
  { name: "Eagle", img: "/images/partners/p5.png", boxed: true },
  { name: "K-WAX", img: "/images/partners/p6.png" },
  { name: "W.RICH", img: "/images/partners/p7.png" },
  { name: "KOZY", img: "/images/partners/p8.png", boxed: true },
  { name: "立月初 June 1st", img: "/images/partners/p9.png", boxed: true },
  { name: "snug 給足呵護", img: "/images/partners/p10.png", boxed: true },
  { name: "三輪嶼 Motor Island", img: "/images/partners/p11.png" },
  { name: "顧家醫療 GU+ Medical Group", img: "/images/partners/p12.png" },
  { name: "惠森復健科診所 Huisen Rehab", img: "/images/partners/p13.png" },
  { name: "Select 99", img: "/images/partners/p14.png" },
  { name: "樂檸漢堡 The Freen Burger", img: "/images/partners/p15.png" },
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
              We help founders, professionals, and brands across Malaysia turn expertise into
              short-form content that earns attention, builds authority, and brings the right people
              to you. Strategy first, trends never.
            </p>
            <div className="ref-actions">
              <Link href="/freeanalysis" className="ref-btn primary">Get free brand analysis</Link>
              <Link href="/our-portfolio" className="ref-btn secondary">See our work</Link>
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
              something audiences remember and return to. Yuyu Creative helps founders and professionals
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
              Browse real production stills from the founders, professionals, and brands Yuyu Creative
              has filmed — spanning hardware, healthcare, F&amp;B, retail, and education. Drag the gallery
              to explore the range of formats and faces we&apos;ve helped become names their audiences
              recognise, then open the full portfolio for the strategy and results behind each project.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <DomeGallery images={domeImages} />
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
            <p>
              From global names like RhinoShield and Hsin Tung Yang to clinics, restaurants, retail, and
              education brands, founders across very different industries choose Yuyu Creative for
              short-form video and personal branding — because a strategy-first approach travels,
              whatever you sell. These are some of the teams we&apos;ve helped become the name their
              customers remember.
            </p>
          </Reveal>

          <Reveal className="ref-partner-grid" delay={2}>
            {partners.map((p) => (
              <img
                className={`ref-partner-logo${p.boxed ? " boxed" : ""}`}
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
            <h2>What founders say.</h2>
            <p>
              Honest feedback from the founders and brands we partner with — once filming wraps and the
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
        sub="Start with a free analysis. We will map your positioning, proof assets, content angles, and first videos worth producing."
        cta="Get free brand analysis"
        href="/freeanalysis"
        cta2="Message us on WhatsApp"
      />

      <CtaModal />
    </>
  );
}
