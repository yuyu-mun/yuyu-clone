import type { Metadata } from "next";
import Image from "next/image";
import AboutFx from "@/components/AboutFx";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  credentials?: string[];
};

export const metadata: Metadata = {
  title: "About YuYu | Strategy-Led Short Video Team",
  description:
    "Meet Yuyu Creative Malaysia, a strategy-led short video team helping clients and brands turn expertise into trusted content.",
};

const teamMalaysia: TeamMember[] = [
  {
    name: "Danis Guok",
    role: "Project Manager",
    img: "/images/team-danis.jpg",
  },
  {
    name: "Chee Yian",
    role: "Executive Assistant",
    img: "/images/team-chee-yian.jpg",
  },
  {
    name: "Yi Ni",
    role: "Video Editor",
    img: "/images/team-yi-ni.jpg",
  },
  {
    name: "Ke Xin",
    role: "Video Editor",
    img: "/images/team-ke-xin.jpg",
  },
];

const teamTaiwan: TeamMember[] = [
  {
    name: "Damon Lin",
    role: "CEO",
    img: "/images/team-damon.webp",
    credentials: [
      "Founder and CEO, Yuyu Creative & Motor Island Taiwan",
      "Motorcycle industry KOL in Taiwan with a combined digital following of 447,000",
    ],
  },
  {
    name: "Leo",
    role: "COO",
    img: "/images/team-leo.webp",
    credentials: [
      "Former Senior Manager, Business Planning and Analysis, Gogoro Taiwan",
      "Former Senior Project Manager, Tesla Taiwan",
    ],
  },
  {
    name: "范君達",
    role: "CCO",
    img: "/images/team-fan.webp",
    credentials: [
      "Former Strategy Associate Director, Ogilvy Taiwan",
      "Former Creative Strategy Director, Leo Burnett Taiwan",
    ],
  },
];

// One merged history, told as a connected timeline (Taiwan 2022 → Malaysia 2025 → today).
const story = [
  {
    marker: "2022 · Taichung",
    title: "Born from a creator's playbook",
    desc: "Damon Lin — “Boss Damon”, a motorcycle-industry KOL with a 447K following — founded 嶼嶼創意 (YUYU Creative) in Taiwan, turning hard-won creator know-how into a studio built for clients and experts.",
  },
  {
    marker: "The team",
    title: "Strategy-first, not trend-chasing",
    desc: "He assembled senior operators and creatives — alumni of Gogoro, Tesla, Ogilvy, and Leo Burnett — and committed to knowledge-led short video that earns trust instead of chasing views.",
  },
  {
    marker: "Proof",
    title: "The method travels",
    desc: "That approach compounded into billions of organic views and an industry-leading client renewal rate — evidence that sharp strategy, not ad budget, is what makes content perform.",
  },
  {
    marker: "2025 · Kuala Lumpur",
    title: "YUYU comes to Malaysia",
    desc: "YUYU Creative Sdn. Bhd. opens in KL, adapting the Taiwan system into a local content cycle for Malaysian clients, professionals, and brands.",
  },
  {
    marker: "Today",
    title: "One team, two markets",
    desc: "Taiwan HQ drives strategy and creative direction while the Malaysia studio runs production locally — a proven method, delivered close to home.",
  },
];

const crewGroups = [
  {
    region: "Malaysia Studio",
    desc: "Local client cycle, shoot coordination, production, editing, and delivery.",
    members: teamMalaysia,
  },
  {
    region: "Taiwan HQ",
    desc: "Strategic backing, creative direction, and the operating method behind YUYU.",
    members: teamTaiwan,
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose",
    desc: "We start with your offer, audience, objections, and proof.",
  },
  {
    step: "02",
    title: "Shape",
    desc: "We turn raw expertise into angles, scripts, and a filming plan.",
  },
  {
    step: "03",
    title: "Produce",
    desc: "We guide the shoot, edit for clarity, and prepare platform-ready assets.",
  },
  {
    step: "04",
    title: "Review",
    desc: "Each cycle gives signals that make the next batch sharper.",
  },
];

const peopleCases = [
  {
    name: "木星人",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E6%9C%A8%E6%98%9F%E4%BA%BA.jpg",
  },
  {
    name: "禿頭型男 - 肯哥",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E7%A6%BF%E9%A0%AD%E5%9E%8B%E7%94%B7-%E8%82%AF%E5%93%A5.jpg",
  },
  {
    name: "直男先生TIMO",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E7%9B%B4%E7%94%B7%E5%85%88%E7%94%9FTIMO.jpg",
  },
  {
    name: "笙闆",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E7%AC%99%E9%97%86.jpg",
  },
  {
    name: "過期空姐KIKO",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E9%81%8E%E6%9C%9F%E7%A9%BA%E5%A7%90KIKO.jpg",
  },
  {
    name: "樂檸闆娘-YILI",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E6%A8%82%E6%AA%B8%E9%97%86%E5%A8%98-YILI.jpg",
  },
  {
    name: "Kevin大大",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/Kevin%E5%A4%A7%E5%A4%A7.jpg",
  },
  {
    name: "MEI錢也要買",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/MEI%E9%8C%A2%E4%B9%9F%E8%A6%81%E8%B2%B7.jpg",
  },
  {
    name: "sNug襪子叔叔 - 阿誠",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/sNug%E8%A5%AA%E5%AD%90%E5%8F%94%E5%8F%94-%E9%98%BF%E8%AA%A0.jpg",
  },
  {
    name: "小趙閒聊",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E5%B0%8F%E8%B6%99%E9%96%92%E8%81%8A.jpg",
  },
  {
    name: "水果開麥啦!",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E6%B0%B4%E6%9E%9C%E9%96%8B%E9%BA%A5%E5%95%A6.jpg",
  },
  {
    name: "問問梁醫師",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E5%95%8F%E5%95%8F%E6%A2%81%E9%86%AB%E5%B8%AB.jpg",
  },
  {
    name: "雪倫的隱藏版生活",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E9%9B%AA%E5%80%AB%E7%9A%84%E9%9A%B1%E8%97%8F%E7%89%88%E7%94%9F%E6%B4%BB.jpg",
  },
  {
    name: "豐原大小姐 - 珮瑜",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E8%B1%90%E5%8E%9F%E5%A4%A7%E5%B0%8F%E5%A7%90-%E7%8F%AE%E7%91%9C.jpg",
  },
  {
    name: "汪喵的光頭老闆",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/channels4_profile.jpg",
  },
  {
    name: "鳥科學先生科顧芳瑜",
    img: "https://yuyu-creative.tw/wp-content/uploads/2025/01/%E9%B3%A5%E7%A7%91%E5%AD%B8%E5%85%88%E7%94%9F%E7%A7%91%E9%A1%A7%E8%8A%B3%E7%91%9C.jpg",
  },
  {
    name: "華友聯",
    img: "https://yuyu-creative.tw/wp-content/uploads/2026/01/%E8%8F%AF%E5%8F%8B%E8%81%AF.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutFx />
      <div className="about-redesign">
        <section className="about-studio-hero">
          <div className="about-avatar-cloud" aria-hidden="true">
            <Image className="about-avatar about-avatar-one" src="/images/about-avatar-1.png" alt="" width={280} height={280} priority />
            <Image className="about-avatar about-avatar-two" src="/images/about-avatar-2.png" alt="" width={250} height={250} priority />
            <Image className="about-avatar about-avatar-three" src="/images/about-avatar-3.png" alt="" width={235} height={235} />
            <Image className="about-avatar about-avatar-four" src="/images/about-avatar-4.png" alt="" width={220} height={220} />
            <Image className="about-avatar about-avatar-five" src="/images/about-avatar-5.png" alt="" width={220} height={220} />
            <Image className="about-avatar about-avatar-six" src="/images/about-avatar-6.png" alt="" width={210} height={210} />
            <Image className="about-avatar about-avatar-seven" src="/images/about-avatar-7.png" alt="" width={205} height={205} />
            <Image className="about-avatar about-avatar-eight" src="/images/about-avatar-8.png" alt="" width={220} height={220} />
          </div>
          <div className="ref-shell about-studio-stage">
            <Reveal className="about-studio-copy">
              <h1>
                <span>People</span>
                <span>behind</span>
                <span>the engine.</span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="about-metrics-section" aria-label="YUYU performance metrics">
          <div className="ref-shell">
            <Reveal className="about-metrics-copy">
              <h2>A Short Video Agency Rooted in KL, Backed by Taiwan.</h2>
              <p>Content shaped by strategy, grounded in clarity, and built to grow your business.</p>
            </Reveal>
            <Reveal className="about-hero-metrics">
              <div>
                <strong>
                  <span className="about-count-number" data-count="96" data-suffix="%">96%</span>
                </strong>
                <span>Client Renewal Rate</span>
              </div>
              <div>
                <strong>
                  <span className="about-count-number" data-count="500" data-suffix="+">500+</span>
                </strong>
                <span>Videos More Than 100K Views</span>
              </div>
              <div>
                <strong>
                  <span className="about-count-number" data-count="100" data-suffix="+">100+</span>
                </strong>
                <span>Clients Served</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about-story">
          <div className="ref-shell about-story-grid">
            <Reveal className="about-section-intro">
              <span className="about-kicker">Our story</span>
              <h2>From Taiwan&apos;s creator-led method to Malaysia&apos;s local studio.</h2>
              <p>One method, two homes — built in Taiwan, brought close to Malaysian clients.</p>
            </Reveal>
            <Reveal className="about-timeline" delay={1}>
              <span className="about-timeline-line" aria-hidden />
              {story.map((item) => (
                <div className="about-tl-item" key={item.marker}>
                  <span className="about-tl-dot" aria-hidden />
                  <span className="about-tl-marker">{item.marker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="about-crew">
          <div className="ref-shell">
            <Reveal className="about-section-intro wide">
              <span className="about-kicker">The team</span>
              <h2>Small enough to know the work. Structured enough to run the cycle.</h2>
            </Reveal>
            {crewGroups.map((group, gi) => (
              <Reveal className={`about-crew-group${group.region === "Taiwan HQ" ? " about-crew-group-hq" : ""}`} delay={1} key={group.region}>
                <div className="about-crew-head">
                  <div>
                    <span className="about-crew-region">{group.region}</span>
                    <p>{group.desc}</p>
                  </div>
                </div>
                <div className="about-crew-grid">
                  {group.members.map((member) => (
                    <article className="about-mate" key={member.name}>
                      <div className="about-mate-photo">
                        <Image src={member.img} alt={member.name} width={420} height={520} />
                      </div>
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                      {member.credentials && (
                        <ul className="about-mate-credentials">
                          {member.credentials.map((credential) => (
                            <li key={credential}>{credential}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
                {gi < crewGroups.length - 1 && <span className="about-crew-rule" aria-hidden />}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about-people-wall">
          <div className="ref-shell about-people-head">
            <Reveal className="about-section-intro wide">
              <span className="about-kicker">People around YUYU</span>
              <h2>Clients and brands shaped by the YUYU method.</h2>
            </Reveal>
          </div>
          <div className="about-image-river" aria-label="Client and creator image gallery">
            <div className="about-image-track">
              {[...peopleCases, ...peopleCases].map((item, index) => (
                <div className="about-river-tile" key={`${item.name}-${index}`}>
                  <Image src={item.img} alt={item.name} width={320} height={440} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-process">
          <div className="ref-shell about-process-grid">
            <Reveal className="about-section-intro">
              <span className="about-kicker">How we work</span>
              <h2>From positioning to optimisation, every step is designed to make expertise easier to trust.</h2>
            </Reveal>
            <div className="about-process-list">
              <span className="about-process-rail" aria-hidden>
                <span className="about-process-fill" />
              </span>
              {process.map((item, index) => (
                <Reveal className="about-process-step" delay={((index % 3) + 1) as 1 | 2 | 3} key={item.title}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CtaBand
        title="Meet the team before we plan your first content cycle."
        sub="See how the YUYU method turns positioning, production, and editing into a repeatable short-video system."
        cta="Our services"
        href="/short-video-services"
        cta2="Message us on WhatsApp"
      />
    </>
  );
}
