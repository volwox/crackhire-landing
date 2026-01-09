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
  title: 'PM Interview Playbook — Structured Product Manager Interview Prep',
  description: 'Ace your PM interview with structured questions, scoring rubrics, and answer frameworks for product sense, execution, metrics, and behavioral rounds. 24–48 hour prep sprint.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pm`,
  },
  openGraph: {
    title: 'PM Interview Playbook — Structured Product Manager Interview Prep',
    description: 'Ace your PM interview with structured questions, scoring rubrics, and answer frameworks. 24–48 hour prep sprint.',
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
