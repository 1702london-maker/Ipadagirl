import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CounterStrip from "./components/CounterStrip";

export default function Home() {
  const outreachPhotos = [
    "/images/outreach/MMC08241-Enhanced-NR.jpg",
    "/images/outreach/MMC08284-Enhanced-NR.jpg",
    "/images/outreach/MMC08289-Enhanced-NR.jpg",
    "/images/outreach/MMC08077.jpg",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-20 pb-32 bg-base-white">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-soft/50 rounded-l-[100px] -z-10 translate-x-20" />
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md">
                AFRICA-WIDE INITIATIVE
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-ink-navy">
                Empowering Every Girl to Grow with{" "}
                <span className="text-coral-warm italic">Dignity</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Project iPadAGirl is helping schoolgirls across Africa access menstrual
                products, practical hygiene education and the confidence to navigate
                puberty without fear, shame or interruption to their education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="px-8 py-4 bg-coral-warm text-base-white rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-all text-center"
                >
                  Donate a Hygiene Kit
                </Link>
                <Link
                  href="/partner"
                  className="px-8 py-4 border-2 border-ink-navy text-ink-navy rounded-xl font-semibold hover:bg-ink-navy hover:text-base-white transition-all text-center"
                >
                  Partner With Us
                </Link>
              </div>
              <Link
                href="/request-outreach"
                className="inline-flex items-center gap-2 text-coral-warm font-semibold hover:underline"
              >
                Request a School Outreach{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/outreach/MMC08199.jpg"
                  alt="Girls at an iPadAGirl outreach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-soft/40 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        <CounterStrip />

        {/* Problem */}
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/outreach/MMC08163.jpg"
                alt="Girls at outreach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-base-white">
                <p className="font-body-md italic">
                  &ldquo;I didn&apos;t go to school because I couldn&apos;t afford pads.&rdquo;
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-ink-navy">
                Period Poverty Should Never Interrupt a Girl&apos;s Education
              </h2>
              <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                As girls transition into puberty, their bodies undergo natural
                changes that should be celebrated, not feared. However, for many
                schoolgirls in Africa, these changes bring immense anxiety.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                High costs of sanitary products force many to miss classes for days
                every month. Beyond the financial burden, the pervasive fear of
                &ldquo;staining&rdquo; and the lack of proper hygiene education create a cycle
                of shame that hinders their potential.
              </p>
              <ul className="space-y-4">
                {[
                  "Missing up to 50 school days per year due to periods.",
                  "Using unhygienic alternatives that lead to health complications.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-coral-warm mt-1">check_circle</span>
                    <p className="font-body-md">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-4">Our Core Pillars of Impact</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">We provide a holistic approach to menstrual health that goes beyond just distribution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "redeem", color: "text-coral-warm", bg: "bg-coral-warm/10 group-hover:bg-coral-warm group-hover:text-white", title: "Complete Hygiene Kits", desc: "Essential supplies to keep girls clean, confident, and in the classroom for months at a time." },
                { icon: "menu_book", color: "text-wellbeing-teal", bg: "bg-wellbeing-teal/10 group-hover:bg-wellbeing-teal group-hover:text-white", title: "Menstrual Health Education", desc: "Science-based education to demystify puberty and teach healthy management practices." },
                { icon: "forum", color: "text-coral-warm", bg: "bg-coral-warm/10 group-hover:bg-coral-warm group-hover:text-white", title: "Safe Conversations", desc: "Creating judgment-free zones where girls can ask questions and share their lived experiences." },
                { icon: "self_care", color: "text-wellbeing-teal", bg: "bg-wellbeing-teal/10 group-hover:bg-wellbeing-teal group-hover:text-white", title: "Confidence & Self-Care", desc: "Empowering girls with the tools and mindset to value their bodies and prioritize their well-being." },
              ].map((card) => (
                <div key={card.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all group">
                  <div className={`w-12 h-12 ${card.bg} ${card.color} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{card.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-4">{card.desc}</p>
                  <Link href="/what-we-do" className="text-label-md font-label-md text-coral-warm inline-flex items-center gap-1">
                    LEARN MORE <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hygiene Kit */}
        <section className="py-20 bg-ink-navy text-base-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>sanitizer</span>
          </div>
          <div className="max-w-container-max mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-md text-headline-md mb-6">Inside Our Dignity Kit</h2>
                <p className="text-surface-variant font-body-lg mb-10">Every kit is curated to provide comprehensive care for a schoolgirl&apos;s cycle and daily hygiene needs.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "water_drop", label: "Sanitary Pads" },
                    { icon: "clean_hands", label: "Wet Wipes" },
                    { icon: "dentistry", label: "Toothbrush & Paste" },
                    { icon: "soap", label: "Antiseptic Soap" },
                    { icon: "air", label: "Roll-on Deodorant" },
                    { icon: "content_cut", label: "Shaving Sticks" },
                    { icon: "fiber_manual_record", label: "Tissue Paper" },
                    { icon: "bubble_chart", label: "Bathing Soap" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="material-symbols-outlined text-coral-warm">{item.icon}</span>
                      <span className="font-body-md">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/outreach/MMC08022.jpg"
                    alt="Hygiene kit being distributed"
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-coral-warm rounded-2xl shadow-xl hidden md:block">
                  <div className="text-headline-sm font-bold">₦10,000</div>
                  <div className="text-label-md opacity-80">Cost per Kit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Preview */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="bg-pink-soft rounded-[48px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/3">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl -rotate-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/outreach/MMC08145.jpg"
                    alt="Zzini Oluchi Ekeh, Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 space-y-6">
                <span className="text-coral-warm font-label-md uppercase tracking-[0.2em]">Our Roots</span>
                <h2 className="font-display-lg text-headline-md lg:text-headline-md text-ink-navy italic">
                  &ldquo;Inspired by Experience. Built for Every Girl.&rdquo;
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Project iPadAGirl wasn&apos;t just born out of a desire to do good — it was born out of a lived reality. Growing up, our founder Zzini Oluchi Ekeh witnessed firsthand how something as natural as a period could become a source of profound fear and educational setback.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  She remembers the hushed whispers, the improvised solutions, and the girls who simply stopped showing up to school. Today, she is leading a movement to ensure that no girl — across Africa — has to repeat those experiences.
                </p>
                <Link href="/founder" className="inline-block px-8 py-4 bg-ink-navy text-base-white rounded-xl font-semibold hover:opacity-90 transition-all">
                  Read Zzini&apos;s Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Outreach */}
        <section className="py-20 bg-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-headline-md text-headline-md text-ink-navy mb-2">Our Latest Impact</h2>
                <p className="text-on-surface-variant">See how your contributions are changing lives on the ground.</p>
              </div>
              <Link href="/outreaches" className="text-coral-warm font-bold inline-flex items-center gap-2 group">
                VIEW ALL OUTREACH <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-wellbeing-teal/10 text-wellbeing-teal rounded-lg font-label-md">MAIDEN OUTREACH</span>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy">JOAK Secondary School, Ibeju-Lekki, Lagos</h3>
                  <p className="text-on-surface-variant font-body-md">In our very first school outreach, we visited JOAK Secondary School in Okun-Idado to address the immediate needs of their students. We didn&apos;t just deliver boxes — we delivered hope and dignity.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-2xl">
                    <div className="text-headline-sm font-bold text-ink-navy">80</div>
                    <div className="text-label-md text-on-surface-variant uppercase">Students Empowered</div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-2xl">
                    <div className="text-headline-sm font-bold text-ink-navy">80+</div>
                    <div className="text-label-md text-on-surface-variant uppercase">Kits Distributed</div>
                  </div>
                </div>
                <div className="p-6 border-l-4 border-coral-warm bg-pink-soft/20 rounded-r-2xl">
                  <p className="font-body-md italic text-ink-navy">&ldquo;The education part was eye-opening. Most girls here only learn from rumors. Now they know the truth about their bodies.&rdquo;</p>
                  <p className="mt-2 font-label-md text-on-surface-variant">— School Principal</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outreachPhotos.map((src, i) => (
                  <div key={i} className={`rounded-3xl overflow-hidden h-64 ${i === 1 ? "mt-8" : i === 2 ? "-mt-8" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Outreach ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-coral-warm text-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6 text-center space-y-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md max-w-3xl mx-auto">
              Your Support Can Keep a Girl in School and Build Her Future
            </h2>
            <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90">
              Join us in our mission to reach 10,000 girls across Africa. Whether as an individual sponsor or a corporate partner, your contribution directly impacts a girl&apos;s dignity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/donate" className="px-10 py-5 bg-ink-navy text-base-white rounded-xl font-bold text-body-lg shadow-xl hover:scale-105 transition-transform">
                Sponsor a Girl
              </Link>
              <Link href="/partner" className="px-10 py-5 bg-base-white text-coral-warm rounded-xl font-bold text-body-lg shadow-xl hover:scale-105 transition-transform">
                Become a Corporate Partner
              </Link>
            </div>
            <div className="pt-8">
              <p className="font-label-md uppercase tracking-widest opacity-80 mb-4">Secured Payments Powered By</p>
              <div className="flex justify-center items-center gap-8 opacity-70">
                {/* Paystack logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" width="120" height="30" fill="currentColor" aria-label="Paystack">
                  <circle cx="8" cy="15" r="5" fill="#00C3F7"/>
                  <circle cx="20" cy="15" r="5" fill="#011B33" opacity="0.85"/>
                  <text x="32" y="20" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="currentColor">Paystack</text>
                </svg>
                <span className="w-px h-6 bg-current opacity-30" />
                {/* Flutterwave logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" width="150" height="30" fill="currentColor" aria-label="Flutterwave">
                  <path d="M4 22 Q8 8 14 15 Q20 22 26 8" stroke="#F5A623" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M8 22 Q12 10 18 17 Q24 22 30 10" stroke="#E03A3C" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <text x="38" y="20" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="currentColor">Flutterwave</text>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
