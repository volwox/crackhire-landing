'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Badge } from './Badge';
import { Card } from './Card';
import { ArrowRightIcon, ZapIcon, LockIcon, BookIcon, ClipboardIcon } from './Icons';
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
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
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
            Not a course. A tactical kit built to help you present{' '}
            <span className="text-slate-200">strong-hire signals</span> under pressure—scorecards, scripts, filled
            blueprints, and drill loops. Start in minutes (as fast as 48 hours, up to ~2 weeks).
            <span className="text-slate-500">
              {variant === 'pm'
                ? ' Built for product sense, execution, metrics, and behavioral loops.'
                : ' PM Interview Protocol v2.0 inside.'}
            </span>
          </p>

          {/* Price anchoring / value breakdown */}
          <div className="max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-150">
            <Card variant="glass" padding="sm" className="border border-slate-700/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold tracking-wide uppercase text-slate-400">Value breakdown</span>
                <span className="text-xs text-slate-500">Today: <span className="text-slate-200 font-semibold">$49</span></span>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-800">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-800 bg-slate-900/40">
                      <td className="py-2 px-3 text-slate-300">Sprint PDF</td>
                      <td className="py-2 px-3 text-right text-slate-300">$49</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-slate-300">Cheat Sheets</td>
                      <td className="py-2 px-3 text-right text-slate-300">$49</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-slate-900/40">
                      <td className="py-2 px-3 text-slate-300">Notion Workbook</td>
                      <td className="py-2 px-3 text-right text-slate-300">$79</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-slate-400 font-semibold">Total</td>
                      <td className="py-2 px-3 text-right text-slate-400 font-semibold">$177</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-white font-semibold">Today</td>
                      <td className="py-2 px-3 text-right text-white font-semibold">$49</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                One-time purchase. Instant PDF access. Results vary. No guarantees.
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5 animate-fade-in-up animation-delay-200">
            <Button href={TALLY_PM_URL} external size="lg" onClick={handlePrimaryCTA}>
              Download the Emergency Kit ($49)
              <ArrowRightIcon size={20} className="ml-1" />
            </Button>

            <Button href={TALLY_WAITLIST_URL} external variant="secondary" size="lg" onClick={handleSecondaryCTA}>
              Not interviewing soon? Join waitlist
            </Button>
          </div>

          {/* Trust badges (close to CTA) */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500 mb-2 animate-fade-in-up animation-delay-200">
            <span className="inline-flex items-center gap-1">
              <LockIcon size={14} className="text-slate-400" />
              Secure checkout via Lemon Squeezy
            </span>
            <span className="inline-flex items-center gap-1">
              <BookIcon size={14} className="text-slate-400" />
              Instant PDF access
            </span>
            <span className="inline-flex items-center gap-1">
              <ClipboardIcon size={14} className="text-slate-400" />
              Optional Notion tracker (bonus)
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-0 animate-fade-in-up animation-delay-200">
            Results vary. No guarantees.
          </p>
        </div>

        {/* Hero mockup (home only) */}
        {variant === 'home' && (
          <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
            <Image
              src="/hero-mockup.webp"
              alt="PM Interview Emergency Kit mockup showing the tracker and PDF cover"
              width={1600}
              height={893}
              priority
              className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
