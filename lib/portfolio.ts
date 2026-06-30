export type PortfolioCategory = {
  slug: string;
  label: string;
  shortLabel: string;
  intro: string;
  customerAngle: string;
};

export type PortfolioWork = {
  slug: string;
  title: string;
  client: string;
  categorySlug: string;
  metric: string;
  platform: string;
  blurb: string;
  thumbnail: string;
  reelUrl?: string;
  sample?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "automotive-retail",
    label: "Automotive Retail",
    shortLabel: "Automotive",
    intro:
      "Founder-led content for high-consideration products, showroom trust, and communities built around machines people care about.",
    customerAngle: "For dealers, workshops, vehicle brands, and specialist retail teams.",
  },
  {
    slug: "e-commerce",
    label: "E-Commerce",
    shortLabel: "E-Com",
    intro:
      "Retail and business insight formats that make products, offers, and founder expertise easier to remember and share.",
    customerAngle: "For online brands, product-led founders, and marketplace teams.",
  },
  {
    slug: "household-cleaning",
    label: "Household Cleaning",
    shortLabel: "Home",
    intro:
      "Useful everyday content that turns product demonstrations and cleaning expertise into repeatable audience trust.",
    customerAngle: "For home care, lifestyle, FMCG, and practical education brands.",
  },
  {
    slug: "pet-food",
    label: "Pet Food",
    shortLabel: "Pets",
    intro:
      "Warm, expert-led storytelling for pet brands that need credibility, personality, and product proof in the same scroll.",
    customerAngle: "For pet food, pet care, clinics, and pet community businesses.",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    shortLabel: "Healthcare",
    intro:
      "Professional content that keeps medical expertise approachable, careful, and clear without flattening the specialist's voice.",
    customerAngle: "For clinics, doctors, rehab teams, wellness experts, and medical groups.",
  },
];

export const portfolioWorks: PortfolioWork[] = [
  {
    slug: "boss-damon-motorcycle-industry-kol",
    title: "Motorcycle founder IP",
    client: "Boss Damon",
    categorySlug: "automotive-retail",
    metric: "447K followers",
    platform: "TikTok · IG · YT",
    blurb: "A charismatic founder presence shaped into a consistent motorcycle industry content engine.",
    thumbnail: "/images/case-2.jpg",
  },
  {
    slug: "automotive-showroom-proof-cut",
    title: "Showroom proof cut",
    client: "Automotive sample",
    categorySlug: "automotive-retail",
    metric: "Sample reel",
    platform: "IG Reels",
    blurb: "A product-led vertical cut designed to make high-ticket details feel tactile and easy to compare.",
    thumbnail: "/images/case-9.jpg",
    sample: true,
  },
  {
    slug: "automotive-founder-on-site",
    title: "On-site founder story",
    client: "Automotive sample",
    categorySlug: "automotive-retail",
    metric: "Sample reel",
    platform: "TikTok · IG",
    blurb: "A location-led format that puts the founder inside the customer decision journey.",
    thumbnail: "/images/case-10.jpg",
    sample: true,
  },
  {
    slug: "sharonpengtw-top-retail-business-insight-creator",
    title: "Retail insight creator",
    client: "@sharonpengtw",
    categorySlug: "e-commerce",
    metric: "297K followers",
    platform: "IG · TikTok",
    blurb: "Retail and business insight content shaped for repeatable authority and practical audience value.",
    thumbnail: "/images/case-5.jpg",
  },
  {
    slug: "ecommerce-product-hook-test",
    title: "Product hook test",
    client: "E-commerce sample",
    categorySlug: "e-commerce",
    metric: "Sample reel",
    platform: "IG Reels",
    blurb: "A fast product-entry structure for brands that need viewers to understand the offer quickly.",
    thumbnail: "/images/case-13.jpg",
    sample: true,
  },
  {
    slug: "ecommerce-founder-offer-cut",
    title: "Founder offer cut",
    client: "E-commerce sample",
    categorySlug: "e-commerce",
    metric: "Sample reel",
    platform: "TikTok · IG",
    blurb: "A founder-led sales angle with clear value framing, built for short-form testing.",
    thumbnail: "/images/case-14.jpg",
    sample: true,
  },
  {
    slug: "household-cleaning-expert",
    title: "Household cleaning expert",
    client: "CleanClean Taiwan",
    categorySlug: "household-cleaning",
    metric: "155K followers",
    platform: "TikTok · FB",
    blurb: "Practical cleaning expertise transformed into simple, repeatable, high-retention short videos.",
    thumbnail: "/images/case-3.jpg",
  },
  {
    slug: "home-practical-demo-cut",
    title: "Practical demo cut",
    client: "Home sample",
    categorySlug: "household-cleaning",
    metric: "Sample reel",
    platform: "IG Reels",
    blurb: "A demonstration-first format for showing before-after logic without overexplaining.",
    thumbnail: "/images/case-11.jpg",
    sample: true,
  },
  {
    slug: "home-routine-storyline",
    title: "Routine storyline",
    client: "Home sample",
    categorySlug: "household-cleaning",
    metric: "Sample reel",
    platform: "TikTok · FB",
    blurb: "A light narrative structure that turns everyday household problems into saved content.",
    thumbnail: "/images/case-12.jpg",
    sample: true,
  },
  {
    slug: "dogcat-boss-nohair-pet-food-industry-leader",
    title: "Pet food industry leader",
    client: "DogCatStar",
    categorySlug: "pet-food",
    metric: "146K followers",
    platform: "IG · YT",
    blurb: "Pet care expertise, founder personality, and product trust combined into community-friendly content.",
    thumbnail: "/images/case-4.jpg",
  },
  {
    slug: "pet-community-trust-cut",
    title: "Community trust cut",
    client: "Pet sample",
    categorySlug: "pet-food",
    metric: "Sample reel",
    platform: "IG Reels",
    blurb: "A warm education angle built for brands where care, credibility, and repetition matter.",
    thumbnail: "/images/case-15.jpg",
    sample: true,
  },
  {
    slug: "pet-product-education-cut",
    title: "Product education cut",
    client: "Pet sample",
    categorySlug: "pet-food",
    metric: "Sample reel",
    platform: "TikTok · IG",
    blurb: "A concise expert-led format for explaining pet product value without sounding like a hard sell.",
    thumbnail: "/images/case-8.jpg",
    sample: true,
  },
  {
    slug: "rehabilitation-drliang-approachable-specialist",
    title: "Approachable specialist",
    client: "Dr. Liang",
    categorySlug: "healthcare",
    metric: "132K followers",
    platform: "IG · TikTok",
    blurb: "Rehabilitation expertise made clear, human, and approachable for people who need confidence before booking.",
    thumbnail: "/images/case-6.jpg",
  },
  {
    slug: "healthcare-clinic-authority-cut",
    title: "Clinic authority cut",
    client: "Healthcare sample",
    categorySlug: "healthcare",
    metric: "Sample reel",
    platform: "IG Reels",
    blurb: "A specialist-led explainer format that keeps trust and clarity ahead of visual noise.",
    thumbnail: "/images/case-7.jpg",
    sample: true,
  },
  {
    slug: "healthcare-patient-question-cut",
    title: "Patient question cut",
    client: "Healthcare sample",
    categorySlug: "healthcare",
    metric: "Sample reel",
    platform: "TikTok · IG",
    blurb: "A Q&A structure that turns common patient uncertainty into confident next steps.",
    thumbnail: "/images/avatar-icon.jpeg",
    sample: true,
  },
];

export function getPortfolioCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export function getPortfolioWorksByCategory(slug: string) {
  return portfolioWorks.filter((work) => work.categorySlug === slug);
}

export function getPortfolioCategoryCount(slug: string) {
  return getPortfolioWorksByCategory(slug).length;
}

export function getPortfolioCategoryPath(slug: string) {
  return `/our-portfolio/${slug}`;
}
