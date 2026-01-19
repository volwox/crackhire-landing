'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Badge } from './Badge';
import { TrustBadges } from './TrustBadges';
import { ValueBreakdown } from './ValueBreakdown';
import { ArrowRightIcon, ZapIcon } from './Icons';
import { TALLY_PM_URL, TALLY_WAITLIST_URL } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';

interface HeroProps {
  variant?: 'home' | 'pm';
}

export function Hero({ variant = 'home' }: HeroProps) {
  const pathname = usePathname();

  const handlePrimaryCTA = () => {
    trackCTA('hero_primary', pathname);
  };

  const handleSecondaryCTA = () => {
    trackCTA('hero_secondary_waitlist', pathname);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 108, 241, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 104, 71, 0.08), transparent)
          `,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 animate-fade-in">
              <Badge variant="accent" icon={<ZapIcon size={14} />}>
                PM Interview Emergency Kit
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Interview Soon?{' '}
              <span className="gradient-text">Stop Studying. Start Drilling.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-4 animate-fade-in-up animation-delay-100">
              Not a course. A tactical kit built to help you present{' '}
              <span className="text-slate-200">strong-hire signals</span> under pressure.
            </p>

            <p className="text-base text-slate-500 mb-8 animate-fade-in-up animation-delay-100">
              Scorecards, scripts, filled blueprints, and drill loops.{' '}
              {variant === 'pm'
                ? 'Built for product sense, execution, metrics, and behavioral loops.'
                : 'PM Interview Protocol v2.0 inside.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6 animate-fade-in-up animation-delay-200">
              <Button href={TALLY_PM_URL} external size="lg" onClick={handlePrimaryCTA}>
                Download the Emergency Kit ($49)
                <ArrowRightIcon size={20} className="ml-1" />
              </Button>

              <Button
                href={TALLY_WAITLIST_URL}
                external
                variant="secondary"
                size="lg"
                onClick={handleSecondaryCTA}
              >
                Not interviewing soon? Join waitlist
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mb-6 animate-fade-in-up animation-delay-200">
              <TrustBadges variant="hero" />
            </div>

            {/* Value Breakdown - Compact */}
            <div className="animate-fade-in-up animation-delay-300">
              <ValueBreakdown variant="compact" className="max-w-md mx-auto lg:mx-0" />
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-600 mt-4 animate-fade-in-up animation-delay-300">
              Results vary. No guarantees.
            </p>
          </div>

          {/* Right Column - Mockup Image */}
          <div className="hidden lg:block animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Glow effect behind image */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(99, 108, 241, 0.4), transparent 70%)'
                }}
                aria-hidden="true"
              />
              <Image
                src="/hero-mockup.webp"
                alt="PM Interview Emergency Kit - PDF and Notion Tracker preview"
                width={700}
                height={500}
                className="relative z-10 rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Mockup - Below content on smaller screens */}
          <div className="lg:hidden animate-fade-in-up animation-delay-300">
            <div className="relative max-w-lg mx-auto">
              <div 
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(99, 108, 241, 0.4), transparent 70%)'
                }}
                aria-hidden="true"
              />
              <Image
                src="/hero-mockup.webp"
                alt="PM Interview Emergency Kit - PDF and Notion Tracker preview"
                width={600}
                height={400}
                className="relative z-10 rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
