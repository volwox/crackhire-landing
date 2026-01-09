import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_CONFIG.name}`,
};

/**
 * Terms of Service page
 * Basic boilerplate structure (not legal advice)
 */
export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                By accessing or using {SITE_CONFIG.name} (the Service), you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not 
                use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-slate-400 leading-relaxed">
                {SITE_CONFIG.name} provides digital interview preparation materials, including 
                but not limited to playbooks, frameworks, and practice questions (Products). 
                These Products are delivered digitally and are accessible immediately upon purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Digital Products and Refunds</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                All Products sold through {SITE_CONFIG.name} are digital goods. Due to the 
                nature of digital products, we do not offer refunds once access has been granted. 
                By completing a purchase, you acknowledge and accept this policy.
              </p>
              <p className="text-slate-400 leading-relaxed">
                If you experience technical issues accessing your purchased Products, please 
                contact us at {SITE_CONFIG.supportEmail} and we will work to resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                All content, materials, and Products provided through {SITE_CONFIG.name} are 
                protected by copyright and other intellectual property laws. You may not 
                reproduce, distribute, modify, or create derivative works from our Products 
                without express written permission.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Products are licensed for personal, non-commercial use only. Sharing, reselling, 
                or distributing Products is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. User Conduct</h2>
              <p className="text-slate-400 leading-relaxed">
                You agree to use our Service only for lawful purposes and in accordance with 
                these Terms. You agree not to use our Service in any way that violates any 
                applicable law or regulation, or to engage in any conduct that restricts or 
                inhibits anyone else from using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-slate-400 leading-relaxed">
                Our Products are provided as-is and as-available. We make no warranties, 
                expressed or implied, regarding the effectiveness of our interview preparation 
                materials or any outcomes from using our Products. Interview success depends 
                on many factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-400 leading-relaxed">
                To the fullest extent permitted by law, {SITE_CONFIG.name} shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, or 
                any loss of profits or revenues, whether incurred directly or indirectly, or 
                any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users 
                of any material changes by updating the Last updated date at the top of this 
                page. Your continued use of the Service after changes constitutes acceptance 
                of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="text-slate-400 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
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
