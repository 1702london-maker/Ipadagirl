"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VolunteerPage() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", role: "", skills: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/volunteer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-wellbeing-teal/10">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-wellbeing-teal/10 text-wellbeing-teal rounded-full font-label-md text-label-md mb-6">JOIN THE TEAM</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Volunteer with iPadAGirl</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our volunteers are the heartbeat of every outreach. Whether you can give a day or a year, your contribution directly helps girls access dignity and education.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-12 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "group", color: "coral-warm", title: "Outreach Volunteer", desc: "Join us on the day of a school visit to help with distribution, crowd management and general support." },
                { icon: "health_and_safety", color: "wellbeing-teal", title: "Health Educator", desc: "Qualified nurses, doctors or trained educators can lead or assist with menstrual health sessions." },
                { icon: "school", color: "dignity-purple", title: "School Liaison", desc: "Help us connect with schools in your area and coordinate outreach logistics on the ground." },
                { icon: "photo_camera", color: "secondary", title: "Photography & Media", desc: "Document our outreaches respectfully and help us create compelling content for social media and reports." },
                { icon: "local_shipping", color: "tertiary", title: "Logistics Volunteer", desc: "Help pack, transport and organise hygiene kits before and during outreach events." },
                { icon: "campaign", color: "coral-warm", title: "Fundraising Volunteer", desc: "Help us run campaigns, approach donors and spread the word in your community or workplace." },
              ].map((r) => (
                <div key={r.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all">
                  <div className={`w-14 h-14 bg-${r.color}/10 text-${r.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{r.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{r.title}</h3>
                  <p className="text-on-surface-variant font-body-md">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-4 text-center">Register as a Volunteer</h2>
              <p className="text-on-surface-variant text-center mb-10">Volunteers working directly with children must provide valid ID and complete a safeguarding briefing before any outreach.</p>
              {status === "success" ? (
                <div className="bg-wellbeing-teal/10 border border-wellbeing-teal text-wellbeing-teal p-8 rounded-3xl text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                  <p className="font-headline-sm">Application received!</p>
                  <p className="font-body-md">We&apos;ll be in touch within 5 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-base-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Full Name *</label>
                      <input type="text" required value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-wellbeing-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                      <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-wellbeing-teal transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-wellbeing-teal transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Volunteer Role *</label>
                    <select required value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-wellbeing-teal transition-colors bg-base-white">
                      <option value="">Select a role</option>
                      <option>Outreach Volunteer</option>
                      <option>Health Educator</option>
                      <option>School Liaison</option>
                      <option>Photography &amp; Media</option>
                      <option>Logistics Volunteer</option>
                      <option>Fundraising Volunteer</option>
                      <option>Administrative Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Relevant Skills / Qualifications</label>
                    <textarea rows={3} value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-wellbeing-teal transition-colors resize-none" placeholder="Tell us about your relevant experience..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required id="safeguard" className="mt-1" />
                    <label htmlFor="safeguard" className="font-body-md text-on-surface-variant text-sm">
                      I understand that volunteers working with children must undergo safeguarding training and provide valid ID before participating in any outreach.
                    </label>
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full py-4 bg-wellbeing-teal text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
                    {status === "loading" ? "Submitting..." : "Submit Volunteer Application"}
                  </button>
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
