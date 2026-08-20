﻿import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Outreaches | iPadAGirl" };

export default function OutreachesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <span className="inline-block px-4 py-1.5 bg-wellbeing-teal/10 text-wellbeing-teal rounded-full font-label-md text-label-md mb-6">OUR OUTREACHES</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">School Outreaches</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A full archive of all iPadAGirl school and community outreaches — past and upcoming.
            </p>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-8">Upcoming Outreaches</h2>
            <div className="bg-dignity-purple/5 border border-dignity-purple/20 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1.5 bg-dignity-purple/10 text-dignity-purple rounded-full font-label-md text-label-md">NEXT STOP</span>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy">Ibadan — Coming Soon</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Project iPadAGirl is heading to Ibadan. Schools in Oyo State are invited to apply for a visit. Let&apos;s pad a girl together.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Target Girls", value: "100+" },
                      { label: "Kits Needed", value: "100+" },
                      { label: "Volunteers", value: "10+" },
                      { label: "Location", value: "Ibadan" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-base-white p-4 rounded-xl border border-surface-container-high">
                        <div className="font-headline-sm text-ink-navy">{stat.value}</div>
                        <div className="font-label-md text-on-surface-variant uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href="/request-outreach" className="px-6 py-3 bg-dignity-purple text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                      Request a Visit
                    </Link>
                    <Link href="/donate" className="px-6 py-3 border-2 border-dignity-purple text-dignity-purple rounded-xl font-semibold hover:bg-dignity-purple/10 transition-all">
                      Fund This Outreach
                    </Link>
                  </div>
                </div>
                <div className="bg-dignity-purple/10 rounded-2xl p-8 space-y-4">
                  <h4 className="font-headline-sm text-dignity-purple">What We Still Need</h4>
                  {["Hygiene kit sponsorships (₦10,000 each)", "Transportation support", "Volunteer facilitators", "School host in Ibadan, Oyo State"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-dignity-purple text-[20px]">radio_button_unchecked</span>
                      <p className="font-body-md text-on-surface-variant">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Outreaches */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-8">Past Outreaches</h2>
            <div className="bg-base-white rounded-3xl overflow-hidden border border-surface-container-high shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/outreach/MMC08284-Enhanced-NR.jpg"
                    alt="JOAK Secondary School Outreach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 space-y-6">
                  <span className="inline-block px-3 py-1 bg-wellbeing-teal/10 text-wellbeing-teal rounded-lg font-label-md">MAIDEN OUTREACH · JULY 2026</span>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy">JOAK Secondary School</h3>
                  <p className="font-body-md text-on-surface-variant">Okun-Idado, Free Trade Zone, Ibeju-Lekki, Lagos State</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Girls Reached", value: "80" },
                      { label: "Classes", value: "JSS1–SSS3" },
                      { label: "Kits Distributed", value: "80" },
                      { label: "Sessions", value: "1 full day" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-surface-container-low p-4 rounded-xl">
                        <div className="font-headline-sm text-ink-navy font-bold">{stat.value}</div>
                        <div className="font-label-md text-on-surface-variant uppercase text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Delivered:</p>
                    {["80 complete hygiene kits", "Menstrual health & puberty education", "Interactive Q&A session", "Safe conversation environment"].map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-wellbeing-teal text-[18px]">check</span>
                        <span className="font-body-md text-on-surface-variant">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-coral-warm text-base-white text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm">Is your school ready for an outreach?</h2>
            <Link href="/request-outreach" className="inline-block px-8 py-4 bg-base-white text-coral-warm rounded-xl font-bold hover:scale-105 transition-transform">
              Request an Outreach
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
