import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Contact Us | iPadAGirl" };

export default function ContactPage() {
  const contacts = [
    { icon: "phone", label: "Phone", value: "+234 916 945 7000", href: "tel:+2349169457000" },
    { icon: "mail", label: "Email", value: "letspadagirlnow@gmail.com", href: "mailto:letspadagirlnow@gmail.com" },
    { icon: "photo_camera", label: "Instagram", value: "@PadagirlwithZzini", href: "https://www.instagram.com/padagirlwithzzini" },
    { icon: "group", label: "Facebook", value: "PadagirlwithZzini", href: "https://web.facebook.com/profile.php?id=61592765517960" },
    { icon: "music_note", label: "TikTok", value: "@PadagirlwithZzini", href: "https://www.tiktok.com/@padagirlwithzzini" },
    { icon: "business", label: "LinkedIn", value: "PadagirlwithZzini", href: "https://www.linkedin.com/company/padagirlwithzzini" },
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
              Whether you want to partner, volunteer, request an outreach or simply say hello — we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline-md text-headline-md text-ink-navy mb-2">Reach Us Directly</h2>
                  <div className="w-12 h-1.5 bg-coral-warm rounded-full mb-8" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-5 bg-base-white rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <div className="w-12 h-12 bg-coral-warm/10 text-coral-warm rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined">{c.icon}</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">{c.label}</p>
                        <p className="font-body-md text-ink-navy font-semibold break-all">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="bg-pink-soft/30 rounded-3xl p-8 space-y-3">
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy">Follow Our Journey</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Stay close to our outreaches, announcements and impact stories on social media: <strong>@PadagirlwithZzini</strong> across all platforms.
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <h2 className="font-headline-md text-headline-md text-ink-navy mb-2">Send Us a Message</h2>
                <div className="w-12 h-1.5 bg-coral-warm rounded-full mb-8" />
                <form className="space-y-6 bg-base-white p-8 rounded-3xl border border-surface-container-high shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors bg-base-white">
                      <option>General Enquiry</option>
                      <option>Partnership Enquiry</option>
                      <option>Volunteer Application</option>
                      <option>Outreach Request</option>
                      <option>Press / Media</option>
                      <option>Donation Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Message *</label>
                    <textarea rows={5} required className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-coral-warm text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
