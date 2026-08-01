import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Contact Us | iPadAGirl" };

export default function ContactPage() {
  const contacts = [
    { icon: "mail", color: "coral-warm", label: "General Enquiries", email: "hello@ipadagirl.org" },
    { icon: "school", color: "dignity-purple", label: "Schools & Outreach", email: "schools@ipadagirl.org" },
    { icon: "handshake", color: "wellbeing-teal", label: "Partnerships", email: "partners@ipadagirl.org" },
    { icon: "newspaper", color: "secondary", label: "Media Enquiries", email: "media@ipadagirl.org" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">GET IN TOUCH</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Contact Us</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Whether you&apos;re a school, a donor, a partner, a journalist or a girl with a question â€” we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="font-headline-md text-headline-md text-ink-navy">How to Reach Us</h2>
              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center gap-6 p-6 bg-base-white rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all">
                    <div className={`w-14 h-14 bg-${c.color}/10 text-${c.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-on-surface-variant uppercase tracking-wider text-xs">{c.label}</p>
                      <a href={`mailto:${c.email}`} className="font-headline-sm text-ink-navy hover:text-coral-warm transition-colors text-[16px]">
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-wellbeing-teal/10 rounded-2xl border border-wellbeing-teal/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-wellbeing-teal">chat</span>
                  <p className="font-label-md text-wellbeing-teal">WhatsApp</p>
                </div>
                <p className="font-body-md text-on-surface-variant">For urgent outreach queries, reach us directly on WhatsApp. Number available on request via email.</p>
              </div>

              <div className="space-y-3">
                <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Follow Our Work</p>
                <div className="flex gap-3">
                  {["Instagram", "Facebook", "TikTok", "YouTube"].map((s) => (
                    <a key={s} href="#" className="px-4 py-2 bg-ink-navy text-base-white rounded-lg font-label-md text-xs hover:bg-coral-warm transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-8">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Your Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Subject *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors bg-base-white">
                    <option value="">Select a subject</option>
                    <option>General Enquiry</option>
                    <option>Donation Support</option>
                    <option>School Outreach Request</option>
                    <option>Partnership Enquiry</option>
                    <option>Volunteer Application</option>
                    <option>Media Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Message *</label>
                  <textarea rows={6} required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full py-4 bg-coral-warm text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
                <p className="text-center text-sm text-on-surface-variant">We aim to respond to all messages within 3â€“5 working days.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
