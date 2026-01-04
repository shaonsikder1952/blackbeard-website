import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-foreground-muted mb-8 sm:mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-foreground-muted leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p className="mb-3">This Privacy Policy explains how <strong>Sikder LLC</strong> ("we", "us", or "our") collects, uses, and protects information when you use <strong>BBRewrite</strong>.</p>
            <p>BBRewrite is a software product operated by Sikder LLC.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">Account Information</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Email address and basic account details if you create an account</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">User Content</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Text that you voluntarily submit for rewriting</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">Usage Data</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Basic technical and usage information such as request volume, feature usage, and error logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">3. How We Use Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and operate the BBRewrite service</li>
              <li>Process rewrite requests and return results</li>
              <li>Maintain security, performance, and reliability</li>
              <li>Improve features and user experience</li>
              <li>Respond to support and privacy-related requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">4. Content Processing and Storage</h2>
            <p className="mb-3">Text submitted for rewriting is processed automatically. Content may be temporarily stored for service operation, quality improvement, debugging, or abuse prevention.</p>
            <p>We do not sell user content or use it for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">5. Legal Basis for Processing (EU Users)</h2>
            <p className="mb-3">For users in the European Union, we process personal data based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Performance of a contract (providing the service)</li>
              <li>Legitimate interests (service improvement, security, and abuse prevention)</li>
              <li>User consent where required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">6. Data Sharing</h2>
            <p className="mb-3">We do not sell personal data.</p>
            <p className="mb-3">We may share limited information with trusted third-party service providers solely for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>Hosting and infrastructure</li>
              <li>Analytics and monitoring</li>
              <li>Payment processing</li>
              <li>AI processing required to deliver the service</li>
            </ul>
            <p>These providers are required to protect data and use it only for the intended purpose.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">7. International Data Transfers</h2>
            <p>Your information may be processed in countries outside your own. Where required, appropriate safeguards are used to protect data in accordance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">8. Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect personal data against unauthorized access, loss, or misuse. However, no system is completely secure.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">9. Data Retention</h2>
            <p className="mb-3">We retain personal data only for as long as necessary to operate the service, comply with legal obligations, resolve disputes, and enforce agreements.</p>
            <p>You may request deletion of your account and associated data by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">10. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
            </ul>
            <p>Requests can be made by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">11. Children's Privacy</h2>
            <p>BBRewrite is not intended for use by individuals under the age of 13. We do not knowingly collect personal data from children.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Continued use of BBRewrite after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">13. Contact</h2>
            <p>For privacy-related questions or requests, contact:</p>
            <p className="mt-2">
              Email: <a href="mailto:bbrewrite@gmail.com" className="text-brand-primary hover:underline">bbrewrite@gmail.com</a>
            </p>
          </section>

          <section className="pt-8 border-t border-border/50">
            <p className="text-sm text-foreground-subtle">© 2026 Sikder LLC. BBRewrite is a product operated by Sikder LLC. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
