// Centralized site content scraped from yuyu-creative.com.my

export const company = {
  name: "Yuyu Creative",
  legalName: "YUYU CREATIVE SDN. BHD.",
  registration: "202501044828 (1646236K)",
  tagline: "A Strategic Short Video Partner for Clients and Professionals",
  email: "yuyu@yuyu-creative.my",
  phoneOffice: "+60 3 2181 4325",
  phoneMobile: "+60 12-323 9068",
  whatsapp: "60123239068",
  address: "E-9-4, Block E, Megan Avenue 1, 189 Jalan Tun Razak, 50400 Kuala Lumpur",
  intro:
    "Yuyu Creative Malaysia is a short video and personal branding company focused on real business results. We help clients, professionals, and brands use short video content to build trust, show expertise, and attract the right clients.",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/60123239068",
  },
};

export const whatsappUrl = (message?: string) =>
  message ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}` : company.social.whatsapp;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About YuYu", href: "/about-yuyu" },
  {
    label: "Services",
    href: "/short-video-services",
    children: [
      {
        label: "Short Video Services",
        href: "/short-video-services",
        desc: "Strategy, filming, editing and distribution in one cycle.",
      },
      {
        label: "Video Production",
        href: "/video-production",
        desc: "Studio and on-site short-form video, built for every platform.",
      },
      {
        label: "IP Building",
        href: "/ip-building",
        desc: "Turn clients into recognisable personal brands.",
      },
      {
        label: "Ads Boosting",
        href: "/ads-boosting",
        desc: "Amplify your best videos with paid social that performs.",
      },
    ],
  },
  { label: "Portfolio", href: "/our-portfolio" },
  { label: "Pricing Plan", href: "/pricing-plan" },
  { label: "Blog", href: "/marketing-insight" },
  { label: "Contact", href: "/contact" },
];

export const uiEn = {
  freeAnalysis: "Get Free Analysis",
  contactUs: "Contact Us",
  getInTouch: "Get In Touch",
  toggle: "中文",
  quickLinks: "Quick Links",
  contacts: "Contacts",
  readMore: "Read More",
};

export const stats = [
  { value: "8B+", label: "Total views across platforms" },
  { value: "400M+", label: "Highest total views in one month" },
  { value: "500+", label: "Videos exceeding 100K views" },
  { value: "100+", label: "Clients served" },
];

export const aboutStats = [
  { value: "96%", label: "Client Renewal Rate" },
  { value: "500+", label: "Videos Exceeding 100K Views" },
  { value: "100+", label: "Clients Served" },
];

export const clients = [
  { name: "RhinoShield", img: "/images/client-rhinoshield.png" },
  { name: "Deli Vegetarian", img: "/images/client-deli.png" },
  { name: "ICON", img: "/images/client-icon.jpg" },
  { name: "Sun Merry", img: "/images/client-sunmerry.jpg" },
  { name: "Super Numbers", img: "/images/client-supernumbers.png" },
  { name: "Juwei", img: "/images/client-juwei.png" },
  { name: "BuBu Kids Shoes", img: "/images/client-bubu.jpg" },
  { name: "Hugs Clinic", img: "/images/client-clinic.png" },
];

export const testimonials = [
  {
    name: "RhinoShield Taiwan",
    img: "/images/client-rhinoshield.png",
    quote:
      "From the first discussion to final production, the Yuyu Creative team demonstrated exceptional professionalism and patience, making the entire collaboration reassuring and smooth!",
  },
  {
    name: "Sharon Peng",
    meta: "297K followers",
    img: "/images/avatar-sharon.jpg",
    quote:
      "Yuyu Creative is highly professional and attentive, helping business owners present their most engaging side to audiences.",
  },
  {
    name: "CleanClean Taiwan",
    meta: "155K followers",
    img: "/images/client-deli.png",
    quote:
      "The most dedicated and professional Yuyu Creative is the best ally, strategist, and leader.",
  },
  {
    name: "DogCatStar",
    meta: "146K followers",
    img: "/images/avatar-channels.jpg",
    quote:
      "The Yuyu Creative team is professional and soulful. Working together feels as seamless as having your own in-house team.",
  },
  {
    name: "Lin Pei-Yao",
    img: "/images/avatar-linpeiyao.jpg",
    quote:
      "Their editing is humorous with great rhythm, and they're excellent at capturing key points.",
  },
  {
    name: "ICON",
    meta: "Healthcare",
    img: "/images/avatar-icon.jpeg",
    quote:
      "Assists in developing diverse short-form video themes for brands with high overall cooperation.",
  },
  {
    name: "MJ Lin",
    meta: "Finance Content",
    img: "/images/avatar-mj.jpg",
    quote:
      "Good financial thinking should be part of daily life! Yuyu Creative transforms practical scenarios into entertaining yet valuable short videos.",
  },
  {
    name: "Dr. Gu",
    meta: "Dr. Bird Science",
    img: "/images/avatar-drgu.jpg",
    quote:
      "Yuyu Creative empowers brands with unlimited creativity and accelerates viral momentum.",
  },
  {
    name: "Musingxer",
    img: "/images/avatar-musingxer.jpg",
    quote: "Editing is very rhythmic! Not rigid, but full of soul!",
  },
  {
    name: "Mei Kao",
    img: "/images/avatar-mei.jpg",
    quote:
      "They don't just make videos for you — they transform 'invisible value' into short-form content that converts!",
  },
  {
    name: "inmywordz",
    meta: "冒牌生",
    img: "/images/avatar-inmywordz.jpg",
    quote:
      "The video editing quality is excellent, communication is smooth, and they provide summary recommendations after each edit.",
  },
  {
    name: "LitoMon",
    meta: "怪獸部落",
    img: "/images/avatar-litomon.png",
    quote:
      "After working with Yuyu Creative, we were able to master the key points of shooting interactions, effectively improving natural presence.",
  },
];

export const portfolio = [
  {
    slug: "boss-damon-motorcycle-industry-kol",
    name: "Boss Damon",
    category: "Automotive Retail",
    followers: "447K",
    metric: "447K",
    platform: "TikTok · IG · YT",
    blurb: "Motorcycle industry KOL",
    img: "/images/case-2.jpg",
  },
  {
    slug: "sharonpengtw-top-retail-business-insight-creator",
    name: "@sharonpengtw",
    category: "E-Commerce",
    followers: "297K",
    metric: "297K",
    platform: "IG · TikTok",
    blurb: "Retail & business insight creator",
    img: "/images/case-5.jpg",
  },
  {
    slug: "household-cleaning-expert",
    name: "CleanClean Taiwan",
    category: "Household Cleaning",
    followers: "155K",
    metric: "155K",
    platform: "TikTok · FB",
    blurb: "Household cleaning expert",
    img: "/images/case-3.jpg",
  },
  {
    slug: "dogcat-boss-nohair-pet-food-industry-leader",
    name: "DogCatStar",
    category: "Pet Food",
    followers: "146K",
    metric: "146K",
    platform: "IG · YT",
    blurb: "Pet food industry leader",
    img: "/images/case-4.jpg",
  },
  {
    slug: "rehabilitation_drliang-the-most-approachable-rehabilitation-specialist",
    name: "Dr. Liang",
    category: "Healthcare",
    followers: "132K",
    metric: "132K",
    platform: "IG · TikTok",
    blurb: "Approachable rehabilitation specialist",
    img: "/images/case-6.jpg",
  },
];

// Platforms content is distributed to (from FAQ)
export const platforms = ["TikTok", "Instagram", "YouTube", "Facebook", "小红书 RED"];

// Behind-the-scenes / studio imagery (reuses real production stills)
export const bts = [
  "/images/case-7.jpg",
  "/images/case-8.jpg",
  "/images/case-9.jpg",
  "/images/case-10.jpg",
  "/images/case-11.jpg",
  "/images/case-12.jpg",
];

// Pool of vertical reels for the video wall (real production stills)
export const wallReels = [
  { img: "/images/case-2.jpg", tag: "447K" },
  { img: "/images/case-5.jpg", tag: "297K" },
  { img: "/images/case-3.jpg", tag: "155K" },
  { img: "/images/case-9.jpg", tag: "Studio" },
  { img: "/images/case-4.jpg", tag: "146K" },
  { img: "/images/case-6.jpg", tag: "132K" },
  { img: "/images/case-7.jpg", tag: "On-site" },
  { img: "/images/case-10.jpg", tag: "Viral" },
  { img: "/images/case-8.jpg", tag: "On-site" },
  { img: "/images/case-11.jpg", tag: "Brand" },
  { img: "/images/case-12.jpg", tag: "Reels" },
  { img: "/images/case-13.jpg", tag: "Studio" },
  { img: "/images/case-14.jpg", tag: "Founder" },
  { img: "/images/case-15.jpg", tag: "Viral" },
];

export const ribbonItems = [
  "8 Billion+ Views",
  "100+ Clients",
  "96% Renewal Rate",
  "500+ Viral Videos",
  "5 Platforms",
  "Strategy First",
];

export const promise = {
  eyebrow: "Why short video",
  heading: "You're the expert. But expertise nobody sees can't build trust.",
  body: "Your future clients are scrolling right now — deciding in seconds who to trust. We turn your knowledge into short videos that earn attention, prove your authority, and bring the right people to you. Strategy first, trends never.",
};

// Two core packages (Personal + Enterprise). The limited offer above sits
// separately with its own styling; these two share a layout with a slight
// per-variant accent difference.
// Three pricing plans shown side by side and compared feature-by-feature.
// `original` + `timer` drive the limited-offer styling on the starter plan.
export const plans = [
  {
    variant: "starter",
    badge: "Limited offer",
    save: "Save 47%",
    tag: "Try it once",
    name: "Starter Shoot",
    price: "RM 999",
    original: "RM 1,888",
    cadence: "one-time · 3 videos",
    blurb: "Experience the full process once — with no monthly commitment.",
    cta: { label: "Claim offer", href: "/freeanalysis" },
    timer: true,
  },
  {
    variant: "personal",
    featured: true,
    tag: "For individuals",
    name: "Personal Brand",
    price: "RM 5,000",
    cadence: "per month · 10 videos",
    blurb: "Stay consistent every month — we run the whole cycle for you.",
    cta: {
      label: "Start this plan",
      href: whatsappUrl(
        "Hi Yuyu Creative, I'm interested in the Personal Brand plan (RM 5,000 per month / 10 videos). Can you share the next steps?"
      ),
    },
  },
  {
    variant: "enterprise",
    tag: "For companies",
    name: "Corporate Production",
    price: "Custom",
    cadence: "scoped to your brief",
    blurb: "A bespoke production scoped around your campaign and team.",
    cta: {
      label: "Request a quote",
      href: whatsappUrl("Hi Yuyu Creative, I'd like to request a quote for Corporate Production. Here is my brief:"),
    },
  },
];

// Concise comparison across [Starter, Personal, Enterprise] — true = included.
export const planFeatures = [
  { label: "Strategy, scripts & guided filming", has: [true, true, true] },
  { label: "Retention-led editing", has: [true, true, true] },
  { label: "Published across all platforms", has: [true, true, true] },
  { label: "Choose your own content mix", has: [false, true, true] },
  { label: "Monthly performance report", has: [false, true, true] },
  { label: "Multi-location & dedicated team", has: [false, false, true] },
];

// Add-ons that stack onto any plan above.
export const addOns = [
  {
    title: "Caption copywriting",
    desc: "Platform-tuned captions with the right hooks and CTAs.",
  },
  {
    title: "Posting & scheduling",
    desc: "We publish on a planned schedule across your platforms.",
  },
  {
    title: "Analytics report",
    desc: "A monthly read on views, retention, and what to do next.",
  },
];

export const process = [
  {
    step: "01",
    shortTitle: "Identity",
    brief: "Audience, angle & direction",
    title: "Lock your identity & direction",
    desc: "We study your brand, audience, and goals, then set a clear on-screen identity and channel direction that draws the right people in.",
    img: "/images/process-01-discovery.webp",
  },
  {
    step: "02",
    shortTitle: "Strategy",
    brief: "Pillars and scripts",
    title: "Plan the strategy & scripts",
    desc: "That direction becomes content pillars and scripts built around your business — watchable, shareable, and never generic templates.",
    img: "/images/process-03-planning.webp",
  },
  {
    step: "03",
    shortTitle: "Filming",
    brief: "Coached on camera",
    title: "Film with on-camera coaching",
    desc: "We direct the shoot so it feels natural, not stiff — polished footage that still sounds and looks unmistakably like you.",
    img: "/images/process-04-filming.webp",
  },
  {
    step: "04",
    shortTitle: "Editing",
    brief: "Cut for retention",
    title: "Edit for retention",
    desc: "We cut for attention: tight pacing, strong hooks, and platform-ready captions that hold viewers to the final second.",
    img: "/images/process-05-editing.webp",
  },
  {
    step: "05",
    shortTitle: "Performance",
    brief: "Track and improve",
    title: "Track, learn & improve",
    desc: "Once live, we read the numbers and hand you clear recommendations each month so every batch outperforms the last.",
    img: "/images/process-06-publishing.webp",
  },
];

export const strengths = [
  { title: "Expertise-driven content", desc: "We transform professional knowledge into accessible, scroll-stopping narratives." },
  { title: "The right audience", desc: "We target viewers aligned with your real business objectives — not vanity reach." },
  { title: "Strategy, not trends", desc: "We integrate business thinking with short video principles from day one." },
  { title: "Built around you", desc: "Personalized content plans that reflect your strengths, voice, and pace." },
  { title: "Editing with intent", desc: "Precise cuts and rhythm engineered to hold attention to the last second." },
  { title: "Cross-industry proof", desc: "Experience across medical, coaching, finance, retail, and leadership." },
];

export const teamMalaysia = [
  { name: "Danis Guok", role: "Project Manager", initials: "DG" },
  { name: "Chee Yian", role: "Executive Assistant", initials: "CY" },
  { name: "Yi Ni", role: "Video Editor", initials: "YN" },
  { name: "Ke Xin", role: "Video Editor", initials: "KX" },
];

export const teamTaiwan = [
  { name: "Damon Lin", role: "CEO", initials: "DL", note: "Founder with 447,000 combined digital following", badge: "447K following" },
  { name: "Leo", role: "COO", initials: "L", note: "Former Gogoro and Tesla Taiwan senior manager", badge: "ex-Tesla · Gogoro" },
  { name: "范君達", role: "CCO", initials: "范", note: "Former Ogilvy and Leo Burnett strategy director", badge: "ex-Ogilvy · Leo Burnett" },
];

export const blog = [
  {
    title: "Facebook Marketing in Malaysia: A 2026 Playbook (With Reels & Video Strategy)",
    date: "June 15, 2026",
    category: "Social Media",
    img: "/images/blog-facebook.jpg",
    href: "/marketing-insight/facebook-marketing-malaysia",
    excerpt:
      "A practical 2026 playbook for Facebook marketing in Malaysia — how to combine Reels, video, and paid strategy to reach the right audience.",
  },
  {
    title: "Video Production in Malaysia: Choosing the Right Company for Brand & Short-Form Content (2026)",
    date: "June 11, 2026",
    category: "Video Production & Marketing",
    img: "/images/blog-video.jpg",
    href: "/marketing-insight/video-production-malaysia",
    excerpt:
      "What to look for when choosing a video production company in Malaysia for brand and short-form content in 2026.",
  },
  {
    title: "TikTok Agency in Malaysia: A Brand's Guide to TikTok Marketing in 2026",
    date: "June 5, 2026",
    category: "Social Media",
    img: "/images/blog-tiktok.jpg",
    href: "/marketing-insight/tiktok-agency-malaysia",
    excerpt:
      "A brand's guide to working with a TikTok agency in Malaysia and building a TikTok marketing strategy that performs.",
  },
  {
    title: "Social Media Management Pricing in Malaysia: 2026 Packages & Cost Guide",
    date: "May 25, 2026",
    category: "Social Media",
    img: "/images/blog-pricing.jpg",
    href: "/marketing-insight/social-media-management-pricing-malaysia",
    excerpt:
      "A transparent look at social media management pricing in Malaysia — typical packages, costs, and what you should expect.",
  },
  {
    title: "Social Media Marketing in Malaysia: A Strategic Guide for Brands in 2026",
    date: "May 22, 2026",
    category: "Social Media",
    img: "/images/blog-smm-strategy.jpg",
    href: "/marketing-insight/social-media-marketing-malaysia-strategy-guide",
    excerpt:
      "A strategic guide to social media marketing in Malaysia for brands that want sustainable growth in 2026.",
  },
  {
    title: "How to Choose a Social Media Agency in Malaysia: A 2026 Buyer's Guide",
    date: "May 22, 2026",
    category: "Social Media",
    img: "/images/blog-choose-agency.jpg",
    href: "/marketing-insight/how-to-choose-social-media-agency-malaysia",
    excerpt:
      "A buyer's guide to choosing the right social media agency in Malaysia — the questions to ask and red flags to avoid.",
  },
];

export const faqs = [
  {
    group: "Getting Started & Commitment",
    items: [
      {
        q: "What types of clients do you work with?",
        a: "We partner with clients, business owners, professionals, and brands that want content built on trust and expertise.",
      },
      {
        q: "How do we start working together for the first time?",
        a: "We begin with a discovery call to understand your goals and brand direction, then launch the first content period covering positioning, scripting, filming, and editing.",
      },
      {
        q: "How many periods do we sign for the first contract?",
        a: "Clients commit to a 3-period contract. One period lasts approximately one month, as short video requires time to establish identity and gain traction.",
      },
      {
        q: "Can I pause or change my package after the first 3 periods?",
        a: "Yes. After the initial 3 periods, clients have full flexibility to renew, pause, or adjust based on their goals.",
      },
    ],
  },
  {
    group: "Process & Content Creation",
    items: [
      {
        q: "How long does the production process take?",
        a: "One full content cycle takes about one month, including planning, scripting, filming, editing, publishing, and performance review.",
      },
      {
        q: "Can I request additional videos or custom formats?",
        a: "Yes. Add-on content packages and custom deliverables are available based on your goals.",
      },
      {
        q: "Do you write the scripts?",
        a: "Yes. Our team prepares content plans and scripts based on your industry, audience, and business goals.",
      },
      {
        q: "Do you guide me during filming?",
        a: "Yes. We provide on-camera guidance for natural delivery, confidence, and clarity.",
      },
      {
        q: "What if I have no filming experience?",
        a: "Most clients start with no experience. Our process is designed to make you comfortable, with guidance on delivery and pacing.",
      },
      {
        q: "Can I choose between studio filming and on-site filming?",
        a: "Yes, both options are available. Studio filming is more polished and authority-driven, while on-site feels more natural and personable.",
      },
    ],
  },
  {
    group: "Strategy, Distribution & Results",
    items: [
      {
        q: "Can you help me define my personal or brand identity?",
        a: "Yes. Identity positioning is included in every package to ensure proper messaging.",
      },
      {
        q: "How do you ensure the videos match my industry?",
        a: "We research your field, target audience, and content expectations to ensure relevance and professionalism.",
      },
      {
        q: "Do you handle distribution across all platforms?",
        a: "Yes. Videos are published on TikTok, Instagram, YouTube, Facebook, and Xiaohongshu (Rednote).",
      },
      {
        q: "Do you provide performance reports?",
        a: "Yes. Every package includes a results report with insights and recommendations.",
      },
    ],
  },
  {
    group: "Pricing & Traffic Fee",
    items: [
      {
        q: "Why is there a traffic fee for the On-Site Short Video Production Package?",
        a: "The performance-based traffic fee during the first 3 periods aims to help you achieve the best possible results. Clients only pay when content reaches performance benchmarks, aligning incentives.",
      },
      {
        q: "How do you calculate the traffic fee?",
        a: "We combine total views across all five platforms for a complete and fair measurement of your overall reach.",
      },
      {
        q: "Do I still pay traffic fees after the initial 3 periods?",
        a: "No. From the fourth period onward, only the standard package fee applies.",
      },
    ],
  },
];
