import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_CONFIG.name}`,
};

/**
 * Privacy Policy page
 * Basic boilerplate structure (not legal advice)
 */
export default function PrivacyPage() {
  const lastUpdated = 'January 2025';

  return (
    <>
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="text-sm text-slate-400 hover:text-white transition-colors mb-4 inline-block"
            >
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-slate-400 leading-relaxed">
                {SITE_CONFIG.name} (we, us, our) respects your privacy and is committed to 
                protecting your personal data. This Privacy Policy explains how we collect, 
                use, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Email address (when you sign up for our waitlist or make a purchase)</li>
                <li>Payment information (processed securely through our payment provider)</li>
                <li>Usage data (how you interact with our website)</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Provide and deliver our Products to you</li>
                <li>Process your transactions</li>
                <li>Send you important updates about your purchase</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p className="text-slate-400 leading-relaxed">
                We do not sell your personal information. We may share your information with 
                trusted third-party service providers who assist us in operating our website, 
                processing payments, and delivering our services. These providers are obligated 
                to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-slate-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="text-slate-400 leading-relaxed">
                We may use cookies and similar tracking technologies to collect information about 
                your browsing activities. You can control cookie preferences through your browser 
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal 
                data, including:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Data Retention</h2>
              <p className="text-slate-400 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the 
                purposes for which it was collected, including to satisfy any legal, accounting, 
                or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the Last 
                updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
              <p className="text-slate-400 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at{' '}
                <a 
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="text-brand-400 hover:text-brand-300 transition-colors"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
