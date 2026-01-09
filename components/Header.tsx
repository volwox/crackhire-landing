'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { TALLY_URL } from '@/lib/constants';
import { trackCTA } from '@/lib/analytics';

export function Header() {
  const pathname = usePathname();

  const handleCTAClick = () => {
    trackCTA('header', pathname);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" role="navigation" aria-label="Main">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Crack</span>
              <span className="text-accent-500">Hire</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/pm" 
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              PM Playbook
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/#pricing" 
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/#faq" 
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>

          <Button
            href={TALLY_URL}
            external
            size="sm"
            onClick={handleCTAClick}
          >
            Get the Playbook
          </Button>
        </nav>
      </div>
    </header>
  );
}
