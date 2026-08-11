﻿import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Request an Outreach | iPadAGirl" };

export default function RequestOutreachPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">SCHOOL APPLICATIONS</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Request an Outreach</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Schools, community leaders and organisations can apply for an iPadAGirl outreach. Submitting this form does not automatically guarantee a visit — our team will review each application and be in touch.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h2 className="font-headline-sm text-headline-sm text-ink-navy">What to Expect</h2>
              {[
                { icon: "assignment", title: "Submit Application", desc: "Fill in the form with your school details and estimated needs." },
                { icon: "schedule", title: "Review (5 Working Days)", desc: "Our team reviews each application based on need and capacity." },
                { icon: "handshake", title: "Confirmation & Planning", desc: "Approved schools receive a confirmation and we plan the visit together." },
                { icon: "volunteer_activism", title: "Outreach Day", desc: "We arrive with kits, trained facilitators and full education materials." },
              ].map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral-warm/10 text-coral-warm rounded-xl flex items-center justify-center flex-shrink-0 font-bold font-label-md">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-label-md text-ink-navy">{step.title}</p>
                    <p className="font-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <form className="space-y-6 bg-base-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">School / Organisation Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">School Type *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors bg-base-white">
                      <option value="">Select type</option>
                      <option>Public Secondary School</option>
                      <option>Private Secondary School</option>
                      <option>Community Organisation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Contact Person *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Position / Role</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">State *</label>
                    <input type="text" required placeholder="e.g. Lagos" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Local Government Area</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Full School Address *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Estimated Number of Girls *</label>
                    <input type="number" required min="1" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Age Range / Classes</label>
                    <input type="text" placeholder="e.g. JSS1-SSS3" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Preferred Outreach Period</label>
                  <input type="text" placeholder="e.g. September 2026" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Why Does Your School Need This Support?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors resize-none" placeholder="Tell us about your school community and the needs of your students..." />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" required id="consent" className="mt-1" />
                  <label htmlFor="consent" className="font-body-md text-on-surface-variant text-sm">
                    I confirm that I am authorised to submit this application and give permission for iPadAGirl to contact the school regarding this request.
                  </label>
                </div>
                <button type="submit" className="w-full py-4 bg-coral-warm text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Submit Outreach Request
                </button>
                <p className="text-center text-sm text-on-surface-variant">Submitting this form does not guarantee an outreach. Our team will contact you within 10 working days.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
