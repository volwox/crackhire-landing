import { Card } from './Card';
import { TESTIMONIALS, PM_TESTIMONIALS } from '@/lib/constants';

interface TestimonialsProps {
  variant?: 'default' | 'pm';
}

export function Testimonials({ variant = 'default' }: TestimonialsProps) {
  const testimonials = variant === 'pm' ? PM_TESTIMONIALS : TESTIMONIALS;

  return (
    <section className="py-20 sm:py-28 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            From the Prep Trenches
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from candidates who used the protocol.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              variant="elevated" 
              padding="lg"
              className="flex flex-col"
            >
              {/* Discord-style header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {testimonial.handle.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">@{testimonial.handle}</p>
                  <p className="text-xs text-slate-500">{testimonial.role} · {testimonial.market}</p>
                </div>
              </div>

              {/* Chat message style quote */}
              <blockquote className="flex-1">
                <p className="text-slate-300 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>
              </blockquote>
            </Card>
          ))}
        </div>

        {/* Results disclaimer */}
        <p className="text-center text-xs text-slate-600 mt-8">
          Results vary. These are anecdotal experiences, not guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}
