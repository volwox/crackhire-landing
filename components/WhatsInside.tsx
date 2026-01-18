'use client';

import { Card } from './Card';
import { Badge } from './Badge';
import { CheckIcon } from './Icons';
import { PLAYBOOK_CONTENTS } from '@/lib/constants';

export function WhatsInside() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">PM Interview Emergency Kit</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What's Inside the Emergency Kit
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A drill-first kit: scorecards, scripts, filled examples, and a rep loop.
            No long lectures—just what you can apply under pressure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYBOOK_CONTENTS.map((item, index) => (
            <Card key={index} variant="default" padding="md" hover>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <CheckIcon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
