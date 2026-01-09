'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Badge } from './Badge';
import { ArrowRightIcon, ZapIcon } from './Icons';
import { TALLY_PM_URL, TALLY_WAITLIST_URL } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';

interface HeroProps {
  variant?: 'home' | 'pm';
}

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Hero({ variant = 'home' }: HeroProps) {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isPM = variant === 'pm';

  const handlePrimaryCTA = () => {
    trackCTA('hero_primary', pathname);
    // same-tab navigation handled by <a href=...> in Button
  };

  const handleSecondaryCTA = () => {
    trackCTA('hero_secondary', pathname);
    // same-tab navigation handled by <a href=...> in Button
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Please enter your email');
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    // Track before redirect
    trackCTA('hero_email_form', pathname);

    // Same-tab redirect (better conversion than window.open)
    window.location.href = TALLY_WAITLIST_URL;
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 108, 241, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 104, 71, 0.08), transparent)
          `,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <Badge variant="accent" icon={<ZapIcon size={14} />}>
              {isPM ? '24–48 Hour PM Prep Sprint' : 'Role-Specific Interview Prep'}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            {isPM ? (
              <>
                Ace Your <span className="gradient-text">Product Manager</span> Interview
              </>
            ) : (
              <>
                Cut the Noise. <span className="gradient-text">Win the Interview.</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            {isPM ? (
              <>
                Structured questions, scoring rubrics, and answer frameworks for product sense,
                execution, and behavioral rounds. Prep in 24–48 hours, not weeks.
              </>
            ) : (
              <>
                Role-specific playbooks with structured questions, self-scoring rubrics,
                and proven answer frameworks. Signal over noise. Clarity over chaos.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in-up animation-delay-200">
            <Button href={TALLY_PM_URL} size="lg" onClick={handlePrimaryCTA}>
              Get the PM Playbook — $29
              <ArrowRightIcon size={20} className="ml-1" />
            </Button>

            <Button
              href={TALLY_WAITLIST_URL}
              variant="secondary"
              size="lg"
              onClick={handleSecondaryCTA}
            >
              Join Waitlist for New Roles
            </Button>
          </div>

          {/* Email capture form */}
          <div className="animate-fade-in-up animation-delay-300">
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleEmailSubmit}
              noValidate
            >
              <div className="flex-1">
                <label htmlFor="hero-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${
                    emailError ? 'border-red-500' : 'border-slate-700'
                  }`}
                  aria-describedby={emailError ? 'hero-email-error' : undefined}
                  aria-invalid={emailError ? 'true' : 'false'}
                />
                {emailError && (
                  <p id="hero-email-error" className="text-red-400 text-sm mt-1 text-left">
                    {emailError}
                  </p>
                )}
              </div>

              <Button type="submit" size="md">
                Notify Me
              </Button>
            </form>

            <p className="text-xs text-slate-500 mt-3">
              Be first to know when we launch new role playbooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
