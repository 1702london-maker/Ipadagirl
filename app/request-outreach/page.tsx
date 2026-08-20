"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RequestOutreachPage() {
  const [form, setForm] = useState({
    school_name: "", school_type: "", contact_person: "", position: "",
    email: "", phone: "", state: "", lga: "", address: "",
    estimated_girls: "", age_range: "", preferred_period: "", reason: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/outreach", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setStatus(res.ok ? "success" : "error");
  }

  const f = (k: keyof typeof form) => ({ value: form[k], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(p => ({ ...p, [k]: e.target.value })) });

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
                { title: "Submit Application", desc: "Fill in the form with your school details and estimated needs." },
                { title: "Review (5 Working Days)", desc: "Our team reviews each application based on need and capacity." },
                { title: "Confirmation & Planning", desc: "Approved schools receive a confirmation and we plan the visit together." },
                { title: "Outreach Day", desc: "We arrive with kits, trained facilitators and full education materials." },
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
              {status === "success" ? (
                <div className="bg-wellbeing-teal/10 border border-wellbeing-teal text-wellbeing-teal p-12 rounded-3xl text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                  <p className="font-headline-sm">Application received!</p>
                  <p className="font-body-md">Our team will review your request and be in touch within 10 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-base-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">School / Organisation Name *</label>
                      <input type="text" required {...f("school_name")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">School Type *</label>
                      <select required {...f("school_type")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors bg-base-white">
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
                      <input type="text" required {...f("contact_person")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Position / Role</label>
                      <input type="text" {...f("position")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                      <input type="email" required {...f("email")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Phone Number</label>
                      <input type="tel" {...f("phone")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">State *</label>
                      <input type="text" required {...f("state")} placeholder="e.g. Lagos" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Local Government Area</label>
                      <input type="text" {...f("lga")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Full School Address *</label>
                    <input type="text" required {...f("address")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Estimated Number of Girls *</label>
                      <input type="number" required min="1" {...f("estimated_girls")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Age Range / Classes</label>
                      <input type="text" {...f("age_range")} placeholder="e.g. JSS1-SSS3" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Preferred Outreach Period</label>
                    <input type="text" {...f("preferred_period")} placeholder="e.g. September 2026" className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Why Does Your School Need This Support?</label>
                    <textarea rows={4} {...f("reason")} className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors resize-none" placeholder="Tell us about your school community and the needs of your students..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required id="consent" className="mt-1" />
                    <label htmlFor="consent" className="font-body-md text-on-surface-variant text-sm">
                      I confirm that I am authorised to submit this application and give permission for iPadAGirl to contact the school regarding this request.
                    </label>
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                  <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-coral-warm text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
                    {status === "loading" ? "Submitting..." : "Submit Outreach Request"}
                  </button>
                  <p className="text-center text-sm text-on-surface-variant">Submitting this form does not guarantee an outreach. Our team will contact you within 10 working days.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
