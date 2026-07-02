// Traditional Chinese (Taiwan, zh-Hant-TW) content mirror of lib/site.ts.
// Hand-written Taiwan marketing copy — semantically faithful to the English
// source, not a mechanical character conversion. Every export here mirrors an
// English counterpart (or a hardcoded page string) so /zh pages can render
// fully localized content.

import { whatsappUrl, type NavItem } from "./site";

export const navZh: NavItem[] = [
  { label: "首頁", href: "/zh" },
  { label: "關於嶼嶼", href: "/zh/about-yuyu" },
  {
    label: "服務項目",
    href: "/zh/short-video-services",
    children: [
      {
        label: "短影音服務",
        href: "/zh/short-video-services",
        desc: "策略、拍攝、剪輯到發布，一個週期全包。",
      },
      {
        label: "影像製作",
        href: "/zh/video-production",
        desc: "攝影棚與實地短影音拍攝，為每個平台量身打造。",
      },
      {
        label: "IP 打造",
        href: "/zh/ip-building",
        desc: "把企業主打造成讓人記得住的個人品牌。",
      },
      {
        label: "廣告投放",
        href: "/zh/ads-boosting",
        desc: "用高成效的付費投放，放大你最強的影片。",
      },
    ],
  },
  { label: "作品集", href: "/zh/our-portfolio" },
  { label: "價格方案", href: "/zh/pricing-plan" },
  { label: "部落格", href: "/zh/marketing-insight" },
  { label: "聯絡我們", href: "/zh/contact" },
];

export const uiZh = {
  freeAnalysis: "免費品牌診斷",
  contactUs: "聯絡我們",
  getInTouch: "聯絡我們",
  toggle: "EN",
  quickLinks: "快速連結",
  contacts: "聯絡方式",
  readMore: "閱讀更多",
};

export const heroZh = {
  eyebrow: "嶼嶼創意 · 馬來西亞",
  title: "企業主與專業人士的策略型短影音夥伴",
  body: "我們協助企業主、專業人士與品牌，透過短影音建立信任、展現專業，並吸引對的客戶。我們做的不只是好看的影片，而是真正對生意有幫助的內容。",
  cta: "聯絡我們",
};

export const statsZh = [
  { value: "80億+", label: "全平台總觀看數" },
  { value: "4億+", label: "單月最高總觀看數" },
  { value: "500+", label: "支影片突破 10 萬觀看" },
  { value: "100+", label: "服務客戶數" },
];

export const aboutStatsZh = [
  { value: "96%", label: "客戶續約率" },
  { value: "500+", label: "支影片突破 10 萬觀看" },
  { value: "100+", label: "服務客戶數" },
];

export const clientsLabelZh = "深受企業主與專業人士信賴";

export const testimonialsZh = [
  { name: "RhinoShield Taiwan", meta: "犀牛盾", img: "/images/client-rhinoshield.png", quote: "從第一次討論到拍攝完成，嶼嶼團隊都展現出高度的專業與耐心，讓整個合作過程安心又順利！" },
  { name: "Sharon Peng", meta: "雪倫的隱藏版生活 · 297K", img: "/images/avatar-sharon.jpg", quote: "嶼嶼非常專業與貼心，幫企業主呈現最吸引觀眾的一面。" },
  { name: "CleanClean Taiwan", meta: "淨淨台灣 笙闆 · 155K", img: "/images/avatar-shengban.jpg", quote: "最用心、專業的嶼嶼，是最好的戰友、軍師、將軍。" },
  { name: "DogCatStar", meta: "汪喵的光頭老闆 孫宗德 · 146K", img: "/images/avatar-channels.jpg", quote: "嶼嶼夥伴有專業有靈魂，搭配起來跟自己請的一樣順。" },
  { name: "Lin Pei-Yao", meta: "林佩瑤", img: "/images/avatar-linpeiyao.jpg", quote: "剪輯幽默、節奏很棒、很會抓重點。" },
  { name: "ICON", meta: "愛康", img: "/images/avatar-icon.jpeg", quote: "協助品牌發展多元短影音主題，整體配合度高。" },
  { name: "MJ Lin", meta: "MJ老師", img: "/images/avatar-mj.jpg", quote: "嶼嶼創意把大家用得到的情境，變成有梗又有含金量的短影音。" },
  { name: "Dr. Gu", meta: "鳥科學先生 顧芳瑜醫師", img: "/images/avatar-drgu.jpg", quote: "嶼嶼賦「嶼」品牌無限創意、加速傳播擴散的動能。" },
  { name: "Musingxer", meta: "木星人", img: "/images/avatar-musingxer.jpg", quote: "剪輯非常有節奏！不死板，有靈魂！" },
  { name: "Mei Kao", meta: "Mei錢也要買", img: "/images/avatar-mei.jpg", quote: "他們不是幫你拍影片，是幫你把「看不到的價值」變成會成交的短影音！" },
  { name: "inmywordz", meta: "作者冒牌生", img: "/images/avatar-inmywordz.jpg", quote: "影片剪輯的質感很好，溝通順暢，也會針對每次的剪輯做一個總結建議。" },
  { name: "LitoMon", meta: "怪獸部落", img: "/images/avatar-litomon.png", quote: "跟嶼嶼合作後，能夠實作掌握拍攝互動的要點。" },
];

export const servicesZh = [
  {
    title: "攝影棚短影音製作",
    price: "RM 5,000",
    unit: "/ 10 支影片",
    feature: false,
    desc: "於專業攝影棚拍攝，畫面更專業、穩重、有質感。",
    img: "/images/case-7.jpg",
    features: ["10 支完整短影音", "人設與內容定位策略", "腳本撰寫", "專業攝影棚、燈光與收音", "上架發布至 5 大平台", "每週期成效報告"],
  },
  {
    title: "實地短影音製作",
    price: "RM 12,000",
    unit: "/ 8 支影片",
    feature: true,
    desc: "到你的場域實地拍攝，捕捉真實環境與互動。",
    img: "/images/case-8.jpg",
    features: ["8 支實地拍攝短影音", "包含攝影棚方案全部內容，再加上：", "到你的場域實地拍攝", "真實環境與互動氛圍", "成效掛鉤的流量機制", "鏡頭前指導與引導"],
  },
];

export const platformsZh = ["TikTok", "Instagram", "YouTube", "Facebook", "小紅書 RED"];
export const btsZh = ["/images/case-7.jpg", "/images/case-8.jpg", "/images/case-9.jpg", "/images/case-10.jpg", "/images/case-11.jpg", "/images/case-12.jpg"];

export const promiseZh = {
  eyebrow: "為什麼是短影音",
  heading: "你是專家。但沒被看見的專業，無法建立信任。",
  body: "你未來的客戶此刻正在滑手機——在幾秒之內決定要相信誰。我們把你的專業轉化為短影音：贏得注意、證明權威，把對的人帶到你面前。策略先行，絕不盲目跟風。",
};

export const processZh = [
  {
    step: "01",
    shortTitle: "定位",
    brief: "受眾、切角與方向",
    title: "確立人設與頻道方向",
    desc: "我們深入研究你的品牌、受眾與目標，確立清晰的鏡頭形象與頻道方向，把對的人吸引進來。",
    img: "/images/process-01-discovery.webp",
  },
  {
    step: "02",
    shortTitle: "策略",
    brief: "內容支柱與腳本",
    title: "規劃策略與腳本",
    desc: "把方向落實為圍繞你的生意打造的內容支柱與腳本——好看、易分享，絕不是罐頭模板。",
    img: "/images/process-03-planning.webp",
  },
  {
    step: "03",
    shortTitle: "拍攝",
    brief: "鏡頭前全程指導",
    title: "拍攝與鏡頭前指導",
    desc: "我們在現場引導你自然表達、不僵硬——畫面精緻，卻依然原汁原味地像你自己。",
    img: "/images/process-04-filming.webp",
  },
  {
    step: "04",
    shortTitle: "剪輯",
    brief: "為完播率而剪",
    title: "為完播率剪輯",
    desc: "我們為注意力而剪：緊湊的節奏、強勁的開場鉤子，加上為平台優化的字幕，把觀眾留到最後一秒。",
    img: "/images/process-05-editing.webp",
  },
  {
    step: "05",
    shortTitle: "成效",
    brief: "追蹤與持續優化",
    title: "追蹤、學習、持續優化",
    desc: "影片上線後，我們解讀數據，每月給你清晰的優化建議，讓每一批內容都超越上一批。",
    img: "/images/process-06-publishing.webp",
  },
];

export const strengthsZh = [
  { title: "知識型內容專長", desc: "把專業知識轉化為好懂、能讓人停下滑動的敘事。" },
  { title: "對的受眾", desc: "鎖定與你商業目標一致的觀眾，不追逐虛榮數字。" },
  { title: "策略，而非跟風", desc: "從第一天起，就把商業思維融入短影音邏輯。" },
  { title: "為你量身打造", desc: "反映你的優勢、聲音與節奏的客製化內容規劃。" },
  { title: "有意圖的剪輯", desc: "精準的剪點與節奏，把注意力留到最後一秒。" },
  { title: "跨產業實證", desc: "涵蓋醫療、教練、財經、零售與領導力等領域。" },
];

export const teamMalaysiaZh = [
  { name: "Danis Guok", role: "專案經理", initials: "DG" },
  { name: "Chee Yian", role: "行政助理", initials: "CY" },
  { name: "Yi Ni", role: "影片剪輯師", initials: "YN" },
  { name: "Ke Xin", role: "影片剪輯師", initials: "KX" },
];

export const teamTaiwanZh = [
  { name: "林弘毅 Damon", role: "CEO", initials: "林", note: "創辦人，全網累積 447,000 粉絲", badge: "全網 447K 粉絲" },
  { name: "宓宏勳 Leo", role: "COO", initials: "宓", note: "前 Gogoro 與 Tesla 台灣資深主管", badge: "前 Tesla · Gogoro" },
  { name: "范君達", role: "CCO", initials: "范", note: "前奧美與李奧貝納策略總監", badge: "前奧美 · 李奧貝納" },
];

export const portfolioZh = [
  { name: "Boss Damon", category: "汽機車零售", metric: "447K", platform: "TikTok · IG · YT", blurb: "機車產業 KOL", img: "/images/case-2.jpg" },
  { name: "@sharonpengtw", category: "電子商務", metric: "297K", platform: "IG · TikTok", blurb: "零售與商業洞察創作者", img: "/images/case-5.jpg" },
  { name: "淨淨台灣", category: "居家清潔", metric: "155K", platform: "TikTok · FB", blurb: "居家清潔專家", img: "/images/case-3.jpg" },
  { name: "汪喵星球", category: "寵物食品", metric: "146K", platform: "IG · YT", blurb: "寵物食品領導品牌", img: "/images/case-4.jpg" },
  { name: "梁醫師", category: "醫療保健", metric: "132K", platform: "IG · TikTok", blurb: "最親切的復健專科醫師", img: "/images/case-6.jpg" },
];

export const faqsZh = [
  {
    group: "合作與投入",
    items: [
      { q: "你們主要與哪些客戶合作？", a: "我們服務的對象包含創辦人、企業主、專業人士與品牌團隊。只要你重視「長期信任」與「專業呈現」，而不只是做跟風的內容，我們非常樂意成為你的內容夥伴。" },
      { q: "第一次合作會怎麼開始？", a: "我們會先進行深度的訪談與溝通，了解你的目標、受眾與品牌方向。確認方向後，就會進入第一個內容週期，包括定位、人設、腳本、拍攝與剪輯，為你打造一套穩定且能長久經營的短影音內容系統。" },
      { q: "第一次簽約需要簽幾個週期？", a: "我們從 3 個內容製作週期開始合作，每個週期約為一個月。主要原因是短影音需要時間建立明確定位、累積內容與前期曝光。第一週期通常最重策略，成效多在第二、第三週期逐漸顯現；三週期的結構能讓你的內容系統完整成形並發揮效果。" },
      { q: "初次簽約的 3 個製作週期之後，我可以暫停或調整方案嗎？", a: "可以。前三個製作週期結束後，你可以完全自由選擇：續約、暫停或調整方案內容。" },
    ],
  },
  {
    group: "流程與內容製作",
    items: [
      { q: "短影音製作需要多久？", a: "一個完整製作週期約為一個月，包含：企劃、腳本、拍攝、剪輯、上架發布與成效複盤。每個週期都會根據前期結果持續優化，讓內容越來越精準。" },
      { q: "可以加購更多影片或其他客製化內容嗎？", a: "可以。我們提供加購方案與其他客製化內容，讓成品更貼近你的商業需求。" },
      { q: "腳本是你們寫的嗎？", a: "是的。我們會依據你的產業、受眾與商業目標撰寫腳本，你只需要在拍攝前確認內容即可。" },
      { q: "你們會指導我怎麼上鏡拍攝嗎？", a: "會。我們會引導你的語氣、姿勢與節奏，讓你在鏡頭前自然又專業，不需要任何拍攝經驗。" },
      { q: "我完全沒有拍攝經驗也可以經營自媒體嗎？", a: "當然可以。我們多數客戶都是從零開始。我們的流程本來就設計得簡單好上手，讓你在鏡頭前輕鬆呈現最真實的自己。" },
      { q: "我可以自由選擇攝影棚還是實地拍攝嗎？", a: "可以。攝影棚更專業、穩重、有質感；實地拍攝更自然、真實、貼近日常。可依你的風格與品牌需求自由選擇。" },
    ],
  },
  {
    group: "策略、發布與成效",
    items: [
      { q: "你們會協助做個人或品牌定位嗎？", a: "會。所有方案都包含人設與內容定位，確保你的影片傳達精準的訊息與專業價值。" },
      { q: "你們如何確保內容符合我的產業？", a: "我們會研究你的產業、受眾與行業慣用的溝通方式，並依專業標準調整內容深度與表達方式，讓你的影片專業可信，受眾更容易吸收。" },
      { q: "你們會協助多平台上架發布嗎？", a: "會。你的影片會發布在 TikTok、Instagram、YouTube 與 Facebook。小紅書因平台限制，建議由你自行上傳，我們會提供影片原檔與文案；其餘平台都會替你處理好。" },
      { q: "你們會提供成效報告嗎？", a: "會。每個週期結束都會提供完整的成效分析與優化建議。" },
    ],
  },
  {
    group: "定價與流量費用",
    items: [
      { q: "為什麼實地短影音製作方案會有額外的流量費用？", a: "在前三個週期，我們會收取與「成效掛鉤」的流量費。設置這個機制只有一個目的：幫助你拿到最理想的結果。只有當影片達到設定的觀看數門檻，你才需要支付流量費——你的頻道表現好，我們才有收益，這會激勵團隊投入最大資源協助你達成目標。所有流量皆為純自然流量，我們承諾不會透過廣告投放灌水數字。流量費僅限前 3 個週期收取。" },
      { q: "流量費是怎麼計算的？", a: "我們會把五大平台的觀看數加總計算：TikTok、Instagram、Facebook、YouTube 與小紅書，如此才能更完整地呈現整體曝光表現。" },
      { q: "三個製作週期之後還會繼續收流量費嗎？", a: "不會。從第四個週期開始，只需支付基本製作費用，不會再有任何額外的流量費用。" },
    ],
  },
];

export const faqIntroZh = "打造可長期經營的短影音內容系統，為你的個人品牌與事業賦能——你需要知道的一切都在這裡。";
export const ctaTitleZh = "準備好開始打造你的個人品牌了嗎？";
export const introZh = "嶼嶼創意是一家專注於真實商業成果的短影音與個人品牌公司。我們協助企業主、專業人士與品牌，透過短影音建立信任、展現專業，並吸引對的客戶。";

// ---------------------------------------------------------------------------
// Pricing plans (mirrors `plans` / `planFeatures` / `addOns` in site.ts)
// ---------------------------------------------------------------------------

export const plansZh = [
  {
    variant: "starter",
    badge: "限時優惠",
    save: "省下 47%",
    tag: "先體驗一次",
    name: "體驗拍攝方案",
    price: "RM 999",
    original: "RM 1,888",
    cadence: "一次性 · 3 支影片",
    blurb: "完整體驗一次全流程——不需按月綁約。",
    cta: { label: "領取優惠", href: "/zh/freeanalysis" },
    timer: true,
  },
  {
    variant: "personal",
    featured: true,
    tag: "個人適用",
    name: "個人品牌方案",
    price: "RM 5,000",
    cadence: "每月 · 10 支影片",
    blurb: "每月穩定產出——整個內容週期由我們一手包辦。",
    cta: {
      label: "開始這個方案",
      href: whatsappUrl(
        "你好，嶼嶼創意！我對個人品牌方案（每月 RM 5,000／10 支影片）有興趣，想了解接下來的流程。"
      ),
    },
  },
  {
    variant: "enterprise",
    tag: "企業適用",
    name: "企業影像製作",
    price: "客製報價",
    cadence: "依需求量身規劃",
    blurb: "圍繞你的行銷活動與團隊，量身打造的製作方案。",
    cta: {
      label: "索取報價",
      href: whatsappUrl("你好，嶼嶼創意！我想為企業影像製作索取報價，以下是我們的需求："),
    },
  },
];

export const planFeaturesZh = [
  { label: "策略、腳本與拍攝指導", has: [true, true, true] },
  { label: "以完播率為導向的剪輯", has: [true, true, true] },
  { label: "上架發布至全平台", has: [true, true, true] },
  { label: "自由搭配內容組合", has: [false, true, true] },
  { label: "每月成效報告", has: [false, true, true] },
  { label: "多地拍攝與專屬團隊", has: [false, false, true] },
];

export const addOnsZh = [
  {
    title: "貼文文案撰寫",
    desc: "依平台調性撰寫文案，鉤子與行動呼籲一步到位。",
  },
  {
    title: "排程上架發布",
    desc: "依規劃好的排程，替你發布到各大平台。",
  },
  {
    title: "數據分析報告",
    desc: "每月解讀觀看數與完播率，並告訴你下一步怎麼做。",
  },
];

// ---------------------------------------------------------------------------
// Blog cards (mirrors `blog` in site.ts — article pages remain in English)
// ---------------------------------------------------------------------------

export const blogZh = [
  {
    title: "馬來西亞 Facebook 行銷：2026 實戰攻略（含 Reels 與影片策略）",
    date: "2026年6月15日",
    category: "社群媒體",
    img: "/images/blog-facebook.jpg",
    href: "/marketing-insight/facebook-marketing-malaysia",
    excerpt: "一份 2026 年馬來西亞 Facebook 行銷實戰攻略——教你結合 Reels、影片與廣告投放策略，觸及對的受眾。",
  },
  {
    title: "馬來西亞影像製作：如何為品牌與短影音內容挑對製作公司（2026）",
    date: "2026年6月11日",
    category: "影像製作與行銷",
    img: "/images/blog-video.jpg",
    href: "/marketing-insight/video-production-malaysia",
    excerpt: "2026 年在馬來西亞為品牌與短影音內容挑選影像製作公司時，該注意的關鍵重點。",
  },
  {
    title: "馬來西亞 TikTok 代理商：2026 品牌 TikTok 行銷指南",
    date: "2026年6月5日",
    category: "社群媒體",
    img: "/images/blog-tiktok.jpg",
    href: "/marketing-insight/tiktok-agency-malaysia",
    excerpt: "品牌與馬來西亞 TikTok 代理商合作、打造高成效 TikTok 行銷策略的完整指南。",
  },
  {
    title: "馬來西亞社群媒體代操收費：2026 方案與費用指南",
    date: "2026年5月25日",
    category: "社群媒體",
    img: "/images/blog-pricing.jpg",
    href: "/marketing-insight/social-media-management-pricing-malaysia",
    excerpt: "透明解析馬來西亞社群媒體代操收費——常見方案、費用區間，以及你應該獲得的服務。",
  },
  {
    title: "馬來西亞社群媒體行銷：2026 品牌策略指南",
    date: "2026年5月22日",
    category: "社群媒體",
    img: "/images/blog-smm-strategy.jpg",
    href: "/marketing-insight/social-media-marketing-malaysia-strategy-guide",
    excerpt: "寫給想在 2026 年穩健成長的品牌——馬來西亞社群媒體行銷的策略指南。",
  },
  {
    title: "如何挑選馬來西亞社群媒體代理商：2026 買家指南",
    date: "2026年5月22日",
    category: "社群媒體",
    img: "/images/blog-choose-agency.jpg",
    href: "/marketing-insight/how-to-choose-social-media-agency-malaysia",
    excerpt: "挑選馬來西亞社群媒體代理商的買家指南——該問的問題與該避開的地雷。",
  },
];

// ---------------------------------------------------------------------------
// Homepage strings (mirrors hardcoded copy in app/page.tsx)
// ---------------------------------------------------------------------------

export const homeZh = {
  metaTitle: "嶼嶼創意 | 馬來西亞短影音行銷公司 — 個人品牌與商業成長",
  metaDescription:
    "嶼嶼創意協助馬來西亞的企業主、專業人士與品牌，透過策略先行的短影音建立信任、展現專業，並吸引對的客戶。",
  hero: {
    // The rotating word renders AFTER this sentence fragment.
    title: "短影音，讓觀眾成為你的",
    words: ["客戶", "鐵粉", "追蹤者", "品牌推薦人"],
    body: "我們協助馬來西亞的企業主、專業人士與品牌，把專業轉化為能贏得注意、累積權威、把對的人帶到你面前的短影音內容。策略先行，絕不盲目跟風。",
    ctaPrimary: "服務項目",
    ctaSecondary: "作品集",
  },
  videoFeature: {
    heading: "打造品牌，而不只是打廣告。",
    body: "人們相信的是人，不是 Logo。個人品牌——也就是創辦人 IP——為你的事業加上一張臉、一個聲音、一種觀點，讓受眾真正記住你的專業。我們以策略先行的短影音在馬來西亞打造這樣的 IP：每一支影片都在累積你的權威，把對的人帶到你面前——而不是一檔接一檔地花錢租借注意力。",
  },
  dome: {
    heading: "讓人記得住的作品。",
    body: "這些是我們為客戶與品牌拍攝的短影音——橫跨醫療保健、美妝保養、汽機車、居家生活、寵物、財經與生活風格。拖曳探索這些面孔，他們都已成為受眾叫得出名字的存在。",
    cta: "查看完整作品集",
  },
  partners: {
    heading: "信任我們的品牌。",
    sub: "策略先行的方法，不論你賣什麼都行得通——這些團隊在我們的協助下，成為顧客記得住的名字。",
  },
  awards: {
    heading: "獲獎紀錄。",
    intro: "嶼嶼創意的短影音作品，不只追求成效，也經得起獎項檢驗。我們以一支零廣告預算、自然觸及超過 300 萬觀看數的作品，拿下數位奇點獎「最佳社群影音」銅獎；並於第二屆金刻獎——台灣短影音創作者最具指標性的獎項——獲得肯定。這證明策略先行的內容，觀眾買單，評審也看得見。",
    readStory: "閱讀報導",
    items: [
      {
        award: "數位奇點獎 · DSA",
        title: "純靠自然觸及，贏下獎項。",
        rank: "銅獎 · 最佳社群影音",
        desc: "我們的愛康系列作品拿下數位奇點獎「最佳社群影音」銅獎——零廣告投放，自然觸及超過 300 萬觀看數。證明讓內容走得遠的，是犀利的創意，而不是廣告預算。",
      },
      {
        award: "金刻獎 · GMA",
        title: "站上台灣最大的舞台。",
        rank: "第二屆金刻獎",
        desc: "於第二屆金刻獎獲得肯定——台灣短影音創作者最具指標性的獎項，也是首個全程以直式影片呈現的頒獎典禮。這份肯定，代表我們的作品足以和業界最強的團隊同場較勁。",
      },
    ],
  },
  reviews: {
    heading: "客戶怎麼說。",
    body: "拍攝殺青、數據出爐後，來自客戶與品牌最真實的回饋。高續約率、看得見的成效與長期的夥伴關係，是客戶一季接一季回頭找我們的原因。",
  },
  cta: {
    title: "準備好打造一個讓人信任的個人品牌了嗎？",
    sub: "了解我們的服務週期，看看策略、拍攝、剪輯與優化如何化為穩定產出的短影音內容。",
    cta: "服務項目",
    cta2: "WhatsApp 聯繫",
  },
};

// ---------------------------------------------------------------------------
// Contact page strings (mirrors components/ContactExperience.tsx)
// ---------------------------------------------------------------------------

export const contactZh = {
  metaTitle: "聯絡我們 | 嶼嶼創意",
  metaDescription: "聯絡嶼嶼創意——工作室地址、電話、Email 與營業時間。我們是位於吉隆坡的短影音與個人品牌團隊。",
  eyebrow: "聯絡我們",
  title: "聯絡資訊",
  labels: {
    address: "工作室地址",
    office: "辦公室電話",
    mobile: "行動電話",
    email: "Email",
    hours: "營業時間",
  },
  hoursValue: "週一至週五 · 9:30am – 6:30pm",
  ctas: {
    directions: "路線導航",
    call: "撥打電話",
    email: "寄送郵件",
  },
  aria: {
    openMap: "在地圖中開啟工作室位置",
    callOffice: "撥打辦公室電話",
    callMobile: "撥打行動電話",
    sendEmail: "寄送 Email",
  },
};

// ---------------------------------------------------------------------------
// Portfolio page strings (mirrors app/our-portfolio/page.tsx)
// ---------------------------------------------------------------------------

export const portfolioPageZh = {
  metaTitle: "短影音作品集 | 嶼嶼創意 馬來西亞",
  metaDescription:
    "瀏覽嶼嶼創意的短影音作品集——橫跨醫療保健、美妝保養、汽機車、居家生活、寵物、財經與生活風格的真實客戶案例。策略先行、成效說話。",
  titleLine1: "為成效而生，",
  titleLine2: "不為取悅。",
  metricLabels: {
    views: "總觀看數",
    reels: "短影音作品",
    brands: "合作品牌",
    industries: "涵蓋產業",
  },
  explore: "探索作品",
  filterAll: "全部",
  categories: {
    healthcare: "醫療保健",
    beauty: "美妝保養",
    automotive: "汽機車",
    home: "居家生活",
    pet: "寵物",
    finance: "財經",
    lifestyle: "生活風格",
  },
  cta: {
    title: "想讓你的作品也出現在這裡？",
    sub: "一起打造下一個成功案例。",
  },
};

// ---------------------------------------------------------------------------
// Pricing page strings (mirrors hardcoded copy in app/pricing-plan/page.tsx)
// ---------------------------------------------------------------------------

export const pricingZh = {
  metaTitle: "價格方案 | 嶼嶼創意 馬來西亞",
  metaDescription:
    "嶼嶼創意馬來西亞短影音服務價格——比較一次性體驗拍攝、每月個人品牌方案與企業影像製作，加購項目、服務流程與價格常見問題一次看懂。",
  hero: {
    eyebrow: "價格",
    title: "為成長而生的方案。",
    sub: "選一個起點就好。每個方案都跑同一套經過驗證的流程——需要時隨時升級、調整或暫停。",
  },
  badges: {
    recommended: "推薦方案",
    limited: "限時優惠",
    save: "省下 47%",
  },
  offer: {
    endsIn: "優惠倒數",
    timer: { hrs: "時", min: "分", sec: "秒" },
  },
  addOns: {
    title: "任何方案皆可加購",
  },
  faq: {
    eyebrow: "常見問題",
    title: "選擇之前。",
    sub: "不確定哪個方案適合你？傳訊息給我們，我們幫你評估最合適的規格。",
    items: [
      {
        q: "需要簽約多久？",
        a: "我們以 3 個週期（約三個月）作為第一份合約，讓頻道有時間建立定位與聲量。之後你可以自由續約、暫停或調整方案。",
      },
      {
        q: "之後可以更換方案嗎？",
        a: "可以。許多客戶先從一次性的體驗拍攝方案開始，親身驗證流程有效後，再升級為每月的個人品牌方案。",
      },
      {
        q: "有什麼是不包含的？",
        a: "製作影片所需的一切——策略、腳本、拍攝指導與剪輯——每個方案都有。上架發布、貼文文案與廣告費用則屬於選配加購。",
      },
      {
        q: "企業方案怎麼計價？",
        a: "企業影像製作依你的行銷活動、團隊、拍攝地點與交付內容量身報價。把需求告訴我們，我們會給出固定金額的完整提案。",
      },
    ],
  },
  ctaBand: {
    title: "還在考慮？",
    sub: "先領取體驗優惠，或傳訊息給我們，幫你評估最合適的方案。",
    cta: "領取優惠",
    cta2: "WhatsApp 聯繫",
  },
};

// ---------------------------------------------------------------------------
// Blog index strings (mirrors app/marketing-insight/page.tsx)
// ---------------------------------------------------------------------------

export const blogIndexZh = {
  metaTitle: "行銷洞察 | 嶼嶼創意",
  metaDescription: "短影音策略、社群媒體行銷與品牌打造洞察——作品背後的思考。",
  eyebrow: "行銷洞察",
  title: "作品背後的思考",
  sub: "為馬來西亞市場而寫的短影音策略、社群媒體行銷與品牌打造洞察。",
  readMore: "閱讀更多",
  noteEnglish: "文章以英文撰寫",
};
