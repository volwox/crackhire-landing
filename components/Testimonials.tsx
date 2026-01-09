import { Card } from './Card';
import { TESTIMONIALS, PM_TESTIMONIALS } from '@/lib/constants';
import { StarIcon } from './Icons';

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
            What Candidates Are Saying
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from PM candidates who've used the playbook.
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
              <div className="flex gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="text-amber-400" />
                ))}
              </div>

              <blockquote className="flex-1 mb-6">
                <p className="text-slate-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <footer className="pt-4 border-t border-slate-800">
                <p className="text-sm">
                  <span className="text-slate-400">{testimonial.role}</span>
                  <span className="text-slate-600 mx-2">·</span>
                  <span className="text-slate-500">{testimonial.market}</span>
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
