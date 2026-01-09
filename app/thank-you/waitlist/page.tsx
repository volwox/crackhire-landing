import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ThankYouClient } from '../_components/ThankYouClient';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: "You're on the Waitlist — CrackHire",
  description: "You're on the list. We'll notify you when new role-specific playbooks launch.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/thank-you/waitlist`,
  },
};

export default function ThankYouWaitlistPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouClient type="waitlist" />
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
