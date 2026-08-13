import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Terms of Use | iPadAGirl" };

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">LEGAL</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-4">Terms of Use</h1>
            <p className="text-on-surface-variant font-body-md">Last updated: August 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-10 font-body-md text-on-surface-variant leading-relaxed">

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using the Project iPadAGirl website (ipadagirl.vercel.app), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">2. About Project iPadAGirl</h2>
                <p>Project iPadAGirl is a social initiative founded by Zzini Oluchi Ekeh. This website is operated to share information about our mission, accept donations, process outreach applications and provide educational resources on menstrual health. We are not a registered charity but operate as a Social Impact Organization committed to transparency and accountability.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">3. Use of This Website</h2>
                <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Use the website in any way that violates applicable Nigerian or international law</li>
                  <li>Transmit unsolicited or spam communications</li>
                  <li>Attempt to gain unauthorised access to any part of the website</li>
                  <li>Post or transmit harmful, offensive or misleading content</li>
                  <li>Reproduce, copy or redistribute our content without prior written permission</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">4. Educational Content</h2>
                <p>The health and educational content on this website, including the Girls&apos; Learning Hub, is provided for general informational purposes only. It is not intended to replace professional medical advice, diagnosis or treatment. Always seek the advice of a qualified health professional with any questions you may have regarding a medical condition.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">5. Donations</h2>
                <p>Donations made through this website are used to fund outreach activities, hygiene kit procurement and operational costs of Project iPadAGirl. Donations are voluntary and non-refundable unless there has been an error in processing. We are committed to transparency in how donations are used and publish impact reports after each outreach.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">6. Outreach Applications</h2>
                <p>Submitting an outreach application does not guarantee a visit. Applications are reviewed by our team based on need, capacity and logistics. We reserve the right to decline or defer any application. Approved schools will be contacted directly with further details.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">7. Intellectual Property</h2>
                <p>All content on this website, including text, photographs, graphics, logos and design, is the property of Project iPadAGirl or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works without express written permission.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">8. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites including press articles, social media platforms and partner organisations. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">9. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Project iPadAGirl shall not be liable for any indirect, incidental or consequential loss or damage arising from your use of this website or reliance on any content or information provided on it.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">10. Changes to These Terms</h2>
                <p>We reserve the right to update these Terms of Use at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">11. Governing Law</h2>
                <p>These Terms of Use are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from the use of this website shall be subject to the jurisdiction of the Nigerian courts.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">12. Contact</h2>
                <p>For questions about these Terms of Use, contact us at <a href="mailto:letspadagirlnow@gmail.com" className="text-coral-warm hover:underline">letspadagirlnow@gmail.com</a>.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
