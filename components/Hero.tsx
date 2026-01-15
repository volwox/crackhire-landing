'use client';

import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Badge } from './Badge';
import { ArrowRightIcon, ZapIcon } from './Icons';
import { TALLY_PM_URL, TALLY_WAITLIST_URL } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';

interface HeroProps {
  variant?: 'home' | 'pm';
}

export function Hero({ variant = 'home' }: HeroProps) {
  const pathname = usePathname();

  const isPM = variant === 'pm';

  const handlePrimaryCTA = () => {
    trackCTA('hero_primary', pathname);
  };

  const handleSecondaryCTA = () => {
    trackCTA('hero_secondary_waitlist', pathname);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <Badge variant="accent" icon={<ZapIcon size={14} />}>
              {isPM ? '24-Hour Emergency Sprint Available' : 'PM Interview Protocol v2.0'}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            {isPM ? (
              <>
                Don't Just Prep. <span className="gradient-text">Crack the Code.</span>
              </>
            ) : (
              <>
                Stop Guessing. <span className="gradient-text">Start Scoring.</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            {isPM ? (
              <>
                Learn the evaluation format. Use interviewer-style scorecards (criteria-based checklists).
                Fill-in-the-blank frameworks that hit every criteria. Prep in 24 hours, not weeks.
              </>
            ) : (
              <>
                The exact frameworks, scorecards, and scripts for Tier-1 PM interviews.
                Know what "strong hire" looks like—before they score you.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-fade-in-up animation-delay-200">
            <Button href={TALLY_PM_URL} external size="lg" onClick={handlePrimaryCTA}>
              Get the PM Interview Protocol — $49
              <ArrowRightIcon size={20} className="ml-1" />
            </Button>

            <Button
              href={TALLY_WAITLIST_URL}
              external
              variant="secondary"
              size="lg"
              onClick={handleSecondaryCTA}
            >
              Join Waitlist for New Roles
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-slate-500 animate-fade-in-up animation-delay-200">
            Built for Tier-1 PM loops and high-signal interviews.
          </p>
        </div>
      </div>
    </section>
  );
}
