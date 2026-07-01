// Content + theming for the SEO-focused service landing pages.
// Each page shares one layout (components/ServiceLanding.tsx) but carries its
// own warm accent so the site moves away from an all-blue palette.

export type ServicePlatform = {
  key: string;
  name: string;
  icon: string;
  blurb: string;
};

export type ServiceAnswer = {
  q: string;
  a: string;
};

export type ServicePageConfig = {
  slug: string;
  accent: string;
  accentSoft: string;
  accentDeep: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
  heroImg: string;
  heroAlt: string;
  heroFrames: { img: string; label: string }[];
  stats: { value: string; label: string }[];
  intro: { heading: string; body: string[] };
  proof: { label: string; title: string; desc: string }[];
  offeringsHeading: string;
  offeringsSub: string;
  offerings: { title: string; desc: string }[];
  processHeading: string;
  processLead: string;
  process: { step: string; title: string; desc: string }[];
  platformsHeading: string;
  platformsLead: string;
  platforms: ServicePlatform[];
  answersHeading: string;
  answers: ServiceAnswer[];
  related: { label: string; href: string; blurb: string }[];
  ctaTitle: string;
  ctaSub: string;
  schemaType: string;
  keywords: string[];
};

// Shared platform set — brand icons keep their own colours for recognisability.
const ic = (slug: string, hex: string) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const tiktok = (blurb: string): ServicePlatform => ({ key: "tiktok", name: "TikTok", icon: ic("tiktok", "111111"), blurb });
const instagram = (blurb: string): ServicePlatform => ({ key: "instagram", name: "Instagram", icon: ic("instagram", "E4405F"), blurb });
const facebook = (blurb: string): ServicePlatform => ({ key: "facebook", name: "Facebook", icon: ic("facebook", "1877F2"), blurb });
const youtube = (blurb: string): ServicePlatform => ({ key: "youtube", name: "YouTube", icon: ic("youtube", "FF0000"), blurb });
const xhs = (blurb: string): ServicePlatform => ({ key: "xhs", name: "小红书 · RED", icon: ic("xiaohongshu", "FF2442"), blurb });

export const servicePages: Record<string, ServicePageConfig> = {
  "short-video-services": {
    slug: "short-video-services",
    accent: "#2f6bff",
    accentSoft: "#eef4ff",
    accentDeep: "#10307e",
    metaTitle: "Short Video Services | Yuyu Creative Malaysia",
    metaDescription:
      "Short video services in Malaysia for clients and brands: strategy, scripting, filming, editing, distribution, analytics, and platform-native content across TikTok, Instagram, YouTube, Facebook, and RED.",
    eyebrow: "Short video services",
    title: "Short Video Services",
    subtitle: "A content atelier for brands that need attention to become trust.",
    lead: "We turn expertise into a complete short-form video system: positioning, content pillars, scripts, guided filming, retention-led editing, publishing support, and monthly performance learning. The result is not random posting. It is a repeatable content engine built for TikTok, Instagram Reels, YouTube Shorts, Facebook Reels, and Xiaohongshu RED.",
    heroImg: "/images/generated-hero-studio.png",
    heroAlt: "Yuyu Creative studio setup for short video services in Malaysia",
    heroFrames: [
      { img: "/images/process-03-planning.png", label: "Strategy" },
      { img: "/images/process-04-filming.png", label: "Filming" },
      { img: "/images/process-05-editing.png", label: "Editing" },
    ],
    stats: [
      { value: "8B+", label: "Views produced across platforms" },
      { value: "5,000+", label: "Videos over 100K views" },
      { value: "5", label: "Distribution platforms" },
    ],
    intro: {
      heading: "One service page, one clear promise: consistent short videos that build demand.",
      body: [
        "Short-form content works when the whole cycle is connected. A strong idea needs a clean hook, a natural delivery, a sharp edit, a platform-native caption, and a review loop that turns every post into learning.",
        "Our short video services are designed for Malaysian clients, professionals, clinics, education brands, retailers, property teams, and service businesses that need more than isolated videos. We build the system behind the videos so your audience can keep meeting the same clear point of view, again and again.",
      ],
    },
    proof: [
      { label: "Positioning", title: "Before the camera", desc: "We define the audience, promise, content pillars, and speaking angles so every script has a job." },
      { label: "Production", title: "During the shoot", desc: "We guide delivery, pace, posture, and story beats so expertise feels warm instead of scripted." },
      { label: "Distribution", title: "After the edit", desc: "We prepare platform-native versions and read the data so the next cycle starts smarter." },
    ],
    offeringsHeading: "What is included",
    offeringsSub: "The service is built as a monthly production rhythm, not a one-off video order.",
    offerings: [
      { title: "Content strategy", desc: "Audience mapping, positioning, content pillars, campaign angles, and a repeatable monthly direction." },
      { title: "Scriptwriting", desc: "Short, structured scripts with clear hooks, proof points, transitions, and calls to action." },
      { title: "Guided filming", desc: "Studio or on-site filming with coaching so you can speak naturally without losing clarity." },
      { title: "Short-form editing", desc: "Retention-first cuts, captions, rhythm, covers, and visual pacing shaped for mobile attention." },
      { title: "Distribution support", desc: "Platform-native exports and posting direction for TikTok, Instagram, YouTube, Facebook, and RED." },
      { title: "Monthly learning", desc: "Performance review and next-cycle recommendations based on views, retention, saves, comments, and leads." },
    ],
    processHeading: "The Monthly Cycle",
    processLead: "Each period moves like a small editorial studio: strategy, scripting, filming, editing, publishing, and learning.",
    process: [
      { step: "01", title: "Find the angle", desc: "We study your offer, audience questions, objections, and proof so the channel has a clear voice." },
      { step: "02", title: "Write the batch", desc: "Scripts are grouped into content pillars: authority, education, trust-building, conversion, and timely topics." },
      { step: "03", title: "Film with direction", desc: "You get guided delivery, scene structure, pacing, and on-camera coaching throughout the shoot." },
      { step: "04", title: "Edit for retention", desc: "We cut out drag, add captions, shape rhythm, and package each video for the right platform." },
      { step: "05", title: "Learn and sharpen", desc: "The cycle ends with performance notes so the next batch is more precise than the last." },
    ],
    platformsHeading: "Every platform gets its own version.",
    platformsLead:
      "A short video may begin as one idea, but it should not travel as one identical file. We adapt framing, caption style, hook strength, and search terms to match each platform.",
    platforms: [
      tiktok("Fast discovery, hook-led pacing, creator-native delivery, and trend-aware formats without losing brand discipline."),
      instagram("Reels, covers, captions, and profile flow that make your brand feel active, polished, and easy to revisit."),
      youtube("Shorts for discovery plus search-friendly titles that can feed a deeper YouTube authority library."),
      facebook("Reels and community posts for audiences who respond to trust, referrals, comments, and local proof."),
      xhs("Search-led RED notes with Chinese-language angles, useful covers, and credibility cues for research-heavy buyers."),
    ],
    answersHeading: "What clients ask before starting",
    answers: [
      {
        q: "What are short video services?",
        a: "Short video services combine strategy, scripting, filming, editing, publishing support, and performance review so a brand can produce consistent vertical videos for social platforms.",
      },
      {
        q: "Who is this service best for?",
        a: "It is best for clients, professionals, service businesses, clinics, education brands, retailers, and companies that need trust-building content every month.",
      },
      {
        q: "Do you only create videos, or do you plan the content too?",
        a: "We plan the content before production. Positioning, content pillars, scripts, and platform direction are part of the cycle.",
      },
    ],
    related: [
      { label: "Video Production", href: "/video-production", blurb: "Go deeper into the filming and editing engine." },
      { label: "IP Building", href: "/ip-building", blurb: "Build a recognisable founder or expert brand." },
      { label: "Ads Boosting", href: "/ads-boosting", blurb: "Amplify your best videos with paid social." },
    ],
    ctaTitle: "Ready to build your monthly content engine?",
    ctaSub: "Book a free analysis and we will map the first angles, scripts, and production rhythm.",
    schemaType: "Social media marketing service",
    keywords: [
      "short video services Malaysia",
      "short form video agency Malaysia",
      "TikTok content agency Malaysia",
      "Instagram Reels production Malaysia",
      "YouTube Shorts production",
      "Xiaohongshu RED content Malaysia",
    ],
  },

  "video-production": {
    slug: "video-production",
    accent: "#1f82ff",
    accentSoft: "#edf7ff",
    accentDeep: "#1546a6",
    metaTitle: "Video Production | Yuyu Creative Malaysia",
    metaDescription:
      "Video production in Malaysia for short-form campaigns: strategy, scripting, studio and on-site filming, coaching, editing, and platform-native cuts for TikTok, Instagram, YouTube, Facebook, and RED.",
    eyebrow: "Video production",
    title: "Video Production",
    subtitle: "Polished enough for the brand. Human enough for the feed.",
    lead: "We produce short-form videos from concept to final cut: campaign direction, scriptwriting, shot planning, studio or on-site filming, sound, lighting, coaching, editing, captions, covers, and platform-native exports. Every frame is built to hold attention while keeping your brand credible.",
    heroImg: "/images/generated-hero-studio.png",
    heroAlt: "Professional video production studio for short-form content in Malaysia",
    heroFrames: [
      { img: "/images/process-04-filming.png", label: "Shoot" },
      { img: "/images/generated-filming-coaching.png", label: "Coaching" },
      { img: "/images/process-05-editing.png", label: "Cut" },
    ],
    stats: [
      { value: "8B+", label: "Views produced across platforms" },
      { value: "5,000+", label: "Videos over 100K views" },
      { value: "5", label: "Platforms delivered to" },
    ],
    intro: {
      heading: "Production that starts with strategy, not the camera.",
      body: [
        "Most video shoots start with gear. Ours start with a plan: who you're talking to, what they care about, and the one thing each video should make them feel or do. That's why our footage converts instead of just looking nice.",
        "Whether we film in a controlled studio for authority-driven content or on location for natural, in-the-moment energy, every clip is scripted, directed, and edited to hold attention from the first second to the last.",
      ],
    },
    proof: [
      { label: "Pre-production", title: "No blind shooting", desc: "We plan the hook, visual rhythm, shot list, talking points, and platform formats before the shoot begins." },
      { label: "Direction", title: "Natural on camera", desc: "You get pacing and delivery guidance, so the result feels confident without becoming stiff." },
      { label: "Post-production", title: "Edited for the scroll", desc: "Captions, rhythm, covers, cutdowns, and platform versions are shaped for mobile viewing habits." },
    ],
    offeringsHeading: "What's included",
    offeringsSub: "A production service for brands that need both craft and commercial intent.",
    offerings: [
      { title: "Studio & on-site filming", desc: "Professional lighting, audio, and direction — in our studio or at your venue, whichever suits the story." },
      { title: "Scriptwriting & storyboarding", desc: "Every video is mapped before the shoot so filming stays focused and footage has a purpose." },
      { title: "On-camera coaching", desc: "We guide your delivery and pacing so you show up naturally, even with zero filming experience." },
      { title: "Retention-first editing", desc: "Tight cuts, captions, hooks, and rhythm engineered to keep viewers watching." },
      { title: "Platform-native versions", desc: "One master recording becomes vertical and horizontal cuts tuned to each platform." },
      { title: "Performance reporting", desc: "Clear numbers and recommendations after each cycle so the next batch performs better." },
    ],
    processHeading: "From brief to final cut",
    processLead: "The production path keeps creative ambition tied to business outcomes.",
    process: [
      { step: "01", title: "Creative brief", desc: "We define the audience, purpose, message, proof, and required platform formats." },
      { step: "02", title: "Script and shot map", desc: "The idea becomes a script, shot list, visual rhythm, and filming schedule." },
      { step: "03", title: "Directed shoot", desc: "We manage lighting, sound, framing, coaching, and scene flow on filming day." },
      { step: "04", title: "Retention edit", desc: "Footage is cut into tight, captioned, platform-ready videos with covers and variations." },
      { step: "05", title: "Review and deploy", desc: "You receive polished assets and recommendations for posting, boosting, or repurposing." },
    ],
    platformsHeading: "Made for every platform.",
    platformsLead:
      "We don't post the same export everywhere. Each video is re-cut and re-framed for how people watch — and how each algorithm rewards content.",
    platforms: [
      tiktok("Punchy, hook-led edits and trend-aware pacing built for the For You feed."),
      instagram("Reels and carousels with strong covers, captions, and save-worthy value."),
      youtube("Long-form and Shorts that build searchable authority and watch time."),
      facebook("Community-first cuts and Reels that reach an older, high-intent audience."),
      xhs("笔记-style notes and covers tuned for Malaysia's Chinese-speaking RED users."),
    ],
    answersHeading: "Video production questions",
    answers: [
      {
        q: "What is included in video production?",
        a: "Our video production includes strategy, scriptwriting, shot planning, filming, coaching, editing, captions, covers, and platform-ready exports.",
      },
      {
        q: "Can you film on-site?",
        a: "Yes. We can film in studio or on-site, depending on whether the story needs controlled authority, workplace authenticity, or location-based proof.",
      },
      {
        q: "Do you make videos for multiple platforms?",
        a: "Yes. We adapt videos for TikTok, Instagram, YouTube, Facebook, and Xiaohongshu RED instead of using one identical export everywhere.",
      },
    ],
    related: [
      { label: "Short Video Services", href: "/short-video-services", blurb: "Build a monthly content engine around strategy, scripts, filming, and learning." },
      { label: "IP Building", href: "/ip-building", blurb: "Turn clients into recognisable personal brands." },
      { label: "Ads Boosting", href: "/ads-boosting", blurb: "Amplify your best videos with paid social." },
    ],
    ctaTitle: "Ready to put your brand on camera?",
    ctaSub: "Book a free analysis and we'll map your first batch of videos worth producing.",
    schemaType: "Video production service",
    keywords: [
      "video production Malaysia",
      "short form video production Malaysia",
      "corporate video production Malaysia",
      "TikTok video production",
      "Instagram Reels production",
    ],
  },

  "ip-building": {
    slug: "ip-building",
    accent: "#33a7ff",
    accentSoft: "#eef8ff",
    accentDeep: "#165cba",
    metaTitle: "IP Building | Yuyu Creative Malaysia",
    metaDescription:
      "IP building and personal branding in Malaysia for clients and experts. Build a recognisable on-screen identity, content pillars, signature formats, and trust-led short videos.",
    eyebrow: "IP building",
    title: "IP Building",
    subtitle: "Make your expertise feel like a name, a voice, and a world people can return to.",
    lead: "We build founder IP and personal brands for business owners, experts, educators, and professionals who need more than visibility. We shape your positioning, point of view, content pillars, signature formats, and on-camera presence so your audience remembers the person behind the offer.",
    heroImg: "/images/case-2.jpg",
    heroAlt: "Founder personal brand content created by Yuyu Creative",
    heroFrames: [
      { img: "/images/case-5.jpg", label: "Voice" },
      { img: "/images/case-14.jpg", label: "Persona" },
      { img: "/images/generated-strategy-workshop.png", label: "Pillars" },
    ],
    stats: [
      { value: "960%", label: "Client renewal rate" },
      { value: "447K", label: "Largest founder following built" },
      { value: "1,000+", label: "Clients served" },
    ],
    intro: {
      heading: "Your expertise is the asset. We make it visible.",
      body: [
        "An IP — or founder brand — puts a face, voice, and viewpoint on your business so your knowledge becomes something audiences remember and return to. Instead of renting attention one paid campaign at a time, you own a brand that keeps working long after each post goes live.",
        "We define your on-screen identity, content pillars, and channel direction, then produce a steady stream of short videos that prove your authority and warm up your audience — until inbound leads start arriving because people already trust you.",
      ],
    },
    proof: [
      { label: "Identity", title: "A clear public role", desc: "We define what you should be known for, who you speak to, and what your audience should trust you for." },
      { label: "Narrative", title: "A point of view", desc: "Your content gains a through-line: belief, expertise, proof, and repeatable language." },
      { label: "Recognition", title: "Formats people remember", desc: "Recurring hooks, series, visual cues, and stories make the IP easier to recognise over time." },
    ],
    offeringsHeading: "How we build your IP",
    offeringsSub: "A personal brand should not feel like a content calendar. It should feel like a living body of ideas.",
    offerings: [
      { title: "Identity & positioning", desc: "We pin down who you are on camera, what you stand for, and the audience you're really for." },
      { title: "Content pillars", desc: "A repeatable set of themes that keep your channel focused and your message memorable." },
      { title: "Signature formats", desc: "Recurring series and hooks that become recognisably yours and easy to keep producing." },
      { title: "Narrative direction", desc: "A through-line across videos so your brand story compounds instead of feeling random." },
      { title: "Audience growth strategy", desc: "Content engineered to attract followers who match your real business goals — not vanity reach." },
      { title: "Ongoing optimisation", desc: "Monthly reviews that sharpen your angle as the channel grows." },
    ],
    processHeading: "The IP Architecture",
    processLead: "We design the person-brand before we scale the posting.",
    process: [
      { step: "01", title: "Extract the expertise", desc: "We uncover your beliefs, stories, experience, client transformations, and unfair advantages." },
      { step: "02", title: "Name the territory", desc: "We define the space you own: the problem, audience, category, and message you repeat." },
      { step: "03", title: "Build content pillars", desc: "Your ideas are grouped into repeatable themes for authority, relatability, proof, and conversion." },
      { step: "04", title: "Create signature formats", desc: "Recurring series, hooks, and story frames make your content easier to remember and produce." },
      { step: "05", title: "Compound recognition", desc: "We review performance and sharpen the IP as audience language, objections, and demand evolve." },
    ],
    platformsHeading: "One identity, every platform.",
    platformsLead:
      "A strong IP shows up consistently wherever your audience is — same face and point of view, adapted to how each platform's community behaves.",
    platforms: [
      tiktok("Discovery engine for fast follower growth and reaching brand-new audiences."),
      instagram("Where your identity lives — Reels, Stories, and a grid that signals authority."),
      youtube("Deeper trust through long-form, plus a searchable home for your best ideas."),
      facebook("Reaches loyal, high-intent community and an older professional audience."),
      xhs("Builds credibility with Malaysia's Chinese-speaking, research-driven RED users."),
    ],
    answersHeading: "IP building questions",
    answers: [
      {
        q: "What is IP building?",
        a: "IP building means turning a person's expertise, voice, stories, and point of view into a recognisable public identity that can attract followers, trust, leads, and opportunities.",
      },
      {
        q: "Is IP building the same as personal branding?",
        a: "They are closely related. Personal branding defines how people perceive you; IP building goes further by creating repeatable ideas, formats, and content assets around that identity.",
      },
      {
        q: "Who should build a founder IP?",
        a: "Clients, consultants, doctors, coaches, educators, real estate professionals, finance experts, and business owners can benefit when trust in the person affects buying decisions.",
      },
    ],
    related: [
      { label: "Short Video Services", href: "/short-video-services", blurb: "Turn your point of view into a consistent monthly content rhythm." },
      { label: "Video Production", href: "/video-production", blurb: "The studio and on-site engine behind your IP." },
      { label: "Ads Boosting", href: "/ads-boosting", blurb: "Accelerate reach once your IP is working." },
    ],
    ctaTitle: "Ready to become the name your market remembers?",
    ctaSub: "Start with a free analysis. We'll map your positioning, content pillars, and first videos.",
    schemaType: "Personal branding service",
    keywords: [
      "IP building Malaysia",
      "personal branding Malaysia",
      "founder branding Malaysia",
      "executive personal brand",
      "thought leadership content",
    ],
  },

  "ads-boosting": {
    slug: "ads-boosting",
    accent: "#376dff",
    accentSoft: "#eef3ff",
    accentDeep: "#1f3f96",
    metaTitle: "Ads Boosting | Yuyu Creative Malaysia",
    metaDescription:
      "Ads boosting in Malaysia for short videos and social media content. Scale proven creatives with paid TikTok, Instagram, YouTube, Facebook, and RED campaigns, targeting, retargeting, and reporting.",
    eyebrow: "Ads boosting",
    title: "Ads Boosting",
    subtitle: "Paid media should amplify proof, not disguise weak content.",
    lead: "We turn your strongest organic videos into paid social campaigns with clearer targeting, budget pacing, retargeting, hook tests, and reporting. The goal is simple: take content that already shows audience signal and make it travel further to the people most likely to care, enquire, and buy.",
    heroImg: "/images/case-10.jpg",
    heroAlt: "Short video creative prepared for ads boosting and paid social campaigns",
    heroFrames: [
      { img: "/images/generated-performance-review.png", label: "Data" },
      { img: "/images/blog-facebook.jpg", label: "Meta" },
      { img: "/images/blog-tiktok.jpg", label: "TikTok" },
    ],
    stats: [
      { value: "400M+", label: "Views in a single month" },
      { value: "5", label: "Ad platforms managed" },
      { value: "ROI", label: "Reporting on every ringgit" },
    ],
    intro: {
      heading: "Boosting works best on content that's already proven.",
      body: [
        "We don't throw budget at cold creative and hope. We watch what your organic videos do first, then put spend behind the ones audiences already respond to — so every ringgit amplifies a proven winner instead of testing from scratch.",
        "From audience targeting and budget pacing to A/B testing hooks and tracking results, we manage the full paid cycle across platforms and report back in plain numbers: reach, cost per result, and what to scale next.",
      ],
    },
    proof: [
      { label: "Creative signal", title: "Start with winners", desc: "Organic performance helps identify the videos with enough attention, clarity, and trust to deserve spend." },
      { label: "Media control", title: "Spend with intent", desc: "Audience targeting, placements, pacing, and retargeting keep budget connected to business goals." },
      { label: "Learning loop", title: "Scale what converts", desc: "We read cost, reach, leads, comments, and creative fatigue so the next test is sharper." },
    ],
    offeringsHeading: "What we manage",
    offeringsSub: "Paid support for content that has something worth scaling.",
    offerings: [
      { title: "Creative selection", desc: "We identify the organic videos with the strongest signals and turn them into ads." },
      { title: "Audience targeting", desc: "Precise targeting and lookalikes so spend reaches people who actually convert." },
      { title: "Budget pacing", desc: "Spend is paced and shifted toward what's working — no wasted ringgit on flat ads." },
      { title: "Hook & format testing", desc: "We A/B test openings and formats to drive down cost per result." },
      { title: "Retargeting", desc: "Warm viewers and page visitors are nudged toward enquiry and purchase." },
      { title: "Transparent reporting", desc: "Clear dashboards on reach, cost per result, and ROI — and what to scale next." },
    ],
    processHeading: "The Boosting Loop",
    processLead: "Paid reach works best as a feedback system, not a one-time button press.",
    process: [
      { step: "01", title: "Read organic signal", desc: "We shortlist videos with strong hooks, watch behavior, saves, comments, shares, or lead intent." },
      { step: "02", title: "Package the ad", desc: "The creative is adapted with captions, CTA, landing direction, and platform-specific setup." },
      { step: "03", title: "Build audiences", desc: "We shape cold, warm, lookalike, interest, retargeting, or search-led audience pools." },
      { step: "04", title: "Pace and test", desc: "Budget moves toward the creative, audience, and placement combinations that show traction." },
      { step: "05", title: "Report and scale", desc: "You see what worked, what fatigued, what to cut, and what deserves the next budget layer." },
    ],
    platformsHeading: "Paid reach across every channel.",
    platformsLead:
      "Each platform's ad system rewards different things. We tailor creative and targeting to each, then move budget to wherever your ringgit goes furthest.",
    platforms: [
      tiktok("Spark Ads that boost native-feeling videos for low-cost, high-volume reach."),
      instagram("Reels and feed ads with tight targeting for considered, higher-value buyers."),
      youtube("Skippable and Shorts ads that build awareness and capture intent."),
      facebook("The workhorse for precise targeting, retargeting, and lead generation."),
      xhs("Paid 笔记 and keyword placements to reach Chinese-speaking buyers on RED."),
    ],
    answersHeading: "Ads boosting questions",
    answers: [
      {
        q: "What is ads boosting?",
        a: "Ads boosting means using paid media to promote selected videos or posts to a larger and more relevant audience, usually with targeting, retargeting, budget control, and performance tracking.",
      },
      {
        q: "Should every video be boosted?",
        a: "No. We prefer boosting videos that already show strong organic signals, because paid media scales what the creative already communicates.",
      },
      {
        q: "Which platforms can you boost on?",
        a: "We support paid amplification across TikTok, Instagram, YouTube, Facebook, and Xiaohongshu RED depending on audience, objective, and creative fit.",
      },
    ],
    related: [
      { label: "Short Video Services", href: "/short-video-services", blurb: "Create the monthly content system that gives paid reach something strong to scale." },
      { label: "Video Production", href: "/video-production", blurb: "We create the videos worth boosting." },
      { label: "IP Building", href: "/ip-building", blurb: "Paid reach compounds a strong founder brand." },
    ],
    ctaTitle: "Ready to scale what's already working?",
    ctaSub: "Book a free analysis and we'll find the videos worth putting budget behind.",
    schemaType: "Social media advertising service",
    keywords: [
      "ads boosting Malaysia",
      "TikTok ads Malaysia",
      "Instagram ads Malaysia",
      "paid social Malaysia",
      "video ads boosting",
      "Facebook ads Malaysia",
    ],
  },
};

export const servicePageSlugs = Object.keys(servicePages);
