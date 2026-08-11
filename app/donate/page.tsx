﻿"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selected, setSelected] = useState(1);

  const tiers = [
    {
      icon: "person",
      color: "coral-warm",
      borderClass: "border-outline-variant/30",
      title: "Sponsor a Girl",
      desc: "Covers one complete kit and health session for a girl in need.",
      price: "₦7,500",
      unit: "/kit",
      btnClass: "bg-primary text-white hover:bg-primary/90",
      btnLabel: "Donate ₦7,500",
      popular: false,
    },
    {
      icon: "groups",
      color: "wellbeing-teal",
      borderClass: "border-2 border-wellbeing-teal",
      title: "Sponsor a Group",
      desc: "Enable a small peer-group to stay in school for a full academic term.",
      price: "₦75,000",
      unit: "/10 girls",
      btnClass: "bg-wellbeing-teal text-white hover:bg-wellbeing-teal/90",
      btnLabel: "Sponsor Group",
      popular: true,
    },
    {
      icon: "location_city",
      color: "dignity-purple",
      borderClass: "border-outline-variant/30",
      title: "School Outreach",
      desc: "Fund a full school visit including kits, transport, facilitators and education materials.",
      price: "₦500,000",
      unit: "/outreach",
      btnClass: "bg-dignity-purple text-white hover:bg-dignity-purple/90",
      btnLabel: "Sponsor Outreach",
      popular: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-pink-soft text-primary rounded-full font-label-md text-label-md">TRANSFORMING LIVES</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy">
                Your Support Keeps a <span className="text-coral-warm">Girl in School</span>.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                When girls have access to menstrual health products and education, their attendance and confidence skyrocket. Join our mission to End Period Poverty in Africa.
              </p>
            </div>
            <div className="bg-base-white p-8 rounded-xl shadow-sm border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-6">Impact Preview</h3>
              <div className="space-y-6">
                {[
                  { label: "₦7,500 covers 1 Girl", sub: "Provides 1 girl with a hygiene kit and a health education session.", color: "text-primary", bg: "bg-pink-soft" },
                  { label: "₦37,500 covers 5 Girls", sub: "Enables a small group to stay in school for a full term.", color: "text-secondary", bg: "bg-surface-container" },
                  { label: "₦75,000 covers 10 Girls", sub: "Funds a complete group outreach session with all materials.", color: "text-wellbeing-teal", bg: "bg-wellbeing-teal/10" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <span className={`material-symbols-outlined ${item.color} text-[20px]`}>school</span>
                    </div>
                    <div>
                      <p className={`font-label-md ${item.color}`}>{item.label}</p>
                      <p className="text-on-surface-variant text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
                <div className="w-full h-2 bg-pink-soft rounded-full overflow-hidden mt-8">
                  <div className="w-1 h-full bg-coral-warm rounded-full" />
                </div>
                <p className="font-label-md text-center text-on-surface-variant uppercase tracking-wider">First outreach funded — help us reach more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Selector */}
        <section className="py-20 bg-surface-container-low">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-6">Choose Your Impact</h2>
            <div className="inline-flex p-1 bg-surface-container rounded-lg border border-outline-variant/30">
              <button
                className={`px-6 py-2 rounded-md font-label-md transition-all ${frequency === "one-time" ? "bg-coral-warm text-white" : "text-on-surface-variant"}`}
                onClick={() => setFrequency("one-time")}
              >
                One-time
              </button>
              <button
                className={`px-6 py-2 rounded-md font-label-md transition-all ${frequency === "monthly" ? "bg-coral-warm text-white" : "text-on-surface-variant"}`}
                onClick={() => setFrequency("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={tier.title}
                onClick={() => setSelected(i)}
                className={`bg-base-white border p-8 rounded-xl transition-all duration-300 flex flex-col cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-lg ${selected === i ? "ring-2 ring-coral-warm" : ""} ${tier.borderClass}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-wellbeing-teal text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className={`w-12 h-12 bg-${tier.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined text-${tier.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{tier.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-2">{tier.title}</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">{tier.desc}</p>
                <div className="mt-auto">
                  <div className="text-headline-md font-bold text-ink-navy mb-6">
                    {tier.price}<span className="text-sm font-normal text-on-surface-variant">{frequency === "monthly" ? "/mo" : tier.unit}</span>
                  </div>
                  <button className={`w-full py-4 rounded-lg font-label-md transition-colors ${tier.btnClass}`}>
                    {tier.btnLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Donations */}
        <section className="py-20 bg-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-headline-md text-headline-md text-ink-navy">Donate Products</h2>
                <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Companies and individuals can donate approved hygiene products directly. All items must be unexpired, undamaged and in original packaging.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Sanitary Pads", "Toothbrushes", "Toothpaste", "Bathing Soap", "Wet Wipes", "Tissue Paper", "Roll-on Deodorant", "Shaving Sticks"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg">
                      <span className="material-symbols-outlined text-coral-warm text-[18px]">check_circle</span>
                      <span className="font-body-md text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:hello@ipadagirl.org" className="inline-flex items-center gap-2 px-6 py-3 bg-ink-navy text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Contact Us to Arrange a Donation
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
              <div className="bg-ink-navy text-base-white p-10 rounded-3xl space-y-6">
                <h3 className="font-headline-sm text-headline-sm">Donation Transparency</h3>
                <div className="space-y-4">
                  {[
                    { pct: "55%", label: "Hygiene Products" },
                    { pct: "20%", label: "Education & Facilitators" },
                    { pct: "15%", label: "Transportation & Logistics" },
                    { pct: "10%", label: "Administration & Monitoring" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-body-md text-surface-variant">{item.label}</span>
                        <span className="font-label-md text-coral-warm">{item.pct}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-coral-warm rounded-full" style={{ width: item.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-surface-variant text-sm">Figures are indicative. Final allocations are published in our impact reports.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
