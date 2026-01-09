import { Card } from './Card';
import { Badge } from './Badge';
import { PLAYBOOK_CONTENTS } from '@/lib/constants';
import { CheckIcon } from './Icons';

/**
 * What's Inside the PM Playbook section
 * Grid of features/contents
 */
export function WhatsInside() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">PM Interview Playbook</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What's Inside
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to walk into your PM interview with confidence.
            No fluff, just the frameworks that matter.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYBOOK_CONTENTS.map((item, index) => (
            <Card 
              key={index} 
              variant="default" 
              padding="md"
              hover
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <CheckIcon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
