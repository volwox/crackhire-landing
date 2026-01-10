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
          <Badge variant="outline" className="mb-4">PM Interview Protocol v2.0</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What's Inside the Protocol
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to walk into your PM interview knowing exactly what they're looking for.
            No fluff. No theory. Just the system.
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
