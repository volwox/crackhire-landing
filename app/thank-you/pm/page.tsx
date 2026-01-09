import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ThankYouClient } from '../_components/ThankYouClient';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Welcome — PM Playbook Access',
  description: 'Your PM Interview Playbook access is confirmed. Check your email for next steps.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/thank-you/pm`,
  },
};

export default function ThankYouPMPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouClient type="pm" />
    </Suspense>
  );
}

function ThankYouFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-slate-400">Loading...</div>
    </div>
  );
}
