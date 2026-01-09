'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackCTA } from '@/lib/analytics';
import { TALLY_PM_URL, TALLY_WAITLIST_URL } from '@/lib/constants';
import { ArrowRightIcon } from '@/components/Icons';

export default function NotFound() {
  const pathname = usePathname();

  const onHome = () => trackCTA('404_home', pathname);
  const onPM = () => trackCTA('404_pm', pathname);
  const onWaitlist = () => trackCTA('404_waitlist', pathname);

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 108, 241, 0.18), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 104, 71, 0.10), transparent)
          `,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center min-h-screen">
        <div className="w-full text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-300 text-2xl">✓</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            This page doesn&apos;t exist.
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            The link may be broken, or the page may have been moved. Choose your next step below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              onClick={onHome}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition font-medium"
            >
              Back to Home
            </Link>

            <a
              href={TALLY_PM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPM}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 transition font-medium text-white"
            >
              Start PM Prep Now
              <ArrowRightIcon size={18} className="ml-2" />
            </a>
          </div>

          <div className="mt-7">
            <a
              href={TALLY_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onWaitlist}
              className="inline-flex items-center justify-center text-sm text-slate-300 hover:text-white transition underline underline-offset-4 decoration-slate-600 hover:decoration-slate-300"
            >
              Join the waitlist for upcoming roles
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-10">
            Need help? support@crackhire.com
          </p>
        </div>
      </div>
    </main>
  );
}
