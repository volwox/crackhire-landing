import type { Metadata } from 'next';
import {
  Header,
  Footer,
  Hero,
  SocialProofStrip,
  HowItWorks,
  Testimonials,
  Pricing,
  FAQ,
  FinalCTA,
} from '@/components';
import { SITE_CONFIG } from '@/lib/constants';
import { PMWhatsInside } from './PMWhatsInside';
import { PMProblemSolution } from './PMProblemSolution';

export const metadata: Metadata = {
  title: 'PM Interview Protocol — Crack the PM Interview Code',
  description: 'Stop guessing what PM interviewers want. Get the exact frameworks, scorecards, and scripts for product sense, execution, and behavioral rounds. Prep in 24 hours.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pm`,
  },
  openGraph: {
    title: 'PM Interview Protocol — Crack the PM Interview Code',
    description: 'Frameworks, scorecards, and scripts for Tier-1 PM interviews. 24-hour emergency sprint included.',
    url: `${SITE_CONFIG.url}/pm`,
  },
};

export default function PMPage() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero variant="pm" />
        <SocialProofStrip />
        <PMProblemSolution />
        <HowItWorks />
        <PMWhatsInside />
        <Testimonials variant="pm" />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
