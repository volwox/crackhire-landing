import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { MailIcon, ShieldIcon, LockIcon, ZapIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trust strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 pb-8 border-b border-slate-800/50">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <LockIcon size={16} className="text-slate-500" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <ShieldIcon size={16} className="text-slate-500" />
            <span>Built for high-stakes interviews</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <ZapIcon size={16} className="text-slate-500" />
            <span>24-hour sprint available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Crack</span>
                <span className="text-accent-500">Hire</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm mb-4">
              Stop guessing what interviewers want. Get the exact frameworks, 
              scorecards, and scripts for Tier-1 PM interviews.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <MailIcon size={16} />
              {SITE_CONFIG.supportEmail}
            </a>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/pm" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  PM Protocol
                </Link>
              </li>
              <li>
                <Link 
                  href="/#how-it-works" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  href="/#pricing" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/#faq" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 text-center">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
