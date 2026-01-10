import { SOCIAL_PROOF_COMPANIES } from '@/lib/constants';

/**
 * Social proof strip showing target company types
 * Uses generic text - no specific company names for legal safety
 */
export function SocialProofStrip() {
  return (
    <section className="py-12 border-y border-slate-800/50 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-6">
          Used by candidates prepping for interviews at
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {SOCIAL_PROOF_COMPANIES.map((company) => (
            <span
              key={company}
              className="text-slate-400 font-semibold text-sm tracking-wide uppercase"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
