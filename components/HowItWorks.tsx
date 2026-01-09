import { Card } from './Card';
import { HOW_IT_WORKS } from '@/lib/constants';
import { ZapIcon, BookIcon, ClipboardIcon } from './Icons';

/**
 * How it works section
 * Three-step process visualization
 */
export function HowItWorks() {
  // Map step numbers to icons
  const stepIcons = [ZapIcon, BookIcon, ClipboardIcon];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From purchase to interview-ready in as little as 24 hours.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS.map((item, index) => {
            const IconComponent = stepIcons[index];
            return (
              <Card 
                key={item.step} 
                variant="glass" 
                padding="lg"
                hover
                className="relative"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-sm font-bold text-white shadow-glow">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-brand-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Connecting line (desktop only) */}
        <div className="hidden md:block relative h-0.5 bg-gradient-to-r from-transparent via-brand-600/30 to-transparent mt-8" />
      </div>
    </section>
  );
}
