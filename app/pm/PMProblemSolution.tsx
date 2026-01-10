'use client';

import { Card } from '@/components/Card';
import { CheckIcon, TargetIcon } from '@/components/Icons';

export function PMProblemSolution() {
  const problems = [
    'Product sense questions feel like a guessing game—no clear structure',
    'You know the concepts but can\'t articulate tradeoffs under pressure',
    'Metrics answers lack the depth interviewers are scoring for',
    'No way to know if your answer was "strong hire" or "no hire"',
  ];

  const solutions = [
    'Fill-in-the-blank frameworks for every PM question type',
    'Tradeoff articulation templates that hit scoring criteria',
    'Metrics exercises with north star and success definition patterns',
    'Self-scoring rubrics—grade yourself before they do',
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why PM Interviews Feel{' '}
            <span className="text-red-400">Impossible to Crack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Product sense, execution, metrics, stakeholders—PM interviews cover everything.
            Without the evaluation criteria, you're guessing in the dark.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card variant="bordered" padding="lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-xl" aria-hidden="true">✕</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Why You're Getting Dinged</h3>
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
              <h3 className="text-xl font-semibold text-slate-200">The Protocol Approach</h3>
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
