'use client';

import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { TALLY_URL } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';
import { ArrowRightIcon } from './Icons';

export function FinalCTA() {
  const pathname = usePathname();

  const handleCTA = () => {
    trackCTA('final_cta', pathname);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 120%, rgba(99, 108, 241, 0.2), transparent),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(249, 104, 71, 0.1), transparent)
          `,
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Ready to Prep Smarter?
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
          Stop guessing. Get structured frameworks, practice with scorecards, 
          and walk into your interview with clarity.
        </p>
        
        <Button
          href={TALLY_URL}
          external
          size="lg"
          onClick={handleCTA}
        >
          Get the PM Playbook — $29
          <ArrowRightIcon size={20} className="ml-1" />
        </Button>

        <p className="text-sm text-slate-500 mt-6">
          Instant access · 24–48 hour sprint · Self-scoring rubrics
        </p>
      </div>
    </section>
  );
}
