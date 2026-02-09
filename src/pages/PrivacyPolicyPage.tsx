import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "data-sharing", title: "4. Data Sharing & Disclosure" },
  { id: "data-retention", title: "5. Data Retention" },
  { id: "data-security", title: "6. Data Security" },
  { id: "your-rights", title: "7. Your Rights" },
  { id: "childrens-privacy", title: "8. Children's Privacy" },
  { id: "cookies", title: "9. Cookies & Tracking" },
  { id: "changes", title: "10. Changes to This Policy" },
  { id: "contact", title: "11. Contact Us" },
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted border-b border-border">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold font-display text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Your privacy is important to us. This policy explains how Koredu collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: February 9, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <aside className="lg:w-64 shrink-0">
            <nav className="lg:sticky lg:top-28">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-3xl prose-section"
          >
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Koredu ("we," "our," or "us") is committed to protecting the privacy of students, educators, parents, and school administrators who use our platform. This Privacy Policy describes how we collect, use, store, and share your personal information when you access or use our school management services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Koredu, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our services.
              </p>
            </section>

            <section id="information-we-collect" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Account registration details (name, email address, phone number)</li>
                <li>School and institutional information</li>
                <li>Student records, grades, and academic data</li>
                <li>Staff employment and contact information</li>
                <li>Payment and billing information</li>
                <li>Communications and support inquiries</li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device information (browser type, operating system, device identifiers)</li>
                <li>Usage data (pages visited, features used, session duration)</li>
                <li>IP address and approximate geographic location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our school management platform</li>
                <li>Process transactions and manage subscriptions</li>
                <li>Send administrative notifications and service updates</li>
                <li>Respond to customer support requests</li>
                <li>Analyse usage patterns to improve our services</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service providers</strong> who assist in operating our platform (hosting, analytics, payment processing)</li>
                <li><strong>School administrators</strong> within the institution who require access for educational purposes</li>
                <li><strong>Legal authorities</strong> when required by law, regulation, or legal process</li>
                <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section id="data-retention" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide our services. When data is no longer required, we will securely delete or anonymise it. Schools may request the export or deletion of their data at any time by contacting our support team.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including encryption in transit (TLS/SSL) and at rest, regular security audits, role-based access controls, and secure data centres. While no method of transmission over the internet is 100% secure, we strive to use commercially acceptable means to protect your data.
              </p>
            </section>

            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Access</strong> — Request a copy of the personal data we hold about you</li>
                <li><strong>Rectification</strong> — Request correction of inaccurate or incomplete data</li>
                <li><strong>Erasure</strong> — Request deletion of your personal data</li>
                <li><strong>Restriction</strong> — Request that we limit processing of your data</li>
                <li><strong>Portability</strong> — Request your data in a structured, machine-readable format</li>
                <li><strong>Objection</strong> — Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@koredu.com" className="text-primary hover:underline">privacy@koredu.com</a>.
              </p>
            </section>

            <section id="childrens-privacy" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Koredu processes student data on behalf of educational institutions. We do not knowingly collect personal information directly from children under 13 without appropriate parental or school consent. Schools are responsible for obtaining necessary consents before entering student data into our platform.
              </p>
            </section>

            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">9. Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, remember preferences, and analyse platform usage. You can control cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li><strong>Essential cookies</strong> — Required for platform functionality</li>
                <li><strong>Analytics cookies</strong> — Help us understand usage patterns</li>
                <li><strong>Preference cookies</strong> — Remember your settings and choices</li>
              </ul>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of Koredu after changes are posted constitutes acceptance of the revised policy.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold font-display text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted rounded-xl p-6 text-muted-foreground space-y-2">
                <p><strong className="text-foreground">Koredu</strong></p>
                <p>Email: <a href="mailto:privacy@koredu.com" className="text-primary hover:underline">privacy@koredu.com</a></p>
                <p>Phone: +234 123 456 7890</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </section>

            {/* Related Links */}
            <div className="border-t border-border pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                See also:{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" · "}
                <Link to="/security" className="text-primary hover:underline">Security</Link>
                {" · "}
                <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
