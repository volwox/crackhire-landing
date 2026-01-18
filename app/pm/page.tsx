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
  title: 'PM Interview Emergency Kit — CrackHire',
  description: 'Interview soon? A drill-first PM kit with scorecards, scripts, and filled blueprints for product sense, execution, metrics, and behavioral loops. Start in minutes (48 hours to 2 weeks).',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pm`,
  },
  openGraph: {
    title: 'PM Interview Emergency Kit — CrackHire',
    description: 'Drill-first kit with scorecards, scripts, and filled examples for Tier-1 PM loops. Start in minutes (48 hours to 2 weeks).',
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
