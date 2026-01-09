'use client';

import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { CheckIcon } from '@/components/Icons';

const PM_CONTENTS = [
  {
    title: 'Product Sense Questions',
    description: 'Design a product for X, improve product Y—structured frameworks for open-ended product questions',
  },
  {
    title: 'Execution & Metrics',
    description: 'North star metrics, success measurement, and data-driven decision scenarios',
  },
  {
    title: 'Prioritization Frameworks',
    description: 'Roadmap tradeoffs, resource allocation, and stakeholder alignment exercises',
  },
  {
    title: 'Behavioral & Leadership',
    description: 'STAR-formatted responses for influence, conflict resolution, and cross-functional collaboration',
  },
  {
    title: 'Estimation & Strategy',
    description: 'Market sizing, go-to-market, and competitive analysis question structures',
  },
  {
    title: 'Self-Scoring Rubrics',
    description: 'Evaluate your own answers objectively—know what strong vs. weak looks like',
  },
];

export function PMWhatsInside() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">PM Interview Playbook</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What's Inside
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to walk into your PM interview with clarity.
            Organized by interview type. Zero fluff.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PM_CONTENTS.map((item, index) => (
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
