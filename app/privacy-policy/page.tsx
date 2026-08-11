import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Privacy Policy | iPadAGirl" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">LEGAL</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-4">Privacy Policy</h1>
            <p className="text-on-surface-variant font-body-md">Last updated: August 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl prose prose-lg">
            <div className="space-y-10 font-body-md text-on-surface-variant leading-relaxed">

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">1. Who We Are</h2>
                <p>Project iPadAGirl is a social initiative founded by Zzini Oluchi Ekeh, dedicated to providing menstrual health education and hygiene kits to schoolgirls across Africa. Our contact details are:</p>
                <ul className="mt-3 space-y-1 list-none pl-0">
                  <li><strong>Email:</strong> letspadagirlnow@gmail.com</li>
                  <li><strong>Phone:</strong> +234 916 945 7000</li>
                  <li><strong>Social:</strong> @PadagirlwithZzini across all platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">2. What Information We Collect</h2>
                <p>We may collect the following personal information when you interact with our website or initiative:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Name, email address and phone number submitted via our contact or outreach request forms</li>
                  <li>School or organisation name and address submitted in outreach applications</li>
                  <li>Donation details processed through third-party payment providers</li>
                  <li>Anonymous questions submitted through the Girls Learning Hub</li>
                  <li>Volunteer application details including skills and availability</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Process and respond to outreach applications, partnership enquiries and volunteer registrations</li>
                  <li>Send updates about our mission, outreaches and impact (only where you have opted in)</li>
                  <li>Process donations and issue receipts</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
                <p className="mt-4">We will never sell, rent or trade your personal information to third parties for marketing purposes.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">4. Children&apos;s Privacy</h2>
                <p>Project iPadAGirl serves schoolgirls and works closely with minors. We are committed to protecting their privacy. We do not knowingly collect personal data directly from children under 13. All school outreach data is collected through the school or parent, not directly from students. The Girls Learning Hub anonymous question form does not collect any identifying information.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">5. Data Storage and Security</h2>
                <p>Your data is stored securely and we take reasonable technical and organisational measures to protect it against loss, misuse or unauthorised access. Data submitted through this website may be stored on secure cloud servers. We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">6. Photographs and Media</h2>
                <p>Photos taken at our outreaches are used for impact reporting and awareness-raising on our website and social media. We obtain consent from schools and parents before publishing photographs that include students. If you would like a photograph removed, please contact us at letspadagirlnow@gmail.com.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, contact us at letspadagirlnow@gmail.com.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">8. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites, press articles and social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the website after changes are posted constitutes acceptance of the updated policy.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:letspadagirlnow@gmail.com" className="text-coral-warm hover:underline">letspadagirlnow@gmail.com</a>.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
