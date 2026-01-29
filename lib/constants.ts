/**
 * Site-wide constants and configuration
 * All external URLs and key values are centralized here
 */

// ============================================
// TALLY FORM URLS - Single source of truth
// ============================================
export const TALLY_PM_URL = "https://crackhire.lemonsqueezy.com/checkout/buy/36742a1d-a920-4ade-a142-edaa77447e2a";
export const TALLY_WAITLIST_URL = "https://tally.so/r/2Ea2vg";

// ============================================
// SITE CONFIGURATION
// ============================================
export const SITE_CONFIG = {
  name: "CrackHire",
  domain: "crackhire.com",
  url: "https://crackhire.com",
  supportEmail: "support@crackhire.com",
  tagline: "PM Interview Emergency Kit",
  description:
    "Interview soon? Skip theory. Get the PM Interview Emergency Kit: drill loops, scorecards, scripts, and battle plans to help you present strong-hire signals under pressure. Start in minutes (48 hours to 2 weeks). Results vary.",
  keywords: [
    "product manager interview prep",
    "PM interview questions",
    "product management interview",
    "PM interview playbook",
    "interview preparation",
    "product manager questions",
    "behavioral interview prep",
    "product sense interview",
    "PM interview frameworks",
    "interview scorecards",
  ],
} as const;

// ============================================
// PRICING
// ============================================
export const PRICING = {
  pmPlaybook: {
    price: 49,
    currency: "USD",
    name: "PM Interview Emergency Kit",
    description: "Instant PDF access (bonus Notion tracker)",
  },
} as const;

// ============================================
// SOCIAL PROOF (Generic - no company names)
// ============================================
export const SOCIAL_PROOF_COMPANIES = [
  "Tier-1 Tech",
  "Growth Startups",
  "Enterprise PM",
  "Remote-First",
  "Series A–D",
] as const;

// ============================================
// FAQ DATA - Updated with new questions
// ============================================
export const FAQ_DATA = [
  {
    question: "Is this cheating?",
    answer: "No. Interviewing is a format with known evaluation criteria. We teach you the format—the same way test prep courses teach standardized tests. You still need to bring real experience and thinking; we just help you frame it correctly.",
  },
  {
    question: "Who is this for?",
    answer: "Candidates with a PM interview coming up soon (as fast as 48 hours, up to ~2 weeks). If you have real experience but your answers ramble, miss metrics/tradeoffs, or fail to hit scoring criteria, this kit gives you a drill-first structure.",
  },
  {
    question: "How fast can I use it?",
    answer: "Immediately. You can start in 10 minutes with the drill loop. Then pick a timeline: 2-Day Emergency Sprint (fastest), 7-Day Ramp, or 14-Day Runway.",
  },
  {
    question: "What do I get after purchase?",
    answer: "Instant access to a self-contained PDF (primary) with scorecards, word-for-word scripts, filled examples, and a drill plan. You also get an optional Notion tracker (bonus) to track reps—Notion is not required.",
  },
  {
    question: "What if I get stuck or have questions?",
    answer: "Email us at support@crackhire.com. We'll help you apply the frameworks to your specific interview loop. We can't guarantee outcomes, but we'll make sure you understand how to use what you bought.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the digital nature of the product, sales are final once access is granted. However, if you're struggling to apply the material, reach out—we'll recommend the best next steps for your specific situation.",
  },
] as const;

// ============================================
// PLAYBOOK CONTENTS - "Protocol" framing
// ============================================
export const PLAYBOOK_CONTENTS = [
  {
    title: "Interviewer Scorecards",
    description: "Grade yourself the way they do. Clear criteria, common failure modes, and what a 4/4 answer signals.",
  },
  {
    title: "Word-for-Word Script Vault",
    description: "Stop improvising under pressure. Use clean scripts for clarifying, tradeoffs, uncertainty, and closing strong.",
  },
  {
    title: "Emergency Drill Loop (8 minutes)",
    description: "Rep-based loop: answer → score → fix → repeat. The fastest way to remove no-hire signals quickly.",
  },
  {
    title: "Sprint(12) Blueprints (Filled)",
    description: "Standardized blueprints for the 12 most common questions—clarify, structure, metrics, tradeoffs, and fixes.",
  },
  {
    title: "Red Flags & Anti-Patterns",
    description: "What not to say (and why it kills you). Quick fixes you can apply the same day.",
  },
  {
    title: "Filled Behavioral Examples Pack",
    description: "Impact / Conflict / Failure stories with soundbites, probes, and metrics—so you can model the shape fast.",
  },
] as const;

// ============================================
// HOW IT WORKS STEPS
// ============================================
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Get Interview-Ready in 48 Hours",
    description: "One-time purchase. Instant PDF access. Optional Notion tracker included (bonus).",
  },
  {
    step: 2,
    title: "Pick Your Timeline",
    description: "2-Day Emergency Sprint (fastest) · 7-Day Ramp · 14-Day Runway. Same kit—different pacing.",
  },
  {
    step: 3,
    title: "Drill → Score → Fix",
    description: "Run reps with scorecards. Remove red flags, tighten metrics/tradeoffs, and lock in strong-hire signals.",
  },
] as const;

// ============================================
// TESTIMONIALS - Discord/chat style, generic
// ============================================
export const TESTIMONIALS = [
  {
    quote: "finally understood why my answers felt 'off'. the scorecard made it obvious—I was missing the metrics framing entirely.",
    role: "PM Candidate",
    market: "US",
    handle: "anon_pm_23",
  },
  {
    quote: "used the sprint before my final round. didn't have time for full prep but this showed exactly what I was missing under pressure.",
    role: "Senior PM Candidate",
    market: "EU",
    handle: "eu_product",
  },
  {
    quote: "3 loops, 3 rejections. bought this, realized I'd been structuring product sense answers completely wrong. wish I had it earlier.",
    role: "Career Switcher",
    market: "US",
    handle: "switching_to_pm",
  },
] as const;

// ============================================
// PM-SPECIFIC TESTIMONIALS
// ============================================
export const PM_TESTIMONIALS = [
  {
    quote: "the product sense frameworks clicked immediately. 'design X for Y' questions finally feel structured instead of random.",
    role: "APM Candidate",
    market: "US",
    handle: "apm_grind",
  },
  {
    quote: "metrics section was the unlock. I knew the concepts but couldn't articulate tradeoffs clearly. scorecard showed me the gap.",
    role: "PM Candidate",
    market: "UK",
    handle: "uk_pm_prep",
  },
  {
    quote: "stakeholder questions always caught me off guard. the blueprints gave me a structure I could actually remember under pressure.",
    role: "Senior PM",
    market: "US",
    handle: "senior_loop",
  },
] as const;
