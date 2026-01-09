'use client';

import { Card } from '@/components/Card';
import { CheckIcon, TargetIcon } from '@/components/Icons';

export function PMProblemSolution() {
  const problems = [
    'Product sense questions feel ambiguous—no clear structure',
    'Metrics and prioritization answers lack depth',
    'Stakeholder and tradeoff scenarios catch you off guard',
    'No way to self-evaluate before the real interview',
  ];

  const solutions = [
    'Structured frameworks for product sense, execution, and strategy',
    'Metrics exercises with north star and tradeoff analysis',
    'Stakeholder alignment scenarios with sample responses',
    'Self-scoring rubrics—know exactly where you stand',
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            PM Interviews Are{' '}
            <span className="text-slate-500">Uniquely Difficult</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Product sense, execution, metrics, stakeholders—PM interviews cover a lot.
            Generic prep won't cut it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card variant="bordered" padding="lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-xl" aria-hidden="true">✕</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Common PM Prep Mistakes</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2" aria-hidden="true" />
                  <span className="text-slate-400">{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="elevated" padding="lg" className="border-brand-600/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                <TargetIcon size={20} className="text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">The PM Playbook Approach</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon size={20} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                  <span className="text-slate-300">{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
