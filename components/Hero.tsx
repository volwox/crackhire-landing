'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Badge } from './Badge';
import { TrustBadges } from './TrustBadges';
import { ValueBreakdown } from './ValueBreakdown';
import { ArrowRightIcon } from './Icons';
import { trackCTA } from '@/lib/analytics';

interface HeroProps {
  variant?: 'home' | 'pm';
}

export function Hero({ variant = 'home' }: HeroProps) {
  const pathname = usePathname();
  const isPMPage = variant === 'pm' || pathname.includes('/pm');

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex gap-3">
              {/* ❗ variant prop kaldırıldı (TS fix) */}
              <Badge>Emergency Interview Kit</Badge>
              <Badge>48H Drill System</Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Interview Soon?
              <br />
              <span className="text-indigo-400">
                Stop Studying. Start Drilling.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              A no-fluff, pressure-based interview system designed for PM & Tech
              roles. Real questions. Real drills. Real outcomes.
            </p>

            {/* PRIMARY CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/checkout"
                variant="primary"
                onClick={() => trackCTA('hero_primary_cta')}
              >
                🚀 Get Interview-Ready in 48 Hours
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-indigo-500/20 blur-2xl" />
              <Image
                src="/hero-mockup1.webp"
                alt="PM Interview Emergency Kit preview"
                width={600}
                height={400}
                className="relative z-10 rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <ValueBreakdown />
        </div>
      </div>
    </section>
  );
}
