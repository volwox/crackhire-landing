/**
 * Site-wide constants and configuration
 * All external URLs and key values are centralized here
 */

// ============================================
// TALLY FORM URL - Single source of truth
// Replace with your actual Tally form URL
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
  tagline: "Role-Specific Interview Prep Playbooks",
  description: "Structured PM interview prep with scoring rubrics, answer frameworks, and a focused 24–48 hour sprint plan. Cut the noise. Ace the interview.",
  keywords: [
    "product manager interview prep",
    "PM interview questions",
    "product management interview",
    "PM interview playbook",
    "interview preparation",
    "product manager questions",
    "behavioral interview prep",
    "product sense interview",
  ],
} as const;

// ============================================
// PRICING
// ============================================
export const PRICING = {
  pmPlaybook: {
    price: 29,
    currency: "USD",
    name: "PM Interview Playbook",
    description: "Instant digital access",
  },
} as const;

// ============================================
// SOCIAL PROOF (Placeholder companies)
// Use text-based logos for compliance
// ============================================
export const SOCIAL_PROOF_COMPANIES = [
  "FAANG",
  "Top Startups",
  "Fortune 500",
  "Tech Unicorns",
  "Remote-First",
] as const;

// ============================================
// FAQ DATA
// ============================================
export const FAQ_DATA = [
  {
    question: "What exactly is inside the PM Interview Playbook?",
    answer: "The playbook includes 50+ structured PM interview questions with scoring rubrics, answer frameworks (STAR, CIRCLES, etc.), real product case breakdowns, metrics and prioritization exercises, and a 24–48 hour prep sprint schedule. Everything is organized by interview type: behavioral, product sense, estimation, and execution.",
  },
  {
    question: "How quickly can I access the playbook?",
    answer: "Instant access. After purchase, you get immediate access to the full digital playbook. No waiting, no shipping—start your prep right away.",
  },
  {
    question: "Who is this playbook designed for?",
    answer: "Aspiring and transitioning Product Managers preparing for interviews at competitive tech companies. Whether you're targeting growth-stage startups or enterprise roles, the frameworks apply across the board.",
  },
  {
    question: "What if I've already done PM interviews before?",
    answer: "Even experienced candidates find value in structured scoring. The playbook helps you identify gaps in your answers and provides frameworks to articulate your experience more effectively. Many repeat interviewers use it to sharpen specific weak areas.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Due to the digital nature of the product, we don't offer refunds after access is granted. However, if you don't find it useful, email us at support@crackhire.com and we'll help you apply the frameworks to your next interview.",
  },
  {
    question: "Will this work for non-US markets?",
    answer: "Yes. While examples reference US tech companies, the frameworks and methodologies apply globally. Candidates preparing for Tier-1 markets (UK, EU, Singapore, etc.) use these same approaches.",
  },
] as const;

// ============================================
// PLAYBOOK CONTENTS - PM Specific
// ============================================
export const PLAYBOOK_CONTENTS = [
  {
    title: "50+ Structured Questions",
    description: "Product sense, execution, metrics, and behavioral questions with detailed scoring criteria",
  },
  {
    title: "Answer Frameworks",
    description: "STAR, CIRCLES, and role-specific frameworks with fill-in templates for each question type",
  },
  {
    title: "Self-Scoring Rubrics",
    description: "Evaluate your own answers objectively before the real interview—know where you stand",
  },
  {
    title: "Product Case Breakdowns",
    description: "Real product cases with structured analysis: metrics, tradeoffs, and stakeholder alignment",
  },
  {
    title: "Prioritization Exercises",
    description: "North star metrics, roadmap tradeoffs, and resource allocation scenarios",
  },
  {
    title: "24–48 Hour Sprint Plan",
    description: "Focused prep schedule for time-crunched candidates—essentials only, zero fluff",
  },
] as const;

// ============================================
// HOW IT WORKS STEPS
// ============================================
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Get Instant Access",
    description: "Purchase and receive immediate access to the complete PM Interview Playbook. No waiting.",
  },
  {
    step: 2,
    title: "Follow the Sprint Plan",
    description: "Use our 24-48 hour structured prep schedule or dive deep into specific areas you need to strengthen.",
  },
  {
    step: 3,
    title: "Practice with Scorecards",
    description: "Run through questions, score yourself objectively, and refine your answers using our frameworks.",
  },
] as const;

// ============================================
// TESTIMONIALS (Anonymous roles only)
// ============================================
export const TESTIMONIALS = [
  {
    quote: "The scoring rubrics changed everything. I finally understood what a strong answer actually looks like.",
    role: "PM Candidate",
    market: "US",
  },
  {
    quote: "Used the 48-hour sprint before my final round. The structure helped me focus on what actually mattered.",
    role: "Senior PM Candidate",
    market: "EU",
  },
  {
    quote: "After three failed PM interviews, this playbook helped me identify exactly where my answers were falling short.",
    role: "Career Switcher to PM",
    market: "US",
  },
] as const;

// ============================================
// PM-SPECIFIC TESTIMONIALS (for /pm page)
// ============================================
export const PM_TESTIMONIALS = [
  {
    quote: "The product sense frameworks were exactly what I needed. Finally felt prepared for 'design a product for X' questions.",
    role: "APM Candidate",
    market: "US",
  },
  {
    quote: "Metrics and prioritization sections were gold. Used them to prep for execution rounds.",
    role: "PM Candidate",
    market: "UK",
  },
  {
    quote: "The stakeholder and tradeoff questions caught me off guard in past interviews. Not anymore.",
    role: "Senior PM Candidate",
    market: "US",
  },
] as const;
