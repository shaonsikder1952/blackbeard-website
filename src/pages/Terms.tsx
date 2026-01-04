const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-foreground-muted mb-8 sm:mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-foreground-muted leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">1. Legal Entity</h2>
            <p>BBRewrite is a software product operated by Sikder LLC. All references to "BBRewrite", "we", "us", or "our" refer to Sikder LLC.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>BBRewrite provides automated text rewriting using artificial intelligence. The service is a software tool only and does not provide legal, medical, financial, academic, or professional advice.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
            <p className="mb-3">You agree that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You own or have the right to use the content you submit</li>
              <li>You are solely responsible for reviewing, verifying, and using all generated output</li>
              <li>You will not use the service for unlawful, harmful, or abusive purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">4. Content Ownership</h2>
            <p>You retain full ownership of all content you submit and all content generated for you by BBRewrite. Sikder LLC does not claim ownership of user content.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">5. No Warranties</h2>
            <p className="mb-3">To the maximum extent permitted by applicable law, BBRewrite is provided on an "as is" and "as available" basis.</p>
            <p>Sikder LLC makes no warranties, express or implied, including but not limited to accuracy, reliability, fitness for a particular purpose, non-infringement, or uninterrupted availability. Where warranties cannot be excluded by law, they are limited to the minimum extent required.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by applicable law:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sikder LLC shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, including but not limited to loss of data, loss of profits, business interruption, reputational harm, or reliance on generated content.</li>
              <li>To the extent liability cannot be fully excluded, Sikder LLC's total aggregate liability for any claim arising out of or relating to BBRewrite shall be strictly limited to the total fees actually paid by the user to Sikder LLC in the twelve (12) months preceding the claim, or zero (0) if the user is using a free plan or has not paid any fees.</li>
              <li>No compensation, refunds, or damages are owed for free use of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">7. Service Availability</h2>
            <p>BBRewrite may be modified, interrupted, suspended, or discontinued at any time without notice. Sikder LLC is not responsible for downtime, data loss, or service interruptions.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">8. Third-Party Services</h2>
            <p>BBRewrite may rely on third-party services for infrastructure, analytics, payments, or AI processing. Sikder LLC is not responsible for failures or issues caused by third-party services beyond its reasonable control.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">9. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Sikder LLC from any claims, damages, losses, liabilities, or expenses arising from your use of BBRewrite, your content, or your violation of these Terms or applicable laws.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">10. Compliance With Laws</h2>
            <p>You are responsible for complying with all applicable local, national, and international laws. Sikder LLC does not represent that BBRewrite is lawful or appropriate for use in every jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">11. Governing Law</h2>
            <p>These Terms shall be governed by the laws applicable to Sikder LLC's place of registration, without regard to conflict-of-law principles. Mandatory consumer protection rights under applicable law remain unaffected.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">12. Severability</h2>
            <p>If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">13. Changes to Terms</h2>
            <p>Sikder LLC may update these Terms from time to time. Continued use of BBRewrite after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="pt-8 border-t border-border/50">
            <p className="text-sm text-foreground-subtle">© 2026 Sikder LLC. BBRewrite is a product operated by Sikder LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
