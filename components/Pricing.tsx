'use client';

import { usePathname } from 'next/navigation';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { TrustBadges } from './TrustBadges';
import { ValueBreakdown } from './ValueBreakdown';
import { TALLY_PM_URL, PRICING, PLAYBOOK_CONTENTS } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';
import { CheckIcon, ArrowRightIcon } from './Icons';

export function Pricing() {
  const pathname = usePathname();

  const handlePricingCTA = () => {
    trackCTA('pricing', pathname);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            One Price. Emergency Kit. Instant Access.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No subscriptions. No upsells. Everything unlocked immediately.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card variant="elevated" padding="none" className="border-brand-600/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-brand-600/20 to-accent-600/10 p-6 text-center border-b border-slate-800">
              <Badge variant="accent" className="mb-3">
                PM Interview Emergency Kit
              </Badge>
              <h3 className="text-xl font-bold text-white mb-1">{PRICING.pmPlaybook.name}</h3>
              <p className="text-sm text-slate-400">PM Interview Protocol v2.0 inside</p>
            </div>

            {/* Value Anchoring */}
            <div className="p-6 border-b border-slate-800">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4 text-center">
                What You're Getting
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Sprint PDF + Blueprints</span>
                  <span className="text-slate-500">$49</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Cheat Sheets & Scripts</span>
                  <span className="text-slate-500">$49</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Notion Workbook (bonus)</span>
                  <span className="text-slate-500">$79</span>
                </div>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400">Total Value</span>
                  <span className="text-2xl text-slate-400 line-through">$177</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">Today</span>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-white">${PRICING.pmPlaybook.price}</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-sm font-semibold px-3 py-1.5 rounded-full">
                      Save $128
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-6 border-b border-slate-800">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">
                Included in the Kit
              </div>
              <ul className="space-y-3">
                {PLAYBOOK_CONTENTS.slice(0, 6).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon size={18} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                    <span className="text-sm text-slate-300">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6">
              <Button href={TALLY_PM_URL} external fullWidth size="lg" onClick={handlePricingCTA}>
                Download the Emergency Kit ($49)
                <ArrowRightIcon size={18} className="ml-1" />
              </Button>

              {/* Trust Badges */}
              <div className="mt-6">
                <TrustBadges variant="pricing" />
              </div>
            </div>
          </Card>

          {/* Support note */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-400 text-center">
              <span className="text-slate-300 font-medium">Support:</span> Due to the digital nature, sales are final—
              but if you get stuck, email us at support@crackhire.com and we'll help you apply the kit.
            </p>
            <p className="text-xs text-slate-600 text-center mt-2">
              Results vary. No guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
