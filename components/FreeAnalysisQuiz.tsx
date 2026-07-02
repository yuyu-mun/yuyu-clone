"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowIcon, WhatsAppIcon } from "@/components/Icons";
import { company } from "@/lib/site";

const N8N_URL = "https://ycmyn8n.zeabur.app/webhook/yuyu-quiz-en";

type Locale = "en" | "zh";

type AnswerValue = string | string[];
type Answers = Record<string, AnswerValue>;

type QuizOption = {
  key: string;
  label: string;
  other?: boolean;
};

type QuizStep = {
  id: string;
  part: string;
  question: string;
  hint?: string;
  kind: "single" | "multi" | "text" | "textarea";
  options?: QuizOption[];
  max?: number;
  placeholder?: string;
  optional?: boolean;
  condition?: (answers: Answers) => boolean;
};

type QuizCopy = {
  steps: QuizStep[];
  intro: {
    logoAlt: string;
    titleWords: string[];
    titleHighlight: string;
    description: string;
    startAriaLabel: string;
    orbRingText: string;
    orbStart: string;
    meta: ReactNode;
  };
  topbar: {
    questionOf: (position: number, total: number) => string;
    almostDone: string;
  };
  feedback: {
    typeItBelow: string;
    nice: string;
    updated: string;
    limitReached: string;
    picked: (count: number, max: number) => string;
    ready: string;
  };
  limitMessage: (max: number) => string;
  otherAnswer: (value: string) => string;
  otherField: {
    label: (stepId: string) => string;
    placeholder: (stepId: string) => string;
  };
  textFieldLabel: (stepId: string) => string;
  textareaLabel: string;
  phoneError: string;
  nav: {
    skip: string;
    back: string;
    sending: string;
    submit: string;
    continue: string;
  };
  success: {
    title: (name: string) => string;
    body: string;
    steps: [string, string, string];
    cta: string;
  };
  whatsappFollowUpMessage: string;
};

const quizStepsEn: QuizStep[] = [
  {
    id: "q1",
    part: "Part 1: About You",
    question: "What industry are you in?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "F&B / Food" },
      { key: "B", label: "Retail / E-commerce" },
      { key: "C", label: "Beauty / Hair / Nails" },
      { key: "D", label: "Property / Construction / Renovation" },
      { key: "E", label: "Education / Training" },
      { key: "F", label: "Medical / Health / Wellness" },
      { key: "G", label: "Legal / Accounting / Finance" },
      { key: "H", label: "Automotive / Motorcycles" },
      { key: "I", label: "Tech / Software / IT Services" },
      { key: "J", label: "Others", other: true },
    ],
  },
  {
    id: "q2",
    part: "Part 1: About You",
    question: "How long have you been in this industry?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "1-3 years" },
      { key: "B", label: "3-5 years" },
      { key: "C", label: "5-10 years" },
      { key: "D", label: "10 years and above" },
    ],
  },
  {
    id: "q3",
    part: "Part 1: About You",
    question: "What is your company name and main product or service?",
    hint: "A short description is enough.",
    kind: "textarea",
    placeholder: "Example: I run a renovation company for residential and commercial spaces in KL.",
  },
  {
    id: "q4",
    part: "Part 1: About You",
    question: "What do you think is your customers' first impression of you?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "Professional and reliable" },
      { key: "B", label: "Friendly and easy to talk to" },
      { key: "C", label: "Affordable pricing" },
      { key: "D", label: "Really good quality" },
      { key: "E", label: "Experienced and established" },
      { key: "F", label: "Innovative and keeps up with trends" },
      { key: "G", label: "Genuine and straightforward" },
      { key: "H", label: "Has that personal charm" },
    ],
  },
  {
    id: "q5",
    part: "Part 2: About Your Customers",
    question: "What type of customer do you most want to serve?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "People with money but no time to research" },
      { key: "B", label: "Budget-conscious consumers who want the best value" },
      { key: "C", label: "People who care about quality and will pay more for it" },
      { key: "D", label: "Newcomers who do not know much yet" },
      { key: "E", label: "Business clients within the same industry" },
      { key: "F", label: "Others", other: true },
    ],
  },
  {
    id: "q6",
    part: "Part 2: About Your Customers",
    question: "Before customers found you, what was the biggest problem they were facing?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "They did not know how to choose and feared making the wrong call" },
      { key: "B", label: "They had been burned or cheated before" },
      { key: "C", label: "Market pricing felt unclear" },
      { key: "D", label: "They could not find someone they trusted" },
      { key: "E", label: "They did not understand the technical side" },
      { key: "F", label: "They had limited budget and feared wasting money" },
      { key: "G", label: "They tried others before but were not satisfied" },
    ],
  },
  {
    id: "q7",
    part: "Part 2: About Your Customers",
    question: "Why do customers usually choose you over someone else?",
    hint: "Pick up to 2.",
    kind: "multi",
    max: 2,
    options: [
      { key: "A", label: "My expertise is stronger" },
      { key: "B", label: "My pricing is more competitive" },
      { key: "C", label: "Good word of mouth and referrals" },
      { key: "D", label: "I am genuine and do not hard sell" },
      { key: "E", label: "My service is more comprehensive" },
      { key: "F", label: "I have success stories and samples to show" },
      { key: "G", label: "Customers trust me after one conversation" },
    ],
  },
  {
    id: "q8",
    part: "Part 3: About Short Videos",
    question: "Are you currently running any social media?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Yes, very active and posting every week" },
      { key: "B", label: "Yes, but I rarely update" },
      { key: "C", label: "I have an account but barely use it" },
      { key: "D", label: "None at all" },
    ],
  },
  {
    id: "q8a",
    part: "Part 3: About Short Videos",
    question: "What is your social media ID?",
    hint: "Optional.",
    kind: "text",
    optional: true,
    placeholder: "Example: @yuyu_creative",
    condition: (answers) => {
      const social = String(answers.q8 || "");
      return Boolean(social) && !social.startsWith("D.");
    },
  },
  {
    id: "q9",
    part: "Part 3: About Short Videos",
    question: "If you had to film today, which topic would you feel most confident talking about?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Behind-the-scenes knowledge in my industry" },
      { key: "B", label: "Questions my customers ask all the time" },
      { key: "C", label: "My founder journey or personal story" },
      { key: "D", label: "How to choose the right product or service" },
      { key: "E", label: "In-depth knowledge about what I sell" },
      { key: "F", label: "I have no idea yet" },
    ],
  },
  {
    id: "q10",
    part: "Part 3: About Short Videos",
    question: "What do you most want short videos to help you achieve?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Get more people to know my brand" },
      { key: "B", label: "Build my professional reputation" },
      { key: "C", label: "Bring in customers without relying only on ads" },
      { key: "D", label: "Build more trust with existing customers" },
      { key: "E", label: "All of the above" },
    ],
  },
  {
    id: "q11",
    part: "Part 4: Where You Are Now",
    question: "Are your competitors or industry peers already doing short videos?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Yes, and they are doing well" },
      { key: "B", label: "Yes, but the content looks average" },
      { key: "C", label: "A few have started trying" },
      { key: "D", label: "I have not seen any yet" },
      { key: "E", label: "I am not sure" },
    ],
  },
  {
    id: "q12",
    part: "Part 4: Where You Are Now",
    question: "Why do you want to start doing short videos?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "Competitors are doing it and I do not want to fall behind" },
      { key: "B", label: "Ads are getting more expensive" },
      { key: "C", label: "I want to build my personal brand and image" },
      { key: "D", label: "I want customers to come to me on their own" },
      { key: "E", label: "I want a content asset, not just ads" },
      { key: "F", label: "A friend or customer told me I should start" },
      { key: "G", label: "I am curious and want to find out more" },
    ],
  },
  {
    id: "q13",
    part: "Part 4: Where You Are Now",
    question: "What has been holding you back from starting until now?",
    hint: "Pick up to 3.",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "I do not know what content to make" },
      { key: "B", label: "I am not comfortable on camera" },
      { key: "C", label: "I have no time to film and edit" },
      { key: "D", label: "I cannot find a reliable team" },
      { key: "E", label: "I am not sure short videos work for my industry" },
      { key: "F", label: "It feels too expensive" },
      { key: "G", label: "I tried before but did not get good results" },
      { key: "H", label: "I am ready and looking for the right partner" },
    ],
  },
  {
    id: "q14",
    part: "Part 4: Where You Are Now",
    question: "If you were to start, what is your rough monthly budget?",
    hint: "Choose one.",
    kind: "single",
    options: [
      { key: "A", label: "Below RM3,000" },
      { key: "B", label: "RM3,000 - RM5,000" },
      { key: "C", label: "RM5,000 - RM10,000" },
      { key: "D", label: "RM10,000 and above" },
      { key: "E", label: "No idea yet, I want to understand first" },
    ],
  },
  {
    id: "name",
    part: "Almost There",
    question: "What should we call you?",
    hint: "Your first name or nickname is enough.",
    kind: "text",
    placeholder: "Example: Danny, Kelly, Aaron",
  },
  {
    id: "whatsapp",
    part: "Last Step",
    question: "What is your WhatsApp number?",
    hint: "Your analysis will be sent here within 24 hours.",
    kind: "text",
    placeholder: "Example: 0123456789",
  },
];

const quizStepsZh: QuizStep[] = [
  {
    id: "q1",
    part: "第一部分：關於你",
    question: "你屬於哪個產業？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "餐飲／食品" },
      { key: "B", label: "零售／電商" },
      { key: "C", label: "美容／美髮／美甲" },
      { key: "D", label: "房地產／建築／裝修" },
      { key: "E", label: "教育／培訓" },
      { key: "F", label: "醫療／健康／養生" },
      { key: "G", label: "法律／會計／金融" },
      { key: "H", label: "汽車／摩托車" },
      { key: "I", label: "科技／軟體／IT 服務" },
      { key: "J", label: "其他", other: true },
    ],
  },
  {
    id: "q2",
    part: "第一部分：關於你",
    question: "你在這個產業做了多久？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "1-3 年" },
      { key: "B", label: "3-5 年" },
      { key: "C", label: "5-10 年" },
      { key: "D", label: "10 年以上" },
    ],
  },
  {
    id: "q3",
    part: "第一部分：關於你",
    question: "你的公司名稱和主要產品或服務是什麼？",
    hint: "簡短描述即可。",
    kind: "textarea",
    placeholder: "例如：我在吉隆坡經營一家做住宅與商業空間的裝修公司。",
  },
  {
    id: "q4",
    part: "第一部分：關於你",
    question: "你覺得客戶對你的第一印象是什麼？",
    hint: "最多選 3 項。",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "專業可靠" },
      { key: "B", label: "親切好聊" },
      { key: "C", label: "價格實惠" },
      { key: "D", label: "品質真的很好" },
      { key: "E", label: "經驗豐富、有口碑" },
      { key: "F", label: "創新、跟得上趨勢" },
      { key: "G", label: "真誠直接不繞彎" },
      { key: "H", label: "有個人魅力" },
    ],
  },
  {
    id: "q5",
    part: "第二部分：關於你的客戶",
    question: "你最想服務哪一種客戶？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "有預算但沒時間做功課的人" },
      { key: "B", label: "精打細算、追求高 CP 值的消費者" },
      { key: "C", label: "重視品質、願意為此多付一點的人" },
      { key: "D", label: "還不太懂、剛入門的新手" },
      { key: "E", label: "同產業的企業客戶" },
      { key: "F", label: "其他", other: true },
    ],
  },
  {
    id: "q6",
    part: "第二部分：關於你的客戶",
    question: "在找到你之前，客戶面臨最大的問題是什麼？",
    hint: "最多選 3 項。",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "不知道怎麼選，怕做錯決定" },
      { key: "B", label: "之前被坑過或被騙過" },
      { key: "C", label: "市場價格不透明" },
      { key: "D", label: "找不到值得信任的人" },
      { key: "E", label: "看不懂技術層面的東西" },
      { key: "F", label: "預算有限，怕白花錢" },
      { key: "G", label: "之前找過別人但不滿意" },
    ],
  },
  {
    id: "q7",
    part: "第二部分：關於你的客戶",
    question: "客戶通常為什麼選你，而不是別人？",
    hint: "最多選 2 項。",
    kind: "multi",
    max: 2,
    options: [
      { key: "A", label: "我的專業更強" },
      { key: "B", label: "我的價格更有競爭力" },
      { key: "C", label: "口碑好、常有人轉介紹" },
      { key: "D", label: "我真誠、不強迫推銷" },
      { key: "E", label: "我的服務更全面" },
      { key: "F", label: "我有成功案例和作品可以看" },
      { key: "G", label: "客戶跟我聊過一次就信任我" },
    ],
  },
  {
    id: "q8",
    part: "第三部分：關於短影音",
    question: "你目前有在經營社群媒體嗎？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "有，非常活躍，每週都發文" },
      { key: "B", label: "有，但很少更新" },
      { key: "C", label: "有帳號但幾乎沒在用" },
      { key: "D", label: "完全沒有" },
    ],
  },
  {
    id: "q8a",
    part: "第三部分：關於短影音",
    question: "你的社群媒體帳號是？",
    hint: "選填。",
    kind: "text",
    optional: true,
    placeholder: "例如：@yuyu_creative",
    condition: (answers) => {
      const social = String(answers.q8 || "");
      return Boolean(social) && !social.startsWith("D.");
    },
  },
  {
    id: "q9",
    part: "第三部分：關於短影音",
    question: "如果今天就要開拍，你最有信心聊哪個主題？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "我們產業裡的內行知識" },
      { key: "B", label: "客戶最常問的問題" },
      { key: "C", label: "我的創業歷程或個人故事" },
      { key: "D", label: "怎麼挑選對的產品或服務" },
      { key: "E", label: "關於我賣的東西的深度知識" },
      { key: "F", label: "還沒有想法" },
    ],
  },
  {
    id: "q10",
    part: "第三部分：關於短影音",
    question: "你最希望短影音幫你達成什麼？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "讓更多人認識我的品牌" },
      { key: "B", label: "建立我的專業形象" },
      { key: "C", label: "不再只靠廣告也能帶來客戶" },
      { key: "D", label: "跟現有客戶建立更深的信任" },
      { key: "E", label: "以上皆是" },
    ],
  },
  {
    id: "q11",
    part: "第四部分：你目前的狀態",
    question: "你的競爭對手或同行已經在做短影音了嗎？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "有，而且做得不錯" },
      { key: "B", label: "有，但內容看起來很普通" },
      { key: "C", label: "有幾個開始嘗試了" },
      { key: "D", label: "目前還沒看到" },
      { key: "E", label: "我不確定" },
    ],
  },
  {
    id: "q12",
    part: "第四部分：你目前的狀態",
    question: "你為什麼想開始做短影音？",
    hint: "最多選 3 項。",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "同行都在做，我不想落後" },
      { key: "B", label: "廣告越來越貴" },
      { key: "C", label: "我想建立個人品牌和形象" },
      { key: "D", label: "我想讓客戶主動找上門" },
      { key: "E", label: "我想累積內容資產，而不只是投廣告" },
      { key: "F", label: "朋友或客戶跟我說應該開始" },
      { key: "G", label: "我很好奇，想多了解" },
    ],
  },
  {
    id: "q13",
    part: "第四部分：你目前的狀態",
    question: "到現在為止，是什麼讓你一直沒有開始？",
    hint: "最多選 3 項。",
    kind: "multi",
    max: 3,
    options: [
      { key: "A", label: "不知道要做什麼內容" },
      { key: "B", label: "面對鏡頭不自在" },
      { key: "C", label: "沒時間拍攝和剪輯" },
      { key: "D", label: "找不到可靠的團隊" },
      { key: "E", label: "不確定短影音適不適合我的產業" },
      { key: "F", label: "感覺費用太高" },
      { key: "G", label: "之前試過但效果不好" },
      { key: "H", label: "我準備好了，正在找對的合作夥伴" },
    ],
  },
  {
    id: "q14",
    part: "第四部分：你目前的狀態",
    question: "如果要開始，你每個月的大概預算是多少？",
    hint: "請選一項。",
    kind: "single",
    options: [
      { key: "A", label: "RM3,000 以下" },
      { key: "B", label: "RM3,000 - RM5,000" },
      { key: "C", label: "RM5,000 - RM10,000" },
      { key: "D", label: "RM10,000 以上" },
      { key: "E", label: "還沒有概念，想先了解" },
    ],
  },
  {
    id: "name",
    part: "快完成了",
    question: "我們該怎麼稱呼你？",
    hint: "名字或暱稱即可。",
    kind: "text",
    placeholder: "例如：Danny、Kelly、Aaron",
  },
  {
    id: "whatsapp",
    part: "最後一步",
    question: "你的 WhatsApp 號碼是？",
    hint: "診斷結果會在 24 小時內傳送到這裡。",
    kind: "text",
    placeholder: "例如：0123456789",
  },
];

const quizCopy: Record<Locale, QuizCopy> = {
  en: {
    steps: quizStepsEn,
    intro: {
      logoAlt: "Yuyu Creative",
      titleWords: ["Free", "Brand"],
      titleHighlight: "Analysis",
      description: "Short-video strategy, tailored to your brand.",
      startAriaLabel: "Start the free analysis",
      orbRingText: "KNOW WHAT TO POST · SHORT-VIDEO STRATEGY ·",
      orbStart: "Start",
      meta: (
        <>
          <b>14</b> questions · <b>5</b> min · reply within <b>24h</b>
        </>
      ),
    },
    topbar: {
      questionOf: (position, total) => `Question ${position} of ${total}`,
      almostDone: "Almost done",
    },
    feedback: {
      typeItBelow: "Type it below",
      nice: "Nice!",
      updated: "Updated",
      limitReached: "Limit reached",
      picked: (count, max) => `${count}/${max} picked`,
      ready: "Ready",
    },
    limitMessage: (max) => `Pick up to ${max} — tap one to swap.`,
    otherAnswer: (value) => `Others: ${value}`,
    otherField: {
      label: (stepId) => (stepId === "q1" ? "Your industry" : "Your customer type"),
      placeholder: (stepId) => (stepId === "q1" ? "Example: Event planning" : "Example: Parents buying for kids"),
    },
    textFieldLabel: (stepId) => (stepId === "whatsapp" ? "Malaysian WhatsApp number" : "Your answer"),
    textareaLabel: "Business and offer",
    phoneError: "Please enter a valid Malaysian phone number, such as 0123456789 or 60123456789.",
    nav: {
      skip: "Skip",
      back: "Back",
      sending: "Sending…",
      submit: "Submit & claim offer",
      continue: "Continue",
    },
    success: {
      title: (name) => (name ? `Thank you, ${name}.` : "Thank you."),
      body: "Your answers are in. We’re preparing your tailored short-video analysis and will reach out on WhatsApp within 24 hours.",
      steps: ["Answers received", "Strategy reviewed", "WhatsApp follow-up"],
      cta: "Message us on WhatsApp",
    },
    whatsappFollowUpMessage: "Hi! I just submitted the claim offer form and would like to follow up.",
  },
  zh: {
    steps: quizStepsZh,
    intro: {
      logoAlt: "嶼嶼創意",
      titleWords: ["免費", "品牌"],
      titleHighlight: "診斷",
      description: "為你的品牌量身打造的短影音策略。",
      startAriaLabel: "開始免費品牌診斷",
      orbRingText: "知道該發什麼 · 短影音策略 ·",
      orbStart: "開始",
      meta: (
        <>
          <b>14</b> 個問題 · <b>5</b> 分鐘 · <b>24</b> 小時內回覆
        </>
      ),
    },
    topbar: {
      questionOf: (position, total) => `第 ${position} 題，共 ${total} 題`,
      almostDone: "即將完成",
    },
    feedback: {
      typeItBelow: "請在下方填寫",
      nice: "很好！",
      updated: "已更新",
      limitReached: "已達上限",
      picked: (count, max) => `已選 ${count}/${max}`,
      ready: "已填好",
    },
    limitMessage: (max) => `最多選 ${max} 項，點選已選的選項即可更換。`,
    otherAnswer: (value) => `其他：${value}`,
    otherField: {
      label: (stepId) => (stepId === "q1" ? "你的產業" : "你的客戶類型"),
      placeholder: (stepId) => (stepId === "q1" ? "例如：活動策劃" : "例如：幫孩子選購的家長"),
    },
    textFieldLabel: (stepId) => (stepId === "whatsapp" ? "馬來西亞 WhatsApp 號碼" : "你的回答"),
    textareaLabel: "公司與主要產品或服務",
    phoneError: "請輸入有效的馬來西亞手機號碼，例如 0123456789 或 60123456789。",
    nav: {
      skip: "略過",
      back: "上一題",
      sending: "傳送中…",
      submit: "送出並領取優惠",
      continue: "下一題",
    },
    success: {
      title: (name) => (name ? `${name}，謝謝你。` : "謝謝你。"),
      body: "我們已收到你的回答，正在為你準備專屬的短影音品牌診斷，會在 24 小時內透過 WhatsApp 與你聯繫。",
      steps: ["已收到回答", "策略分析中", "WhatsApp 跟進"],
      cta: "透過 WhatsApp 聯繫我們",
    },
    whatsappFollowUpMessage: "你好！我剛剛填寫了免費品牌診斷問卷，想進一步了解。",
  },
};

const payloadKeys = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q8a",
  "q9",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "name",
  "whatsapp",
];

function optionValue(option: QuizOption) {
  return `${option.key}. ${option.label}`;
}

function textAnswer(value: AnswerValue | undefined) {
  return typeof value === "string" ? value : "";
}

function listAnswer(value: AnswerValue | undefined) {
  return Array.isArray(value) ? value : [];
}

function formatAnswer(value: AnswerValue | undefined) {
  if (Array.isArray(value)) return value.join(" | ");
  return value || "";
}

function normalizeMalaysianPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  let normalized = digits;

  if (digits.startsWith("60")) normalized = digits;
  else if (digits.startsWith("0")) normalized = `6${digits}`;
  else if (digits.startsWith("1")) normalized = `60${digits}`;
  else return null;

  return /^601[0-9]{8,9}$/.test(normalized) ? normalized : null;
}

export default function FreeAnalysisQuiz({ locale = "en" }: { locale?: Locale }) {
  const copy = quizCopy[locale];
  const [started, setStarted] = useState(false);
  const [starting, setStarting] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [answerFeedback, setAnswerFeedback] = useState("");
  const [limitMessage, setLimitMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const questionWrapRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<number | null>(null);

  const steps = useMemo(
    () => copy.steps.filter((step) => !step.condition || step.condition(answers)),
    [answers, copy],
  );
  const currentStep = steps[stepIndex] || steps[steps.length - 1];
  const quizQuestionCount = steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").length;
  const activeQuizPosition = currentStep.id.startsWith("q") && currentStep.id !== "q8a"
    ? steps.filter((step) => step.id.startsWith("q") && step.id !== "q8a").findIndex((step) => step.id === currentStep.id) + 1
    : null;
  const progress = !started ? 0 : success ? 100 : Math.round(((stepIndex + 1) / steps.length) * 100);
  const selectedCount = currentStep?.kind === "multi" ? listAnswer(answers[currentStep.id]).length : 0;
  const canContinue = currentStep ? hasAnswer(currentStep) && !submitting : false;
  const isLastStep = stepIndex >= steps.length - 1;
  const partLabel = currentStep?.part ?? "";

  function clearAdvanceTimer() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function updateScrollHint() {
    const el = questionWrapRef.current;
    if (!el) {
      setShowScrollHint(false);
      return;
    }
    setShowScrollHint(el.scrollHeight - el.scrollTop - el.clientHeight > 6);
  }

  useEffect(() => {
    setAnswerFeedback("");
    clearAdvanceTimer();
    window.setTimeout(() => {
      questionWrapRef.current?.scrollTo({ top: 0 });
      updateScrollHint();
    }, 0);
    return clearAdvanceTimer;
  }, [currentStep?.id, started]);

  useEffect(() => {
    window.addEventListener("resize", updateScrollHint);
    return () => window.removeEventListener("resize", updateScrollHint);
  }, []);

  function hasAnswer(step: QuizStep) {
    if (step.optional) return true;
    if (step.kind === "multi") return listAnswer(answers[step.id]).length > 0;
    return textAnswer(answers[step.id]).trim().length > 0;
  }

  function scrollQuestionToBottom() {
    window.setTimeout(() => {
      const panel = questionWrapRef.current;
      panel?.scrollTo({ top: panel.scrollHeight, behavior: "smooth" });
      window.setTimeout(updateScrollHint, 360);
    }, 80);
  }

  function showAnswerFeedback(message: string) {
    setAnswerFeedback(message);
    scrollQuestionToBottom();
  }

  function chooseSingle(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    setLimitMessage("");
    setPhoneError("");
    clearAdvanceTimer();
    setAnswers((prev) => {
      const next = { ...prev, [step.id]: option.other ? "" : value };
      if (step.id === "q8" && value.startsWith("D.")) delete next.q8a;
      if (option.other) {
        next[`${step.id}Other`] = "";
        next[`${step.id}OtherActive`] = "true";
      } else {
        delete next[`${step.id}Other`];
        delete next[`${step.id}OtherActive`];
      }
      return next;
    });

    if (option.other) {
      showAnswerFeedback(copy.feedback.typeItBelow);
      return;
    }

    // Quizizz-style auto-advance: let the tap land, then glide to the next question.
    showAnswerFeedback(copy.feedback.nice);
    if (!isLastStep) {
      advanceTimer.current = window.setTimeout(() => {
        setStepIndex((index) => Math.min(index + 1, steps.length - 1));
      }, 480);
    }
  }

  function chooseMulti(step: QuizStep, option: QuizOption) {
    const value = optionValue(option);
    const max = step.max || 1;
    const selected = listAnswer(answers[step.id]);
    setPhoneError("");

    if (selected.includes(value)) {
      setLimitMessage("");
      setAnswers((prev) => ({
        ...prev,
        [step.id]: listAnswer(prev[step.id]).filter((item) => item !== value),
      }));
      showAnswerFeedback(copy.feedback.updated);
      return;
    }

    if (selected.length >= max) {
      setLimitMessage(copy.limitMessage(max));
      showAnswerFeedback(copy.feedback.limitReached);
      return;
    }

    setLimitMessage("");
    // Hard cap inside the updater so back-to-back taps can never exceed `max`.
    setAnswers((prev) => {
      const current = listAnswer(prev[step.id]);
      if (current.includes(value) || current.length >= max) return prev;
      return { ...prev, [step.id]: [...current, value] };
    });
    showAnswerFeedback(copy.feedback.picked(selected.length + 1, max));
  }

  function setText(step: QuizStep, value: string) {
    setPhoneError("");
    setAnswerFeedback(value.trim() ? copy.feedback.ready : "");
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  }

  function setOtherText(step: QuizStep, value: string) {
    setLimitMessage("");
    setPhoneError("");
    setAnswerFeedback(value.trim() ? copy.feedback.ready : copy.feedback.typeItBelow);
    setAnswers((prev) => ({
      ...prev,
      [`${step.id}Other`]: value,
      [`${step.id}OtherActive`]: "true",
      [step.id]: value.trim() ? copy.otherAnswer(value.trim()) : "",
    }));
  }

  function goNext() {
    if (!currentStep || !hasAnswer(currentStep)) return;
    setLimitMessage("");
    setPhoneError("");
    setAnswerFeedback("");
    clearAdvanceTimer();
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  }

  function goBack() {
    setLimitMessage("");
    setPhoneError("");
    setAnswerFeedback("");
    clearAdvanceTimer();
    setStepIndex((index) => Math.max(index - 1, 0));
  }

  async function submitQuiz() {
    if (!currentStep || !hasAnswer(currentStep)) return;

    const normalizedPhone = normalizeMalaysianPhone(textAnswer(answers.whatsapp));
    if (!normalizedPhone) {
      setPhoneError(copy.phoneError);
      return;
    }

    const payload = payloadKeys.reduce<Record<string, string>>((acc, key) => {
      acc[key] = key === "whatsapp" ? normalizedPhone : formatAnswer(answers[key]);
      return acc;
    }, {});
    payload.source = "yuyu-clone/claim-offer";
    payload.submittedAt = new Date().toISOString();
    if (locale !== "en") payload.locale = locale;

    setSubmitting(true);
    try {
      await fetch(N8N_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.warn("Quiz submission failed", error);
    } finally {
      setSubmitting(false);
      setSuccess(true);
    }
  }

  function onPrimaryAction() {
    if (!started) {
      if (starting) return;
      setStarting(true);
      window.setTimeout(() => {
        setStarted(true);
        setStarting(false);
      }, 560);
      return;
    }

    if (stepIndex >= steps.length - 1) {
      void submitQuiz();
      return;
    }

    goNext();
  }
  const selectedOther = currentStep?.options?.some(
    (option) => option.other && textAnswer(answers[`${currentStep.id}OtherActive`]) === "true",
  );
  const whatsAppHref = `https://api.whatsapp.com/send/?phone=${company.whatsapp}&text=${encodeURIComponent(
    copy.whatsappFollowUpMessage,
  )}`;

  return (
    <section className="qz-page">
      <div className="qz-ambient" aria-hidden="true">
        <span className="qz-blob b1" />
        <span className="qz-blob b2" />
        <span className="qz-blob b3" />
        <span className="qz-grid" />
      </div>

      <div className="qz-shell">
        <div
          className={`qz-panel${started && !success ? " is-playing" : ""}${success ? " is-done" : ""}`}
          id="analysis-quiz"
          aria-live="polite"
        >
          {/* ---------- Intro ---------- */}
          {!started && !success && (
            <div className={`qz-intro${starting ? " is-starting" : ""}`} key="intro">
              <span className="qz-fx blob1" aria-hidden="true" />
              <span className="qz-fx blob2" aria-hidden="true" />
              <span className="qz-fx blob3" aria-hidden="true" />
              <span className="qz-fx beam" aria-hidden="true" />

              <div className="qz-intro-inner">
                <img className="qz-intro-logo" src="/images/logo-black-horizontal.png" alt={copy.intro.logoAlt} />

                <h1 className="qz-intro-title">
                  {copy.intro.titleWords.map((w, i) => (
                    <span className="qz-word" style={{ ["--w" as string]: i }} key={w}>{w}</span>
                  ))}
                  <span className="qz-hl">
                    <span className="qz-word" style={{ ["--w" as string]: copy.intro.titleWords.length }}>{copy.intro.titleHighlight}</span>
                  </span>
                </h1>

                <p className="qz-intro-desc">{copy.intro.description}</p>

                <button
                  type="button"
                  className="qz-orb"
                  onClick={onPrimaryAction}
                  disabled={starting}
                  aria-label={copy.intro.startAriaLabel}
                >
                  <svg className="qz-orb-ring" viewBox="0 0 220 220" aria-hidden="true">
                    <defs>
                      <path id="qzCirclePath" d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
                    </defs>
                    <text textLength="527" lengthAdjust="spacing">
                      <textPath href="#qzCirclePath" startOffset="0">
                        {copy.intro.orbRingText}
                      </textPath>
                    </text>
                  </svg>
                  <span className="qz-orb-core">
                    <span className="qz-orb-label">{copy.intro.orbStart}</span>
                    <span className="qz-orb-arrow" aria-hidden="true"><ArrowIcon /></span>
                  </span>
                </button>

                <p className="qz-intro-meta">
                  {copy.intro.meta}
                </p>
              </div>
            </div>
          )}

          {/* ---------- Playing ---------- */}
          {started && !success && currentStep && (
            <>
              <div className="qz-topbar">
                <span className="qz-topbar-part">{partLabel}</span>
                <span className="qz-topbar-count">
                  {activeQuizPosition ? copy.topbar.questionOf(activeQuizPosition, quizQuestionCount) : copy.topbar.almostDone}
                </span>
              </div>
              <div className="qz-progress" aria-hidden="true">
                <span style={{ width: `${progress}%` }} />
              </div>

              <div className="qz-stage">
                <div className="qz-scrollwrap">
                <div className="qz-question" key={currentStep.id} ref={questionWrapRef} onScroll={updateScrollHint}>
                  <h2 className="qz-q-title">{currentStep.question}</h2>
                  <div className="qz-q-sub">
                    {currentStep.hint && <p className="qz-hint">{currentStep.hint}</p>}
                    {currentStep.kind === "multi" && (
                      <span className="qz-count-pill">
                        {selectedCount} / {currentStep.max}
                      </span>
                    )}
                  </div>

                  {(currentStep.kind === "single" || currentStep.kind === "multi") && currentStep.options && (
                    <div className={`qz-options${currentStep.options.length > 6 ? " is-dense" : ""}`}>
                      {currentStep.options.map((option, i) => {
                        const value = optionValue(option);
                        const selected = currentStep.kind === "multi"
                          ? listAnswer(answers[currentStep.id]).includes(value)
                          : option.other
                            ? textAnswer(answers[`${currentStep.id}OtherActive`]) === "true"
                            : textAnswer(answers[currentStep.id]) === value;

                        return (
                          <button
                            key={value}
                            type="button"
                            className={`qz-option${selected ? " selected" : ""}`}
                            style={{ ["--i" as string]: i }}
                            onClick={() => currentStep.kind === "multi" ? chooseMulti(currentStep, option) : chooseSingle(currentStep, option)}
                            aria-pressed={selected}
                          >
                            <span className="qz-option-badge" aria-hidden="true">{option.key}</span>
                            <strong className="qz-option-label">{option.label}</strong>
                            <span className="qz-option-tick" aria-hidden="true">✓</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {selectedOther && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-other`}>
                        {copy.otherField.label(currentStep.id)}
                      </label>
                      <input
                        id={`${currentStep.id}-other`}
                        className="qz-input"
                        type="text"
                        value={textAnswer(answers[`${currentStep.id}Other`])}
                        onChange={(event) => setOtherText(currentStep, event.target.value)}
                        placeholder={copy.otherField.placeholder(currentStep.id)}
                        autoFocus
                      />
                    </div>
                  )}

                  {currentStep.kind === "text" && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-field`}>
                        {copy.textFieldLabel(currentStep.id)}
                      </label>
                      <input
                        id={`${currentStep.id}-field`}
                        className="qz-input"
                        type={currentStep.id === "whatsapp" ? "tel" : "text"}
                        value={textAnswer(answers[currentStep.id])}
                        placeholder={currentStep.placeholder}
                        onChange={(event) => setText(currentStep, event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" && hasAnswer(currentStep)) {
                            isLastStep ? void submitQuiz() : goNext();
                          }
                        }}
                        autoFocus
                      />
                    </div>
                  )}

                  {currentStep.kind === "textarea" && (
                    <div className="qz-field">
                      <label className="qz-field-label" htmlFor={`${currentStep.id}-field`}>
                        {copy.textareaLabel}
                      </label>
                      <textarea
                        id={`${currentStep.id}-field`}
                        className="qz-textarea"
                        value={textAnswer(answers[currentStep.id])}
                        placeholder={currentStep.placeholder}
                        onChange={(event) => setText(currentStep, event.target.value)}
                      />
                    </div>
                  )}

                  {limitMessage && <p className="qz-error">{limitMessage}</p>}
                  {phoneError && <p className="qz-error">{phoneError}</p>}
                </div>
                  <div className={`qz-scrollfade${showScrollHint ? " is-visible" : ""}`} aria-hidden="true" />
                </div>

                <div className="qz-nav">
                  {currentStep.optional && !hasAnswerText(answers, currentStep) && (
                    <button type="button" className="qz-skip" onClick={goNext}>
                      {copy.nav.skip}
                    </button>
                  )}
                  <button type="button" className="qz-back" onClick={goBack} disabled={stepIndex === 0 || submitting}>
                    {copy.nav.back}
                  </button>
                  <button type="button" className="qz-cta qz-next" onClick={onPrimaryAction} disabled={!canContinue}>
                    {submitting ? copy.nav.sending : isLastStep ? copy.nav.submit : copy.nav.continue}
                    {!submitting && <ArrowIcon />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ---------- Success ---------- */}
          {success && (
            <div className="qz-success" key="success">
              <span className="qz-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <h2>{copy.success.title(textAnswer(answers.name))}</h2>
              <p>{copy.success.body}</p>
              <div className="qz-success-steps">
                <span className="is-done">{copy.success.steps[0]}</span>
                <span>{copy.success.steps[1]}</span>
                <span>{copy.success.steps[2]}</span>
              </div>
              <a href={whatsAppHref} className="qz-cta qz-success-cta" target="_blank" rel="noreferrer">
                {copy.success.cta}
                <WhatsAppIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function hasAnswerText(answers: Answers, step: QuizStep) {
  return textAnswer(answers[step.id]).trim().length > 0;
}
