// 服務頁內容（繁體中文・台灣用語）— 與 lib/servicePages.ts 共用同一版型與主題色。
// 鍵名、slug、色碼、圖片路徑與圖示網址皆與英文版保持一致。

import type { ServicePageConfig, ServicePlatform } from "./servicePages";

// 共用平台清單 — 品牌圖示維持原色以利辨識。
const ic = (slug: string, hex: string) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const tiktok = (blurb: string): ServicePlatform => ({ key: "tiktok", name: "TikTok", icon: ic("tiktok", "111111"), blurb });
const instagram = (blurb: string): ServicePlatform => ({ key: "instagram", name: "Instagram", icon: ic("instagram", "E4405F"), blurb });
const facebook = (blurb: string): ServicePlatform => ({ key: "facebook", name: "Facebook", icon: ic("facebook", "1877F2"), blurb });
const youtube = (blurb: string): ServicePlatform => ({ key: "youtube", name: "YouTube", icon: ic("youtube", "FF0000"), blurb });
const xhs = (blurb: string): ServicePlatform => ({ key: "xhs", name: "小紅書 · RED", icon: ic("xiaohongshu", "FF2442"), blurb });

export const servicePagesZh: Record<string, ServicePageConfig> = {
  "short-video-services": {
    slug: "short-video-services",
    accent: "#2f6bff",
    accentSoft: "#eef4ff",
    accentDeep: "#10307e",
    metaTitle: "短影音服務｜嶼嶼創意 馬來西亞",
    metaDescription:
      "馬來西亞短影音服務，服務企業主與品牌：策略、腳本、拍攝、剪輯、發布與成效分析，為 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 打造平台原生內容。",
    eyebrow: "短影音服務",
    title: "短影音服務",
    subtitle: "一間為品牌而生的內容工作室，讓注意力沉澱為信任。",
    lead: "我們把你的專業變成一套完整的短影音系統：定位、內容支柱、腳本、引導式拍攝、以完播率為導向的剪輯、上架發布支援，以及每月的成效覆盤。成果不是隨興發文，而是一具可持續運轉的內容引擎，為 TikTok、Instagram Reels、YouTube Shorts、Facebook Reels 與小紅書 RED 而打造。",
    heroImg: "/images/generated-hero-studio.webp",
    heroAlt: "嶼嶼創意在馬來西亞提供短影音服務的攝影棚場景",
    heroFrames: [
      { img: "/images/process-03-planning.webp", label: "策略" },
      { img: "/images/process-04-filming.webp", label: "拍攝" },
      { img: "/images/process-05-editing.webp", label: "剪輯" },
    ],
    stats: [
      { value: "8B+", label: "跨平台累積觀看數" },
      { value: "500+", label: "觀看破十萬的影片" },
      { value: "5", label: "內容發布平台" },
    ],
    intro: {
      heading: "一個服務頁面，一個清楚的承諾：穩定產出、持續累積需求的短影音。",
      body: [
        "短影音要奏效，整個循環必須環環相扣。一個好點子需要俐落的開場鉤子、自然的表達、精準的剪輯、貼合平台的文案，還有一套把每次發文都化為學習的檢視機制。",
        "我們的短影音服務為馬來西亞的企業主、專業人士、診所、教育品牌、零售商、房產團隊與服務型企業而設——他們需要的不是零散的影片，而是影片背後的系統，讓受眾能一次又一次遇見同一個清晰的觀點。",
      ],
    },
    proof: [
      { label: "定位", title: "開拍之前", desc: "先定義受眾、承諾、內容支柱與切入角度，讓每一支腳本都有明確任務。" },
      { label: "製作", title: "拍攝現場", desc: "全程引導表達、節奏、姿態與故事段落，讓專業顯得溫暖而不是照本宣科。" },
      { label: "發布", title: "剪輯之後", desc: "備妥各平台的原生版本並解讀數據，讓下一輪循環從更聰明的起點出發。" },
    ],
    offeringsHeading: "服務內容",
    offeringsSub: "這項服務以每月製作節奏運作，而不是一次性的影片訂單。",
    offerings: [
      { title: "內容策略", desc: "受眾盤點、品牌定位、內容支柱、活動切角，以及可重複執行的每月方向。" },
      { title: "腳本撰寫", desc: "短小而結構完整的腳本：清楚的開場鉤子、佐證重點、轉場與行動呼籲。" },
      { title: "引導式拍攝", desc: "棚拍或到場拍攝，全程口條指導，讓你說得自然又不失重點。" },
      { title: "短影音剪輯", desc: "以完播率為導向的剪輯：字幕、節奏、封面與視覺步調，全為行動裝置上的注意力打磨。" },
      { title: "發布支援", desc: "為 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 準備平台原生版本與發布方向。" },
      { title: "每月覆盤", desc: "依觀看、完播、收藏、留言與名單成效檢視表現，並提出下一輪的優化建議。" },
    ],
    processHeading: "每月循環",
    processLead: "每個週期都像一間小型編輯室在運轉：策略、腳本、拍攝、剪輯、上架發布與覆盤。",
    process: [
      { step: "01", title: "找到切角", desc: "研究你的產品、受眾疑問、常見異議與佐證素材，讓頻道擁有清晰的聲音。" },
      { step: "02", title: "批量寫稿", desc: "腳本依內容支柱分組：權威、教育、信任累積、轉換與時事話題。" },
      { step: "03", title: "有導演的拍攝", desc: "拍攝全程提供口條引導、場景結構、節奏掌控與鏡頭前指導。" },
      { step: "04", title: "為完播而剪", desc: "剪去拖沓、加上字幕、雕琢節奏，為每支影片包裝出合適的平台版本。" },
      { step: "05", title: "覆盤精進", desc: "週期以成效筆記收尾，讓下一批內容比上一批更精準。" },
    ],
    platformsHeading: "每個平台，都有自己的版本。",
    platformsLead:
      "一支短影音可以從同一個點子出發，但不該以同一個檔案走遍天下。我們會依各平台調整構圖、文案風格、開場鉤子強度與搜尋關鍵字。",
    platforms: [
      tiktok("快速曝光、以開場鉤子帶動節奏、創作者原生的表達方式，跟上趨勢卻不失品牌調性。"),
      instagram("Reels、封面、文案與主頁動線，讓品牌看起來活躍、精緻、值得一再回訪。"),
      youtube("以 Shorts 帶動曝光，搭配利於搜尋的標題，逐步累積更深厚的 YouTube 權威內容庫。"),
      facebook("Reels 與社群貼文，觸及重視信任、口碑、留言與在地實證的受眾。"),
      xhs("以搜尋為導向的小紅書筆記：中文切角、實用封面與可信度線索，打動做足功課才下單的買家。"),
    ],
    answersHeading: "客戶開始前最常問的問題",
    answers: [
      {
        q: "什麼是短影音服務？",
        a: "短影音服務整合策略、腳本、拍攝、剪輯、上架發布支援與成效檢視，讓品牌能為社群平台穩定產出直式影片。",
      },
      {
        q: "這項服務最適合誰？",
        a: "最適合企業主、專業人士、服務型企業、診所、教育品牌、零售商，以及每個月都需要信任型內容的公司。",
      },
      {
        q: "你們只負責拍片，還是也會規劃內容？",
        a: "我們在開拍之前就會先規劃內容。品牌定位、內容支柱、腳本與平台方向，都是每月循環的一部分。",
      },
    ],
    related: [
      { label: "影像製作", href: "/zh/video-production", blurb: "深入了解拍攝與剪輯的核心引擎。" },
      { label: "IP 打造", href: "/zh/ip-building", blurb: "打造讓人記得住的創辦人或專家品牌。" },
      { label: "廣告投放", href: "/zh/ads-boosting", blurb: "用付費社群放大你表現最好的影片。" },
    ],
    ctaTitle: "準備好建立你的每月內容引擎了嗎？",
    ctaSub: "預約免費分析，我們將為你規劃第一批切角、腳本與製作節奏。",
    schemaType: "Social media marketing service",
    keywords: [
      "馬來西亞短影音行銷",
      "短影音代操",
      "馬來西亞 TikTok 內容行銷",
      "Instagram Reels 製作",
      "YouTube Shorts 製作",
      "馬來西亞小紅書行銷",
    ],
  },

  "video-production": {
    slug: "video-production",
    accent: "#1f82ff",
    accentSoft: "#edf7ff",
    accentDeep: "#1546a6",
    metaTitle: "影像製作｜嶼嶼創意 馬來西亞",
    metaDescription:
      "馬來西亞短影音導向的影像製作：策略、腳本、棚拍與外拍、鏡頭前指導、剪輯，並為 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 產出平台原生版本。",
    eyebrow: "影像製作",
    title: "影像製作",
    subtitle: "精緻得撐得起品牌，自然得融得進動態。",
    lead: "我們從概念到成片一手包辦短影音製作：企劃方向、腳本撰寫、分鏡規劃、棚拍或外拍、收音、燈光、鏡頭前指導、剪輯、字幕、封面與平台原生輸出。每一格畫面都為留住注意力而生，同時守住品牌的可信度。",
    heroImg: "/images/generated-hero-studio.webp",
    heroAlt: "馬來西亞短影音專業影像製作攝影棚",
    heroFrames: [
      { img: "/images/process-04-filming.webp", label: "拍攝" },
      { img: "/images/generated-filming-coaching.webp", label: "指導" },
      { img: "/images/process-05-editing.webp", label: "剪輯" },
    ],
    stats: [
      { value: "8B+", label: "跨平台累積觀看數" },
      { value: "500+", label: "觀看破十萬的影片" },
      { value: "5", label: "交付平台數" },
    ],
    intro: {
      heading: "從策略出發的製作，而不是從攝影機出發。",
      body: [
        "多數影片拍攝從器材開始，我們從企劃開始：你在對誰說話、他們在乎什麼、每支影片該讓他們產生什麼感受或行動。這正是為什麼我們的素材能帶來轉換，而不只是好看而已。",
        "無論是在可控的攝影棚拍出權威感內容，還是到現場捕捉自然的臨場能量，每一支影片都經過腳本、執導與剪輯，讓觀眾從第一秒看到最後一秒。",
      ],
    },
    proof: [
      { label: "前期製作", title: "不打無準備的仗", desc: "開拍前就規劃好開場鉤子、視覺節奏、分鏡清單、談話重點與各平台格式。" },
      { label: "現場執導", title: "鏡頭前自然自在", desc: "我們提供節奏與口條的引導，讓成品顯得自信，卻不會變得僵硬。" },
      { label: "後期製作", title: "為滑動而剪", desc: "字幕、節奏、封面、精華版本與平台版本，全依行動裝置的觀看習慣打磨。" },
    ],
    offeringsHeading: "服務內容",
    offeringsSub: "一項兼顧工藝質感與商業意圖的品牌影像製作服務。",
    offerings: [
      { title: "棚拍與外拍", desc: "專業燈光、收音與現場執導——在我們的攝影棚或你的場地，端看故事需要什麼。" },
      { title: "腳本與分鏡", desc: "每支影片開拍前都先完成規劃，拍攝保持聚焦，每顆鏡頭都有用途。" },
      { title: "鏡頭前指導", desc: "我們引導你的口條與節奏，就算零拍攝經驗也能自然上鏡。" },
      { title: "以完播率為導向的剪輯", desc: "緊湊的剪接、字幕、開場鉤子與節奏設計，讓觀眾一路看到最後。" },
      { title: "平台原生版本", desc: "一次母帶錄製，衍生出為各平台調校的直式與橫式版本。" },
      { title: "成效報告", desc: "每個週期結束後提供清楚的數據與建議，讓下一批影片表現更好。" },
    ],
    processHeading: "從需求到成片",
    processLead: "這條製作路徑讓創意野心始終扣緊商業成果。",
    process: [
      { step: "01", title: "創意需求", desc: "定義受眾、目的、訊息、佐證素材，以及需要交付的平台格式。" },
      { step: "02", title: "腳本與分鏡", desc: "把想法變成腳本、分鏡清單、視覺節奏與拍攝排程。" },
      { step: "03", title: "現場執導拍攝", desc: "拍攝當天由我們統籌燈光、收音、構圖、指導與場次流程。" },
      { step: "04", title: "完播導向剪輯", desc: "素材剪成緊湊、有字幕、可直接發布的平台影片，並附上封面與多版本變化。" },
      { step: "05", title: "驗收與交付", desc: "你會收到精修完成的素材，以及發布、投放或再利用的建議。" },
    ],
    platformsHeading: "為每個平台量身打造。",
    platformsLead:
      "我們不會把同一個輸出檔到處張貼。每支影片都會依人們的觀看方式、以及各平台演算法的偏好，重新剪輯與構圖。",
    platforms: [
      tiktok("節奏明快、鉤子先行的剪輯，緊貼趨勢步調，為 For You 頁面而生。"),
      instagram("Reels 與輪播圖文，配上吸睛封面、俐落文案與值得收藏的價值。"),
      youtube("長影片與 Shorts 並進，累積可被搜尋的權威與觀看時長。"),
      facebook("以社群為先的剪輯與 Reels，觸及年齡層較高、意圖明確的受眾。"),
      xhs("筆記式內容與封面，為馬來西亞中文圈的小紅書用戶量身調校。"),
    ],
    answersHeading: "影像製作常見問題",
    answers: [
      {
        q: "影像製作包含哪些內容？",
        a: "我們的影像製作涵蓋策略、腳本撰寫、分鏡規劃、拍攝、鏡頭前指導、剪輯、字幕、封面，以及可直接發布的平台輸出檔。",
      },
      {
        q: "可以到現場拍攝嗎？",
        a: "可以。我們能棚拍也能外拍，取決於故事需要可控的權威感、工作現場的真實感，還是實地取景的說服力。",
      },
      {
        q: "你們會為多個平台製作影片嗎？",
        a: "會。我們會為 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 分別調整影片，而不是同一個檔案到處使用。",
      },
    ],
    related: [
      { label: "短影音服務", href: "/zh/short-video-services", blurb: "以策略、腳本、拍攝與覆盤打造每月內容引擎。" },
      { label: "IP 打造", href: "/zh/ip-building", blurb: "把企業主變成讓人記得住的個人品牌。" },
      { label: "廣告投放", href: "/zh/ads-boosting", blurb: "用付費社群放大你表現最好的影片。" },
    ],
    ctaTitle: "準備好讓品牌走到鏡頭前了嗎？",
    ctaSub: "預約免費分析，我們將為你規劃第一批值得投入製作的影片。",
    schemaType: "Video production service",
    keywords: [
      "馬來西亞影像製作",
      "馬來西亞短影音製作",
      "企業形象影片製作",
      "TikTok 影片製作",
      "Instagram Reels 製作",
    ],
  },

  "ip-building": {
    slug: "ip-building",
    accent: "#33a7ff",
    accentSoft: "#eef8ff",
    accentDeep: "#165cba",
    metaTitle: "IP 打造｜嶼嶼創意 馬來西亞",
    metaDescription:
      "馬來西亞創辦人 IP 與個人品牌打造，服務企業主與專家：建立鮮明的鏡頭前形象、內容支柱、招牌形式，以及以信任為核心的短影音。",
    eyebrow: "IP 打造",
    title: "IP打造",
    subtitle: "讓你的專業成為一個名字、一種聲音、一個讓人願意一再回訪的世界。",
    lead: "我們為企業主、專家、教育工作者與專業人士打造創辦人 IP 與個人品牌——因為你需要的不只是曝光。我們梳理你的定位、觀點、內容支柱、招牌形式與鏡頭前的存在感，讓受眾記得產品背後的那個人。",
    heroImg: "/images/case-2.jpg",
    heroAlt: "嶼嶼創意打造的創辦人個人品牌內容",
    heroFrames: [
      { img: "/images/case-5.jpg", label: "聲音" },
      { img: "/images/case-14.jpg", label: "人設" },
      { img: "/images/generated-strategy-workshop.webp", label: "支柱" },
    ],
    stats: [
      { value: "96%", label: "客戶續約率" },
      { value: "447K", label: "打造過的最大創辦人粉絲數" },
      { value: "100+", label: "服務客戶數" },
    ],
    intro: {
      heading: "你的專業是資產，我們讓它被看見。",
      body: [
        "IP——也就是創辦人品牌——為你的事業加上一張臉、一種聲音與一套觀點，讓你的專業知識成為受眾記得住、願意回訪的存在。與其一檔一檔地租用付費流量的注意力，不如擁有一個在每次發文之後仍持續發酵的品牌。",
        "我們先定義你的鏡頭前形象、內容支柱與頻道方向，再持續產出證明權威、暖化受眾的短影音——直到詢問自己找上門，因為人們早已信任你。",
      ],
    },
    proof: [
      { label: "身分", title: "清晰的公眾角色", desc: "定義你該以什麼聞名、對誰說話，以及受眾該在哪些事情上信任你。" },
      { label: "敘事", title: "一套觀點", desc: "讓你的內容有一條主線：信念、專業、佐證，以及可重複使用的語言。" },
      { label: "記憶點", title: "讓人記得住的形式", desc: "反覆出現的鉤子、系列、視覺符號與故事，讓 IP 隨時間越來越好認。" },
    ],
    offeringsHeading: "我們如何打造你的 IP",
    offeringsSub: "個人品牌不該像一張內容排程表，而該像一套有生命的觀點體系。",
    offerings: [
      { title: "形象與定位", desc: "釐清你在鏡頭前是誰、代表什麼立場，以及真正要服務的受眾是誰。" },
      { title: "內容支柱", desc: "一組可重複運用的主題，讓頻道保持聚焦、訊息深植人心。" },
      { title: "招牌形式", desc: "反覆出現的系列與鉤子，成為你的專屬識別，也更容易持續產出。" },
      { title: "敘事方向", desc: "為所有影片拉出一條主線，讓品牌故事持續累積，而不是各說各話。" },
      { title: "受眾成長策略", desc: "內容瞄準真正符合商業目標的追蹤者，而不是虛榮的觸及數字。" },
      { title: "持續優化", desc: "每月檢視成效，隨頻道成長不斷磨利你的切角。" },
    ],
    processHeading: "IP 架構",
    processLead: "我們先設計好這個「人」的品牌，再放大發文的規模。",
    process: [
      { step: "01", title: "萃取專業", desc: "挖掘你的信念、故事、經歷、客戶蛻變案例與獨門優勢。" },
      { step: "02", title: "圈定領地", desc: "定義你要佔據的位置：問題、受眾、賽道，以及你要反覆傳遞的訊息。" },
      { step: "03", title: "建立內容支柱", desc: "把你的觀點歸納成可重複的主題：權威、共鳴、佐證與轉換。" },
      { step: "04", title: "打造招牌形式", desc: "反覆出現的系列、鉤子與故事框架，讓內容更好記，也更好持續生產。" },
      { step: "05", title: "累積記憶點", desc: "隨著受眾語言、疑慮與需求演變，持續檢視成效、磨利 IP。" },
    ],
    platformsHeading: "一個身分，走遍每個平台。",
    platformsLead:
      "強大的 IP 會在受眾出沒的每個角落穩定現身——同一張臉、同一套觀點，依各平台社群的習性做調整。",
    platforms: [
      tiktok("快速漲粉的曝光引擎，觸及全新的受眾。"),
      instagram("你的形象基地——Reels、限時動態，以及散發權威感的主頁版面。"),
      youtube("以長內容累積更深的信任，也為你最好的觀點提供一個可被搜尋的家。"),
      facebook("觸及忠誠、意圖明確的社群，以及年齡層較高的專業受眾。"),
      xhs("在馬來西亞中文圈、重視做功課的小紅書用戶之間建立可信度。"),
    ],
    answersHeading: "IP 打造常見問題",
    answers: [
      {
        q: "什麼是 IP 打造？",
        a: "IP 打造是把一個人的專業、聲音、故事與觀點，轉化為讓人記得住的公眾形象，進而吸引追蹤、信任、名單與機會。",
      },
      {
        q: "IP 打造和個人品牌是同一件事嗎？",
        a: "兩者關係緊密。個人品牌定義人們如何看待你；IP 打造則更進一步，圍繞這個形象建立可重複的觀點、形式與內容資產。",
      },
      {
        q: "誰適合打造創辦人 IP？",
        a: "企業主、顧問、醫師、教練、教育工作者、房地產專業人士與財務專家——只要「對人的信任」會影響購買決策，就值得投入。",
      },
    ],
    related: [
      { label: "短影音服務", href: "/zh/short-video-services", blurb: "把你的觀點化為穩定的每月內容節奏。" },
      { label: "影像製作", href: "/zh/video-production", blurb: "支撐你 IP 的棚拍與外拍引擎。" },
      { label: "廣告投放", href: "/zh/ads-boosting", blurb: "當 IP 開始發酵，用付費加速擴大觸及。" },
    ],
    ctaTitle: "準備好成為市場記得住的那個名字了嗎？",
    ctaSub: "從免費分析開始，我們將為你規劃定位、內容支柱與第一批影片。",
    schemaType: "Personal branding service",
    keywords: [
      "馬來西亞 IP 打造",
      "馬來西亞個人品牌經營",
      "創辦人 IP",
      "個人品牌短影音",
      "專家品牌打造",
    ],
  },

  "ads-boosting": {
    slug: "ads-boosting",
    accent: "#376dff",
    accentSoft: "#eef3ff",
    accentDeep: "#1f3f96",
    metaTitle: "廣告投放｜嶼嶼創意 馬來西亞",
    metaDescription:
      "馬來西亞短影音與社群內容的廣告投放：以付費廣告放大已驗證的素材，涵蓋 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 的受眾鎖定、再行銷與成效報告。",
    eyebrow: "廣告投放",
    title: "廣告投放",
    subtitle: "付費媒體該放大實證，而不是掩飾疲弱的內容。",
    lead: "我們把你表現最強的自然流量影片，變成目標更精準的付費社群廣告：受眾鎖定、預算節奏、再行銷、開場鉤子測試與成效報告。目標很簡單——讓已經展現受眾訊號的內容走得更遠，觸及最可能在乎、詢問並購買的人。",
    heroImg: "/images/case-10.jpg",
    heroAlt: "為廣告投放與付費社群活動準備的短影音素材",
    heroFrames: [
      { img: "/images/generated-performance-review.webp", label: "數據" },
      { img: "/images/blog-facebook.jpg", label: "Meta" },
      { img: "/images/blog-tiktok.jpg", label: "TikTok" },
    ],
    stats: [
      { value: "400M+", label: "單月最高觀看數" },
      { value: "5", label: "代管的廣告平台" },
      { value: "ROI", label: "每一分令吉都有報告" },
    ],
    intro: {
      heading: "廣告投放，用在已被驗證的內容上最有效。",
      body: [
        "我們不會把預算砸向沒把握的素材然後聽天由命。我們先觀察自然流量的表現，再把預算押在受眾已經買單的影片上——讓每一分令吉都在放大已驗證的贏家，而不是從零開始試錯。",
        "從受眾鎖定、預算節奏，到開場鉤子的 A/B 測試與成效追蹤，我們管理跨平台的完整投放週期，並用白話的數字回報：觸及、單次成果成本，以及下一步該放大什麼。",
      ],
    },
    proof: [
      { label: "素材訊號", title: "從贏家開始", desc: "自然流量表現能篩出注意力、清晰度與信任感都足以承接預算的影片。" },
      { label: "媒體掌控", title: "有意圖地花錢", desc: "受眾鎖定、版位、投放節奏與再行銷，讓預算始終扣緊商業目標。" },
      { label: "學習循環", title: "放大會轉換的", desc: "我們解讀成本、觸及、名單、留言與素材疲乏，讓下一輪測試更銳利。" },
    ],
    offeringsHeading: "我們負責的範圍",
    offeringsSub: "為真正值得放大的內容提供付費支援。",
    offerings: [
      { title: "素材篩選", desc: "找出訊號最強的自然流量影片，把它們轉化為廣告。" },
      { title: "受眾鎖定", desc: "精準受眾與類似受眾設定，讓預算觸及真正會轉換的人。" },
      { title: "預算節奏", desc: "預算依表現動態調整、往有效的方向集中——不讓一分令吉浪費在無感的廣告上。" },
      { title: "鉤子與形式測試", desc: "A/B 測試開場與形式，持續壓低單次成果成本。" },
      { title: "再行銷", desc: "對看過影片、造訪頁面的暖受眾持續推進，引導詢問與購買。" },
      { title: "透明報告", desc: "觸及、單次成果成本與 ROI 一目了然，並告訴你下一步該放大什麼。" },
    ],
    processHeading: "投放循環",
    processLead: "付費觸及最適合作為一套回饋系統來運作，而不是按一次按鈕就結束。",
    process: [
      { step: "01", title: "解讀自然訊號", desc: "篩選開場鉤子強、觀看行為佳、收藏留言分享多，或帶有名單意圖的影片。" },
      { step: "02", title: "打包成廣告", desc: "為素材補上字幕、行動呼籲、到達頁方向，以及各平台的專屬設定。" },
      { step: "03", title: "建立受眾", desc: "組合冷受眾、暖受眾、類似受眾、興趣、再行銷或搜尋導向的受眾池。" },
      { step: "04", title: "調節與測試", desc: "預算流向展現動能的素材、受眾與版位組合。" },
      { step: "05", title: "報告與放大", desc: "你會清楚看到什麼有效、什麼疲乏、該停掉什麼，以及什麼值得加碼下一層預算。" },
    ],
    platformsHeading: "付費觸及，覆蓋每一個渠道。",
    platformsLead:
      "每個平台的廣告系統偏好不同。我們為各平台量身調整素材與受眾鎖定，再把預算移往令吉效益最高的地方。",
    platforms: [
      tiktok("用 Spark Ads 放大原生感影片，以低成本換取大量觸及。"),
      instagram("Reels 與動態廣告搭配精準鎖定，觸及深思熟慮、客單價較高的買家。"),
      youtube("可略過廣告與 Shorts 廣告並用，累積品牌認知、承接購買意圖。"),
      facebook("精準鎖定、再行銷與名單開發的主力戰場。"),
      xhs("付費筆記與關鍵字版位，觸及小紅書 RED 上的中文買家。"),
    ],
    answersHeading: "廣告投放常見問題",
    answers: [
      {
        q: "什麼是廣告投放？",
        a: "廣告投放是運用付費媒體，把選定的影片或貼文推播給更大、更相關的受眾，通常包含受眾鎖定、再行銷、預算控管與成效追蹤。",
      },
      {
        q: "每支影片都該投廣告嗎？",
        a: "不必。我們偏好投放自然流量訊號已經強勁的影片，因為付費媒體放大的是素材本來就傳遞出的訊息。",
      },
      {
        q: "你們能在哪些平台投放？",
        a: "我們支援 TikTok、Instagram、YouTube、Facebook 與小紅書 RED 的付費放大，依受眾、目標與素材適配度決定組合。",
      },
    ],
    related: [
      { label: "短影音服務", href: "/zh/short-video-services", blurb: "建立每月內容系統，讓付費觸及有夠強的內容可以放大。" },
      { label: "影像製作", href: "/zh/video-production", blurb: "我們製作值得投放的影片。" },
      { label: "IP 打造", href: "/zh/ip-building", blurb: "付費觸及讓強大的創辦人品牌加速複利。" },
    ],
    ctaTitle: "準備好放大已經奏效的內容了嗎？",
    ctaSub: "預約免費分析，我們將幫你找出值得投入預算的影片。",
    schemaType: "Social media advertising service",
    keywords: [
      "馬來西亞廣告投放",
      "TikTok 廣告投放",
      "Instagram 廣告代操",
      "馬來西亞 Facebook 廣告",
      "短影音廣告投放",
      "付費社群行銷",
    ],
  },
};

export const servicePageSlugsZh = Object.keys(servicePagesZh);
