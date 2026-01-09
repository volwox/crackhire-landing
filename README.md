# CrackHire Landing Page

A conversion-focused landing page for CrackHire - role-specific interview prep playbooks.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Font**: Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
crackhire/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Home page
│   ├── pm/
│   │   └── page.tsx         # PM-specific landing page
│   ├── terms/
│   │   └── page.tsx         # Terms of Service
│   └── privacy/
│       └── page.tsx         # Privacy Policy
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Reusable card component
│   ├── Badge.tsx            # Reusable badge component
│   ├── Icons.tsx            # Inline SVG icons
│   ├── Header.tsx           # Site header/navigation
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section
│   ├── SocialProofStrip.tsx # Company logos strip
│   ├── ProblemSolution.tsx  # Problem/Solution comparison
│   ├── HowItWorks.tsx       # 3-step process
│   ├── WhatsInside.tsx      # Playbook contents grid
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── Pricing.tsx          # Pricing card
│   ├── FAQ.tsx              # FAQ accordion
│   ├── FinalCTA.tsx         # Closing CTA section
│   └── index.ts             # Barrel exports
├── lib/
│   ├── constants.ts         # Site config, Tally URL, content
│   └── analytics.ts         # Analytics event tracking
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## Configuration

### Tally Form URL

Update the Tally form URL in `lib/constants.ts`:

```typescript
export const TALLY_URL = "https://tally.so/r/YOUR_FORM_ID";
```

### Site Configuration

Update site details in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "CrackHire",
  domain: "crackhire.com",
  supportEmail: "support@crackhire.com",
  // ...
};
```

## Features

- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML
- **Accessible**: ARIA labels, keyboard navigation
- **Analytics Ready**: Placeholder event tracking
- **No External Images**: All graphics via CSS gradients and inline SVGs
- **Single-Page Conversion Flow**: Optimized for lead capture

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Manual

```bash
npm run build
# Deploy .next folder to your hosting provider
```

## Compliance Notes

This landing page avoids risky advertising terms:

- Uses compliant terms: "playbook", "win", "ace", "master", "prep", "sprint"

## License

Proprietary - All rights reserved
