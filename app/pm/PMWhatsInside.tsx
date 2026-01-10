'use client';

import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { CheckIcon } from '@/components/Icons';

const PM_CONTENTS = [
  {
    title: 'Product Sense Frameworks',
    description: '"Design a product for X" and "improve product Y"—fill-in-the-blank templates that hit every evaluation point.',
  },
  {
    title: 'Execution & Metrics Scripts',
    description: 'North star metrics, success measurement, and data-driven decision patterns. Know the keywords they score for.',
  },
  {
    title: 'Prioritization Templates',
    description: 'Roadmap tradeoffs, resource allocation, and stakeholder alignment—structured to show PM judgment.',
  },
  {
    title: 'Behavioral STAR+',
    description: 'Enhanced STAR format for influence, conflict, and cross-functional stories. What "strong hire" looks like.',
  },
  {
    title: 'Estimation & Strategy',
    description: 'Market sizing shortcuts and competitive analysis structures. Fast, defensible, interview-ready.',
  },
  {
    title: 'Self-Scoring Rubrics',
    description: 'Grade your own answers using interviewer criteria. Know where you land before the real thing.',
  },
];

export function PMWhatsInside() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">PM Interview Protocol v2.0</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What's Inside the Protocol
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to walk into your PM interview knowing exactly what they're scoring.
            Organized by interview type. Zero theory—just the system.
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
