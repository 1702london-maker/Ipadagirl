import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Partner With Us | iPadAGirl" };

export default function PartnerPage() {
  const partnerTypes = [
    { icon: "corporate_fare", color: "coral-warm", title: "Corporate Partners", desc: "Support through financial sponsorship, product donations, employee volunteering, transportation, media, and long-term programme funding." },
    { icon: "school", color: "dignity-purple", title: "Schools", desc: "Host our outreach programme and help identify students who need support. We handle the education and supplies." },
    { icon: "health_and_safety", color: "wellbeing-teal", title: "Healthcare Partners", desc: "Doctors, nurses, pharmacists and menstrual health educators can help review content and participate in sessions." },
    { icon: "diversity_3", color: "secondary", title: "NGOs & Community Organisations", desc: "Help identify underserved areas, coordinate local engagement and ensure culturally appropriate delivery." },
    { icon: "account_balance", color: "tertiary", title: "Government Partners", desc: "State ministries of education and health, local government authorities, women affairs departments, school boards and public health agencies." },
    { icon: "media_link", color: "coral-warm", title: "Media Partners", desc: "Help amplify our mission, raise awareness about period poverty, and share the stories of the girls we serve." },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-dignity-purple/10 text-dignity-purple rounded-full font-label-md text-label-md mb-6">PARTNERSHIPS</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Partner With Us</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Together, we can reach more girls in less time. iPadAGirl welcomes partnerships from businesses, schools, healthcare professionals, NGOs, governments and media organisations.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerTypes.map((p) => (
                <div key={p.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all">
                  <div className={`w-14 h-14 bg-${p.color}/10 text-${p.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{p.title}</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Current Partners */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6 text-center">
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-10">Our Current Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img src="/images/partners/aquila Media Logo.png" alt="Aquila Media" className="h-24 object-contain transition-all" />
              <img src="/images/partners/aquilaprinthub logo.png" alt="Aquila PrintHub" className="h-10 object-contain transition-all" />
            </div>
          </div>
        </section>


        {/* Partnership Form */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-4 text-center">Apply to Partner</h2>
              <p className="text-on-surface-variant text-center mb-10">Fill in the form below and our team will be in touch within 5 working days.</p>
              <form className="space-y-6 bg-base-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Organisation Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors" placeholder="Your organisation" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Sector *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors bg-base-white">
                      <option value="">Select sector</option>
                      <option>Corporate / Business</option>
                      <option>Healthcare</option>
                      <option>NGO / Non-profit</option>
                      <option>Government</option>
                      <option>Media</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Contact Person *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Type of Partnership</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors bg-base-white">
                    <option>Financial Sponsorship</option>
                    <option>Product Donation</option>
                    <option>Employee Volunteering</option>
                    <option>Transportation Support</option>
                    <option>Media & Publicity</option>
                    <option>Long-term Programme Funding</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors resize-none" placeholder="Tell us how you'd like to support iPadAGirl..." />
                </div>
                <button type="submit" className="w-full py-4 bg-dignity-purple text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Submit Partnership Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
