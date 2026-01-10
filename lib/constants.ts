/**
 * Site-wide constants and configuration
 * All external URLs and key values are centralized here
 */

// ============================================
// TALLY FORM URLS - Single source of truth
// ============================================
export const TALLY_PM_URL = "https://tally.so/r/rjaeO5";
export const TALLY_WAITLIST_URL = "https://tally.so/r/2Ea2vg";

// ============================================
// SITE CONFIGURATION
// ============================================
export const SITE_CONFIG = {
  name: "CrackHire",
  domain: "crackhire.com",
  url: "https://crackhire.com",
  supportEmail: "support@crackhire.com",
  tagline: "Crack the PM Interview Code",
  description: "Stop guessing what interviewers want. Get the exact frameworks, scorecards, and scripts used in Tier-1 PM interviews. Prep in 24 hours, not weeks.",
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
    price: 29,
    currency: "USD",
    name: "PM Interview Protocol",
    description: "Instant digital access",
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
    answer: "Aspiring and transitioning Product Managers preparing for competitive interviews. Whether you're targeting growth-stage startups or enterprise PM roles, the frameworks apply across the board. Best for candidates with real experience who struggle to articulate it in interview format.",
  },
  {
    question: "How fast can I use it?",
    answer: "Immediately. The 24-Hour Emergency Sprint section is designed for candidates with interviews tomorrow. You can cover the essentials in a single focused session. For deeper prep, the full protocol takes 2–3 days.",
  },
  {
    question: "What do I get after purchase?",
    answer: "Instant access to the complete PM Interview Protocol: 50+ structured questions with scoring frameworks, fill-in-the-blank answer templates, self-evaluation scorecards, and the 24-hour sprint plan. All digital, all immediate.",
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
    title: "Perfect Answer Frameworks",
    description: "Fill-in-the-blank templates for product sense, execution, and behavioral questions. Stop rambling—hit every evaluation criteria.",
  },
  {
    title: "Insider Scorecards",
    description: "Grade yourself the way interviewers do. Know exactly where your answers land before the real thing.",
  },
  {
    title: "24-Hour Emergency Sprint",
    description: "Interview tomorrow? This 80/20 section covers only what moves the needle. Skip the fluff, nail the fundamentals.",
  },
  {
    title: "Signal Keywords & Patterns",
    description: "The specific phrases and structures that trigger 'strong hire' signals. Learn the language interviewers listen for.",
  },
  {
    title: "Anti-Patterns & Red Flags",
    description: "Common mistakes that kill your candidacy. Know what NOT to say—often more important than what to say.",
  },
  {
    title: "Mock Scorecard Exercises",
    description: "Practice questions with self-grading rubrics. Build calibration before the stakes are real.",
  },
] as const;

// ============================================
// HOW IT WORKS STEPS
// ============================================
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Get Instant Access",
    description: "Purchase and download the complete PM Interview Protocol. No waiting, no drip content—everything unlocked immediately.",
  },
  {
    step: 2,
    title: "Run the Sprint or Go Deep",
    description: "Use the 24-hour emergency sprint for fast prep, or work through the full protocol over 2–3 days for comprehensive coverage.",
  },
  {
    step: 3,
    title: "Score Yourself Before They Do",
    description: "Practice with our scorecards. Grade your own answers using the same criteria interviewers use. Fix gaps before they cost you.",
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
    quote: "used the 24h sprint before my final round. didn't have time for full prep but this covered exactly what I needed.",
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
    quote: "stakeholder questions always caught me off guard. the fill-in templates gave me a structure I could actually remember under pressure.",
    role: "Senior PM",
    market: "US",
    handle: "senior_loop",
  },
] as const;
