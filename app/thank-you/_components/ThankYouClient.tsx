'use client';

import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ArrowRightIcon } from '@/components/Icons';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPageView, trackThankYouCTA } from '@/lib/analytics';

type ThankYouType = 'pm' | 'waitlist';

interface ThankYouConfig {
  headline: string;
  bodyLines: string[];
  ctaText: string;
  ctaPath: string;
  viewEvent: string;
}

const CONFIG: Record<ThankYouType, ThankYouConfig> = {
  pm: {
    headline: "You're in.",
    bodyLines: [
      "We'll email you your next steps and access details shortly.",
      'If your interview is within 48 hours, reply to the email with "48H" so we can prioritize your prep path.',
    ],
    ctaText: 'Go to PM Playbook',
    ctaPath: '/pm',
    viewEvent: 'thankyou_pm_view',
  },
  waitlist: {
    headline: "You're on the list.",
    bodyLines: [
      "We'll notify you when new role-specific playbooks launch.",
      'Want PM prep now? Get the PM Playbook.',
    ],
    ctaText: 'Explore the PM Playbook',
    ctaPath: '/pm',
    viewEvent: 'thankyou_waitlist_view',
  },
};

interface ThankYouClientProps {
  type: ThankYouType;
}

export function ThankYouClient({ type }: ThankYouClientProps) {
  const searchParams = useSearchParams();
  const config = CONFIG[type];

  // Build CTA URL with preserved UTM params
  const ctaUrl = useMemo(() => {
    const utmParams = ['utm_source', 'utm_campaign', 'utm_content', 'utm_term', 'utm_medium'];
    const preservedParams = new URLSearchParams();

    utmParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        preservedParams.set(param, value);
      }
    });

    const queryString = preservedParams.toString();
    const baseUrl = `${SITE_CONFIG.url}${config.ctaPath}`;
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  }, [searchParams, config.ctaPath]);

  // Track page view on mount
  useEffect(() => {
    trackPageView(config.viewEvent);
  }, [config.viewEvent]);

  const handleCTAClick = () => {
    trackThankYouCTA(type);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 108, 241, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 104, 71, 0.08), transparent)
          `,
        }}
        aria-hidden="true"
      />

      <main className="max-w-lg w-full text-center" role="main">
        {/* Checkmark icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <svg
              className="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          {config.headline}
        </h1>

        {/* Body copy */}
        <div className="space-y-4 mb-10">
          {config.bodyLines.map((line, index) => (
            <p key={index} className="text-lg text-slate-400">
              {line}
            </p>
          ))}
        </div>

        {/* Primary CTA */}
        <Button
          href={ctaUrl}
          size="lg"
          onClick={handleCTAClick}
          className="mb-4"
        >
          {config.ctaText}
          <ArrowRightIcon size={20} className="ml-1" />
        </Button>

        {/* Secondary link */}
        <div className="mb-12">
          <Link
            href={SITE_CONFIG.url}
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to home
          </Link>
        </div>

        {/* Support line */}
        <p className="text-sm text-slate-500">
          Need help?{' '}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </main>
    </div>
  );
}
