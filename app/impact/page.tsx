﻿import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Our Impact | iPadAGirl" };

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-pink-soft relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-4">Measuring Our Progress</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Transparency is the heartbeat of our mission. We are committed to showing exactly how every donation fuels our goal of reaching 10,000 girls with dignity and education.
              </p>
              <div className="bg-base-white p-6 rounded-xl border border-outline-variant shadow-sm inline-block w-full md:w-auto">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-label-md text-primary">CAMPAIGN GOAL: 10,000 GIRLS</span>
                  <span className="font-headline-sm text-wellbeing-teal">0.8%</span>
                </div>
                <div className="h-3 bg-pink-soft rounded-full overflow-hidden w-full md:w-96">
                  <div className="bg-coral-warm h-full rounded-full" style={{ width: "0.8%" }} />
                </div>
                <p className="mt-2 font-label-md text-on-surface-variant">80 of 10,000 girls reached — maiden outreach complete</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[
              "/images/outreach/MMC08165.jpg",
              "/images/outreach/MMC08168.jpg",
              "/images/outreach/MMC08169.jpg",
              "/images/outreach/MMC08171.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="iPadAGirl outreach moment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "80", label: "Girls Reached" },
                { value: "1", label: "School Visited" },
                { value: "80+", label: "Kits Distributed" },
                { value: "1", label: "State Reached" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-wellbeing-teal font-display-lg text-headline-md mb-2">{stat.value}</div>
                  <div className="text-on-surface-variant font-label-md tracking-wider uppercase">{stat.label}</div>
                  <div className="w-12 h-1 bg-wellbeing-teal mx-auto mt-4 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maiden Outreach Detail */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-12 text-center">Maiden Outreach — JOAK Secondary School</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-6 bg-base-white rounded-2xl border border-surface-container-high">
                    <span className="material-symbols-outlined text-coral-warm text-3xl">location_on</span>
                    <div>
                      <p className="font-label-md text-on-surface-variant uppercase">Location</p>
                      <p className="font-headline-sm text-ink-navy">Okun-Idado, Ibeju-Lekki, Lagos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-base-white rounded-2xl border border-surface-container-high">
                    <span className="material-symbols-outlined text-wellbeing-teal text-3xl">groups</span>
                    <div>
                      <p className="font-label-md text-on-surface-variant uppercase">Students Reached</p>
                      <p className="font-headline-sm text-ink-navy">80 girls — JSS1 to SSS3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-base-white rounded-2xl border border-surface-container-high">
                    <span className="material-symbols-outlined text-dignity-purple text-3xl">redeem</span>
                    <div>
                      <p className="font-label-md text-on-surface-variant uppercase">Kits Distributed</p>
                      <p className="font-headline-sm text-ink-navy">80 complete hygiene kits</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l-4 border-coral-warm bg-pink-soft/20 rounded-r-2xl">
                  <p className="font-body-md italic text-ink-navy">&ldquo;The education part was eye-opening. Most girls here only learn from rumors. Now they know the truth about their bodies.&rdquo;</p>
                  <p className="mt-2 font-label-md text-on-surface-variant">— School Principal, JOAK Secondary School</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/outreach/MMC08241-Enhanced-NR.jpg" alt="Outreach at JOAK Secondary School" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Next Outreach */}
        <section className="py-20 bg-dignity-purple text-base-white text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full font-label-md text-label-md">NEXT STOP</span>
            <h2 className="font-headline-md text-headline-md">Ibadan — Next Outreach</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mx-auto">
              We are heading to Ibadan. The mission continues — more girls, more kits, more education. We are looking for schools to host us and donors to make it possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/request-outreach" className="px-8 py-4 bg-base-white text-dignity-purple rounded-xl font-bold hover:scale-105 transition-transform">
                Request a School Visit
              </Link>
              <Link href="/donate" className="px-8 py-4 border-2 border-base-white text-base-white rounded-xl font-bold hover:bg-white/10 transition-all">
                Fund the Outreach
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
