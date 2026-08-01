import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Transparency | iPadAGirl" };

export default function TransparencyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-wellbeing-teal/10 text-wellbeing-teal rounded-full font-label-md text-label-md mb-6">ACCOUNTABILITY</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Transparency</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Transparency is the heartbeat of our mission. We publish clear information about how donations are used, how programmes are delivered, and how we measure our impact.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: "analytics", color: "wellbeing-teal", title: "Impact Reports", desc: "Quarterly and annual reports showing funds received, products donated, schools visited and programme outcomes." },
                { icon: "account_balance_wallet", color: "coral-warm", title: "Financial Summaries", desc: "Clear breakdowns of how every donation is allocated across programme delivery, products, logistics and administration." },
                { icon: "verified", color: "dignity-purple", title: "Confirmed Partners", desc: "A published list of all confirmed organisational and corporate partners who support our work." },
                { icon: "policy", color: "secondary", title: "Safeguarding Policy", desc: "Our child protection and safeguarding policy, applicable to all staff, volunteers and partner organisations." },
                { icon: "gavel", color: "tertiary", title: "Donation Policy", desc: "Our policy on product and financial donations, including acceptance criteria, refunds and receipts." },
                { icon: "privacy_tip", color: "wellbeing-teal", title: "Privacy Policy", desc: "How we collect, store and use data from donors, volunteers, schools and beneficiaries." },
              ].map((item) => (
                <div key={item.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all">
                  <div className={`w-14 h-14 bg-${item.color}/10 text-${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed mb-4">{item.desc}</p>
                  <button className="text-dignity-purple font-label-md text-label-md inline-flex items-center gap-1">
                    VIEW DOCUMENT <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Allocation Display */}
            <div className="bg-ink-navy text-base-white rounded-3xl p-8 md:p-12">
              <h2 className="font-headline-md text-headline-md mb-2">How Your Donation Is Used</h2>
              <p className="text-surface-variant font-body-md mb-10">Indicative allocation â€” final figures are published in each impact report.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { pct: 55, label: "Hygiene Products", color: "bg-coral-warm" },
                  { pct: 20, label: "Education & Facilitators", color: "bg-dignity-purple" },
                  { pct: 15, label: "Transportation & Logistics", color: "bg-wellbeing-teal" },
                  { pct: 10, label: "Administration & Monitoring", color: "bg-secondary" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body-md text-surface-variant">{item.label}</span>
                      <span className="font-label-md text-coral-warm">{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complaints */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-6">Complaints Procedure</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              We are committed to addressing concerns from donors, volunteers, schools and community members promptly and fairly.
            </p>
            <div className="space-y-4">
              {[
                "Submit your concern in writing to hello@ipadagirl.org with the subject line 'Formal Complaint'.",
                "We will acknowledge your complaint within 3 working days.",
                "A full response will be provided within 15 working days.",
                "If you remain unsatisfied, escalation procedures are available.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-base-white p-6 rounded-2xl border border-surface-container-high">
                  <div className="w-8 h-8 bg-coral-warm/10 text-coral-warm rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="font-body-md text-on-surface-variant">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
