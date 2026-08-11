import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Safeguarding Policy | iPadAGirl" };

export default function SafeguardingPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">LEGAL</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-4">Safeguarding Policy</h1>
            <p className="text-on-surface-variant font-body-md">Last updated: August 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-10 font-body-md text-on-surface-variant leading-relaxed">

              <div className="bg-coral-warm/5 border border-coral-warm/20 rounded-2xl p-8">
                <p className="font-body-lg text-ink-navy font-medium">Project iPadAGirl is committed to creating a safe, respectful and empowering environment for every girl we serve. The welfare of children and young people is our highest priority in everything we do.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">1. Purpose and Scope</h2>
                <p>This Safeguarding Policy applies to all staff, volunteers, facilitators, partners and anyone who acts on behalf of Project iPadAGirl. It sets out our commitment to protecting the children and young people we work with from harm, abuse, exploitation and neglect.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">2. Our Commitment</h2>
                <p>Project iPadAGirl commits to:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Prioritising the safety and wellbeing of every child at every outreach and event</li>
                  <li>Ensuring all outreach activities are conducted in the presence of school staff and designated adult supervisors</li>
                  <li>Never conducting one-to-one sessions between an adult facilitator and a student in isolation</li>
                  <li>Treating every child with dignity, respect and sensitivity to her culture and individual needs</li>
                  <li>Taking all allegations or concerns of abuse seriously and responding promptly</li>
                  <li>Working in partnership with schools, parents and local authorities to safeguard children</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">3. Safe Behaviour Standards</h2>
                <p>All iPadAGirl representatives must:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Conduct themselves professionally and respectfully at all times in the presence of children</li>
                  <li>Never use language that shames, humiliates or demeans a student</li>
                  <li>Never photograph or film students without explicit permission from the school and parent or guardian</li>
                  <li>Never share personal contact details with students or solicit personal information from them</li>
                  <li>Never offer gifts, money or favours to individual students outside of approved kit distribution</li>
                  <li>Report any safeguarding concern immediately to the designated safeguarding lead</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">4. Outreach Safety Procedures</h2>
                <p>Before every outreach, Project iPadAGirl will:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc">
                  <li>Obtain written permission from the school principal or headteacher</li>
                  <li>Confirm that school staff will be present throughout the session</li>
                  <li>Brief all facilitators and volunteers on this safeguarding policy</li>
                  <li>Ensure sessions are delivered in open, visible spaces such as classrooms or assembly halls</li>
                  <li>Provide a safe channel for students to ask questions anonymously</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">5. Photography and Media Consent</h2>
                <p>Project iPadAGirl only uses photographs of students where written consent has been obtained from the school and, where required, from parents or guardians. Photos are used solely for impact reporting, awareness and fundraising purposes. No photographs showing distress, vulnerability or sensitive situations will ever be shared publicly.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">6. Reporting a Concern</h2>
                <p>Anyone who witnesses or suspects abuse, harm or inappropriate behaviour involving a child connected to our work should report it immediately. Do not attempt to investigate the concern yourself.</p>
                <div className="mt-4 bg-ink-navy text-base-white rounded-2xl p-6 space-y-2">
                  <p className="font-label-md text-coral-warm uppercase">Safeguarding Contact</p>
                  <p><strong>Email:</strong> letspadagirlnow@gmail.com</p>
                  <p><strong>Phone:</strong> +234 916 945 7000</p>
                  <p className="text-sm opacity-80 mt-2">All reports will be treated confidentially and with urgency. If a child is in immediate danger, contact local emergency services first.</p>
                </div>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">7. Volunteer and Staff Screening</h2>
                <p>All volunteers and staff who interact directly with students are required to complete a safeguarding induction before participating in any outreach. Where applicable, we conduct background reference checks. This policy must be read and acknowledged by all representatives before their first outreach.</p>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-4">8. Policy Review</h2>
                <p>This Safeguarding Policy is reviewed annually and updated whenever significant changes occur in our operations. All representatives will be notified of any updates.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
