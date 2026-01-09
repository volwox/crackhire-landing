'use client';

import { usePathname } from 'next/navigation';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { TALLY_PM_URL, PRICING, PLAYBOOK_CONTENTS } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';
import { CheckIcon, ArrowRightIcon } from './Icons';

export function Pricing() {
  const pathname = usePathname();

  const handlePricingCTA = () => {
    trackCTA('pricing_pm', pathname);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Instant access. No subscriptions. No hidden fees.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card
            variant="elevated"
            padding="none"
            className="border-brand-600/30 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-brand-600/20 to-accent-600/10 p-6 text-center border-b border-slate-800">
              <Badge variant="accent" className="mb-3">
                PM Interview Playbook
              </Badge>
              <h3 className="text-xl font-bold text-white mb-1">
                {PRICING.pmPlaybook.name}
              </h3>
              <p className="text-sm text-slate-400">
                {PRICING.pmPlaybook.description}
              </p>
            </div>

            <div className="p-6 text-center border-b border-slate-800">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-slate-400 text-2xl">$</span>
                <span className="text-5xl font-bold text-white">
                  {PRICING.pmPlaybook.price}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                One-time purchase · Instant access
              </p>
            </div>

            <div className="p-6 border-b border-slate-800">
              <ul className="space-y-3">
                {PLAYBOOK_CONTENTS.slice(0, 5).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon
                      size={18}
                      className="flex-shrink-0 text-emerald-400 mt-0.5"
                    />
                    <span className="text-sm text-slate-300">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6">
              <Button
                href={TALLY_PM_URL}
                external
                fullWidth
                size="lg"
                onClick={handlePricingCTA}
              >
                Get the PM Playbook
                <ArrowRightIcon size={18} className="ml-1" />
              </Button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Digital product. No refunds after access is granted.
              </p>
            </div>
          </Card>

          {/* Risk reversal */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-400 text-center">
              <span className="text-slate-300 font-medium">Not sure it&apos;s for you?</span>{' '}
              If you don&apos;t find it useful, email us and we&apos;ll help you apply the
              frameworks in your next interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
