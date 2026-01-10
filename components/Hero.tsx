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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Hero({ variant = 'home' }: HeroProps) {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isPM = variant === 'pm';

  const handlePrimaryCTA = () => {
    trackCTA('hero_primary', pathname);
  };

  const handleSecondaryCTA = () => {
    trackCTA('hero_secondary_waitlist', pathname);
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

    // Simple success state - no redirect, no external submission
    trackCTA('hero_notify_submit', pathname);
    setSubmitted(true);
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
              {isPM ? '24-Hour Emergency Sprint Available' : 'PM Interview Protocol v2.0'}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            {isPM ? (
              <>
                Don't Just Prep. <span className="gradient-text">Crack the Code.</span>
              </>
            ) : (
              <>
                Stop Guessing. <span className="gradient-text">Start Scoring.</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            {isPM ? (
              <>
                Learn the evaluation format. Use the same scorecards interviewers use.
                Fill-in-the-blank frameworks that hit every criteria. Prep in 24 hours, not weeks.
              </>
            ) : (
              <>
                The exact frameworks, scorecards, and scripts for Tier-1 PM interviews.
                Know what "strong hire" looks like—before they score you.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-fade-in-up animation-delay-200">
            <Button href={TALLY_PM_URL} external size="lg" onClick={handlePrimaryCTA}>
              Get the PM Cheat Sheet — $29
              <ArrowRightIcon size={20} className="ml-1" />
            </Button>

            <Button
              href={TALLY_WAITLIST_URL}
              external
              variant="secondary"
              size="lg"
              onClick={handleSecondaryCTA}
            >
              Join Waitlist for New Roles
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-slate-500 mb-10 animate-fade-in-up animation-delay-200">
            Built for Tier-1 PM loops and high-signal interviews.
          </p>

          {/* Email capture form - NO redirect, success state only */}
          <div className="animate-fade-in-up animation-delay-300">
            {!submitted ? (
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
            ) : (
              <div className="max-w-md mx-auto text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 font-medium mb-2">
                  Thanks — you're on the list.
                </p>
                <p className="text-sm text-slate-400">
                  Want the full waitlist experience?{' '}
                  <a 
                    href={TALLY_WAITLIST_URL} 
                    className="text-brand-400 hover:text-brand-300 underline"
                  >
                    Join the official waitlist
                  </a>
                </p>
              </div>
            )}

            {!submitted && (
              <p className="text-xs text-slate-500 mt-3">
                Get notified when we launch new role-specific protocols.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
