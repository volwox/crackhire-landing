import Link from 'next/link';
import { Button } from '@/components/Button';
import { TALLY_PM_URL, TALLY_WAITLIST_URL, SITE_CONFIG } from '@/lib/constants';
import { ArrowRightIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-950">
      {/* Background gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 108, 241, 0.1), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 104, 71, 0.05), transparent)
          `,
        }}
        aria-hidden="true"
      />

      <main className="max-w-lg w-full text-center" role="main">
        {/* 404 badge */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 border border-slate-700">
            <span className="text-3xl font-bold text-slate-400">404</span>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Crack</span>
            <span className="text-accent-500">Hire</span>
          </span>
        </Link>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          This page doesn't exist.
        </h1>

        {/* Body copy */}
        <p className="text-lg text-slate-400 mb-10">
          The page you're looking for has been moved, deleted, or never existed.
          Let's get you back on track.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button href="/" size="lg">
            Back to Home
          </Button>

          <Button href={TALLY_PM_URL} external variant="primary" size="lg">
            Start PM Prep Now
            <ArrowRightIcon size={18} className="ml-1" />
          </Button>
        </div>

        {/* Secondary link */}
        <div className="mb-12">
          <a
            href={TALLY_WAITLIST_URL}
            className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4"
          >
            Join the waitlist for upcoming roles
          </a>
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
