import {
  Header,
  Footer,
  Hero,
  SocialProofStrip,
  ProblemSolution,
  HowItWorks,
  WhatsInside,
  Testimonials,
  Pricing,
  FAQ,
  FinalCTA,
} from '@/components';

export default function HomePage() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero variant="home" />
        <SocialProofStrip />
        <ProblemSolution />
        <HowItWorks />
        <WhatsInside />
        <Testimonials variant="default" />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
