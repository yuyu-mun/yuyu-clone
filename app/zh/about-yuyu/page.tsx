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
  title: "關於嶼嶼創意｜策略主導的馬來西亞短影音行銷公司",
  description:
    "認識嶼嶼創意——一間以策略主導、由台灣團隊作後盾的馬來西亞短影音行銷公司，協助企業主、專業人士與品牌，把專業轉化為值得信任的內容。",
};

const teamMalaysia: TeamMember[] = [
  {
    name: "Danis Guok",
    role: "專案經理",
    img: "/images/team-danis.jpg",
  },
  {
    name: "Chee Yian",
    role: "行政助理",
    img: "/images/team-chee-yian.jpg",
  },
  {
    name: "Yi Ni",
    role: "影片剪輯師",
    img: "/images/team-yi-ni.jpg",
  },
  {
    name: "Ke Xin",
    role: "影片剪輯師",
    img: "/images/team-ke-xin.jpg",
  },
];

const teamTaiwan: TeamMember[] = [
  {
    name: "林弘毅 Damon",
    role: "CEO",
    img: "/images/team-damon.webp",
    credentials: [
      "嶼嶼創意與三輪嶼 Motor Island 創辦人暨執行長",
      "台灣機車產業 KOL，全網累積 447,000 位粉絲",
    ],
  },
  {
    name: "宓宏勳 Leo",
    role: "COO",
    img: "/images/team-leo.webp",
    credentials: [
      "前 Gogoro 台灣營運企劃分析資深經理",
      "前 Tesla 台灣資深專案經理",
    ],
  },
  {
    name: "范君達",
    role: "CCO",
    img: "/images/team-fan.webp",
    credentials: [
      "前台灣奧美策略副總監",
      "前台灣李奧貝納創意策略總監",
    ],
  },
];

// One merged history, told as a connected timeline (Taiwan 2022 → Malaysia 2025 → today).
const story = [
  {
    marker: "2022 · 台中",
    title: "從創作者的實戰心法出發",
    desc: "林弘毅 Damon——機車產業 KOL「Boss Damon」，全網累積 447,000 位粉絲——在台灣創立嶼嶼創意（YUYU Creative），把一路實戰累積的創作者心法，變成一間專為企業主與專家打造的內容工作室。",
  },
  {
    marker: "團隊",
    title: "策略先行，不追流行",
    desc: "他集結來自 Gogoro、Tesla、奧美與李奧貝納的資深營運與創意人才，堅持做能累積信任的知識型短影音，而不是追逐流量的跟風內容。",
  },
  {
    marker: "實績",
    title: "方法經得起驗證",
    desc: "這套方法一路累積出數十億次自然觸及觀看，以及業界領先的客戶續約率——證明讓內容發揮成效的，是精準的策略，而不是廣告預算。",
  },
  {
    marker: "2025 · 吉隆坡",
    title: "嶼嶼登陸馬來西亞",
    desc: "YUYU Creative Sdn. Bhd. 於吉隆坡成立，把台灣的系統在地化，為馬來西亞的企業主、專業人士與品牌，建立在地的內容週期。",
  },
  {
    marker: "現在",
    title: "一個團隊，兩個市場",
    desc: "台灣總部主導策略與創意方向，馬來西亞工作室在地執行製作——一套經過驗證的方法，就近為你服務。",
  },
];

const crewGroups = [
  {
    region: "馬來西亞工作室",
    desc: "在地客戶週期、拍攝統籌、製作、剪輯與交付。",
    members: teamMalaysia,
  },
  {
    region: "台灣總部",
    desc: "策略後盾、創意方向，以及支撐嶼嶼運轉的方法系統。",
    members: teamTaiwan,
  },
];

const process = [
  {
    step: "01",
    title: "診斷",
    desc: "我們從你的產品服務、受眾、常見疑慮與信任證明開始。",
  },
  {
    step: "02",
    title: "定形",
    desc: "我們把原始的專業知識，轉化為切角、腳本與拍攝計畫。",
  },
  {
    step: "03",
    title: "製作",
    desc: "我們引導拍攝、以清晰為原則剪輯，並備妥可直接上架各平台的素材。",
  },
  {
    step: "04",
    title: "覆盤",
    desc: "每個週期都會留下數據訊號，讓下一批內容更精準。",
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
            <Image className="about-avatar about-avatar-one" src="/images/about-avatar-1.webp" alt="" width={280} height={280} priority />
            <Image className="about-avatar about-avatar-two" src="/images/about-avatar-2.webp" alt="" width={250} height={250} priority />
            <Image className="about-avatar about-avatar-three" src="/images/about-avatar-3.webp" alt="" width={235} height={235} />
            <Image className="about-avatar about-avatar-four" src="/images/about-avatar-4.webp" alt="" width={220} height={220} />
            <Image className="about-avatar about-avatar-five" src="/images/about-avatar-5.webp" alt="" width={220} height={220} />
            <Image className="about-avatar about-avatar-six" src="/images/about-avatar-6.webp" alt="" width={210} height={210} />
            <Image className="about-avatar about-avatar-seven" src="/images/about-avatar-7.webp" alt="" width={205} height={205} />
            <Image className="about-avatar about-avatar-eight" src="/images/about-avatar-8.webp" alt="" width={220} height={220} />
          </div>
          <div className="ref-shell about-studio-stage">
            <Reveal className="about-studio-copy">
              <h1>
                <span>內容引擎</span>
                <span>背後的</span>
                <span>那群人。</span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="about-metrics-section" aria-label="嶼嶼成效數據">
          <div className="ref-shell">
            <Reveal className="about-metrics-copy">
              <h2>一間扎根吉隆坡、由台灣作後盾的短影音行銷公司。</h2>
              <p>內容以策略打磨、以清晰為本，為你的事業成長而生。</p>
            </Reveal>
            <Reveal className="about-hero-metrics">
              <div>
                <strong>
                  <span className="about-count-number" data-count="96" data-suffix="%">96%</span>
                </strong>
                <span>客戶續約率</span>
              </div>
              <div>
                <strong>
                  <span className="about-count-number" data-count="500" data-suffix="+">500+</span>
                </strong>
                <span>支影片突破 10 萬觀看</span>
              </div>
              <div>
                <strong>
                  <span className="about-count-number" data-count="100" data-suffix="+">100+</span>
                </strong>
                <span>位合作客戶</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about-story">
          <div className="ref-shell about-story-grid">
            <Reveal className="about-section-intro">
              <span className="about-kicker">品牌故事</span>
              <h2>從台灣創作者的實戰方法，到馬來西亞的在地工作室。</h2>
              <p>一套方法，兩個據點——在台灣打磨成形，帶到馬來西亞客戶身邊。</p>
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
              <span className="about-kicker">團隊成員</span>
              <h2>規模小，所以每件作品都親手把關；制度完整，所以每個週期都穩定運轉。</h2>
            </Reveal>
            {crewGroups.map((group, gi) => (
              <Reveal className={`about-crew-group${group.region === "台灣總部" ? " about-crew-group-hq" : ""}`} delay={1} key={group.region}>
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
              <span className="about-kicker">嶼嶼身邊的人</span>
              <h2>與嶼嶼方法一起成長的客戶與品牌。</h2>
            </Reveal>
          </div>
          <div className="about-image-river" aria-label="客戶與創作者影像牆">
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
              <span className="about-kicker">合作方式</span>
              <h2>從定位到優化，每一步都是為了讓你的專業更容易被信任。</h2>
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
        title="在規劃你的第一個內容週期之前，先認識我們的團隊。"
        sub="看看嶼嶼方法如何把定位、製作與剪輯，變成一套可持續運轉的短影音系統。"
        cta="服務項目"
        href="/zh/short-video-services"
        cta2="WhatsApp 聯繫我們"
      />
    </>
  );
}
