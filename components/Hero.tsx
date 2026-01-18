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

  const handlePrimaryCTA = () => {
    trackCTA('hero_primary', pathname);
  };

  const handleSecondaryCTA = () => {
    trackCTA('hero_secondary_waitlist', pathname);
  };

  return (
    // ↓↓↓ Buradaki pb değerlerini düşürdüm (boşluğu kapatır)
    <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 overflow-hidden">
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
              PM Interview Emergency Kit
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Interview Soon? <span className="gradient-text">Stop Studying. Start Drilling.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Not a course. A tactical kit built to help you present <span className="text-slate-200">strong-hire signals</span> under pressure—
            scorecards, scripts, filled blueprints, and drill loops. Start in minutes (as fast as 48 hours, up to ~2 weeks).
            <span className="text-slate-500">
              {variant === 'pm'
                ? ' Built for product sense, execution, metrics, and behavioral loops.'
                : ' PM Interview Protocol v2.0 inside.'}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-fade-in-up animation-delay-200">
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

          {/* Trust line */}
          {/* ↓↓↓ Biraz aşağı boşluk bıraktım ama kontrollü (mb-0 yerine mb-2) */}
          <p className="text-sm text-slate-500 mb-2 animate-fade-in-up animation-delay-200">
            One-time $49 · Instant PDF access · Optional Notion tracker (bonus) · Results vary. No guarantees.
          </p>
        </div>
      </div>
    </section>
  );
}
