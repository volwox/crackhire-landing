'use client';

import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { TrustBadges } from './TrustBadges';
import { TALLY_PM_URL } from '@/lib/constants';
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
          You Have One Shot. Don't Wing It.
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
          Your competition has been preparing for weeks. You can get ready fast—if you drill the right way.
          Download the kit and run the protocol.
        </p>

        <Button href={TALLY_PM_URL} external size="lg" onClick={handleCTA}>
          Download the Emergency Kit ($49)
          <ArrowRightIcon size={20} className="ml-1" />
        </Button>

        {/* Trust Badges */}
        <div className="mt-8">
          <TrustBadges variant="pricing" />
        </div>

        <p className="text-xs text-slate-600 mt-4">
          Results vary. No guarantees.
        </p>
      </div>
    </section>
  );
}
