import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "What We Do | iPadAGirl" };

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-wellbeing-teal/10 text-wellbeing-teal rounded-full font-label-md text-label-md mb-6">OUR PROGRAMMES</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">What We Do</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              iPadAGirl delivers a comprehensive programme combining hygiene-kit distribution with structured menstrual health education and community engagement.
            </p>
          </div>
        </section>

        {/* School Outreach */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-coral-warm/10 text-coral-warm rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-ink-navy">School Outreach Programme</h2>
              <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We visit schools to distribute hygiene kits and deliver structured menstrual health and puberty education. Each outreach is tailored to the age range of the students present.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Introduction to puberty",
                  "Understanding menstruation",
                  "How to use & dispose of pads",
                  "Personal hygiene during periods",
                  "Managing menstrual discomfort",
                  "Recognising when to seek help",
                  "Addressing myths & misinformation",
                  "Q&A sessions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-wellbeing-teal mt-0.5 text-[20px]">check_circle</span>
                    <p className="font-body-md text-on-surface-variant">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUHIqPCeeNobsZ3pdYntkzK0eXpWbG-tBsg6HSkG9U6bU_Wu8j1bHoz6miMgEY_9DgSFCwgUvuygM5oP09MV1vDY_RofGUYsXNwoCEcA-tdavBicy-e5BvXoGeGnAINLuEgdMaqZaWObkh8wr_ENCS7fBHK51pX4FNk_Z5OdHSIGIvARoB8VV_Vm4e-guVxZ2VlANfVbGZhBJcNVAfZjN4XH1YknhK3vk5NTQnaxRvxdQZl6vP77s0Gg" alt="School outreach session" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Programmes grid */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-4">All Our Programmes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "location_on",
                  color: "dignity-purple",
                  title: "Rural & Underserved Community Outreach",
                  desc: "iPadAGirl is not restricted to major cities. We plan to reach public secondary schools, low-income communities and rural areas where access to sanitary products and health information is most limited.",
                },
                {
                  icon: "redeem",
                  color: "coral-warm",
                  title: "Hygiene Kit Programme",
                  desc: "Each kit contains sanitary pads, a toothbrush, toothpaste, wipes, roll-on deodorant, tissue paper, bathing soap and shaving sticks. Kits are assembled to provide comprehensive care for a girl's cycle and daily hygiene.",
                },
                {
                  icon: "menu_book",
                  color: "wellbeing-teal",
                  title: "Menstrual Health Education",
                  desc: "We deliver structured, age-appropriate sessions covering menstruation, puberty, healthy hygiene practices, and how to manage periods safely. All content is developed with accuracy in mind.",
                },
                {
                  icon: "self_care",
                  color: "secondary",
                  title: "Confidence & Wellbeing",
                  desc: "We address shame, fear, teasing, isolation and declining school attendance connected to menstruation. Girls leave our sessions better informed and more confident.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm">
                  <div className={`w-14 h-14 bg-${item.color}/10 text-${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-coral-warm text-base-white text-center">
          <div className="max-w-container-max mx-auto px-6 space-y-6">
            <h2 className="font-headline-md text-headline-md">Bring iPadAGirl to Your School</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Request a school outreach and let us bring hygiene kits and health education directly to your students.</p>
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
