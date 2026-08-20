"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articles = [
  {
    tag: "PRESS",
    tagColor: "text-coral-warm bg-coral-warm/10",
    title: "iPadAGirl Project Kicks Off With Maiden Outreach, Targets 10,000 Schoolgirls",
    excerpt: "TV host and producer Zzini Oluchi Ekeh launched the iPadAGirl initiative with a maiden outreach at JOAK Secondary School in Ibeju-Lekki, Lagos, reaching 80 girls with hygiene kits and practical menstrual health education.",
    source: "Vanguard News",
    date: "July 2026",
    img: "/images/outreach/MMC08241-Enhanced-NR.jpg",
    href: "https://www.vanguardngr.com/2026/07/ipad-a-girl-project-kicks-off-with-maiden-outreach-targets-10000-schoolgirls/",
  },
  {
    tag: "PRESS",
    tagColor: "text-coral-warm bg-coral-warm/10",
    title: "I Pad A Girl Project Launches With Maiden Outreach, Targets 10,000 Schoolgirls",
    excerpt: "The initiative, founded by media personality Zzini Oluchi Ekeh, aims to eradicate period poverty and build lasting confidence in girls across Nigeria and beyond.",
    source: "New Telegraph",
    date: "July 2026",
    img: "/images/outreach/MMC08289-Enhanced-NR.jpg",
    href: "https://newtelegraphng.com/i-pad-a-girl-project-launches-eith-maiden-outreach-targets-10000-schoolgirls/",
  },
  {
    tag: "PRESS",
    tagColor: "text-coral-warm bg-coral-warm/10",
    title: "I Pad A Girl Project Targets 10,000 Schoolgirls in Maiden Outreach",
    excerpt: "The project's first outreach at JOAK Secondary School delivered hygiene kits and menstrual health education to over 80 girls, with plans to scale across Africa.",
    source: "Independent Nigeria",
    date: "July 2026",
    img: "/images/outreach/MMC08284-Enhanced-NR.jpg",
    href: "https://independent.ng/i-pad-a-girl-project-targets-10000-schoolgirls-in-maiden-outreach/",
  },
  {
    tag: "PRESS",
    tagColor: "text-coral-warm bg-coral-warm/10",
    title: "iGaming AFRIKA Joins I Pad A Girl Initiative to Combat Period Poverty in Nigeria",
    excerpt: "iGaming AFRIKA has partnered with Project iPadAGirl to help combat period poverty in Nigeria, joining forces with Zzini Oluchi Ekeh's initiative to provide menstrual hygiene products and education to schoolgirls.",
    source: "iGaming AFRIKA",
    date: "July 2026",
    img: "/images/outreach/MMC08277.jpg",
    href: "https://igamingafrika.com/igaming-afrika-joins-i-pad-a-girl-initiative-to-combat-period-poverty-in-nigeria/",
  },
];

export default function StoriesPage() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubStatus("loading");
    const res = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    setSubStatus(res.ok ? "success" : "error");
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">NEWS & STORIES</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Stories & News</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Outreach reports, founder updates, press coverage and the real stories from the girls and communities we serve.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-base-white rounded-3xl border border-surface-container-high shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all block"
                >
                  <div className="aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-lg font-label-md text-xs ${article.tagColor}`}>{article.tag}</span>
                      <span className="text-on-surface-variant text-sm">{article.date}</span>
                    </div>
                    <h3 className="font-headline-sm text-ink-navy leading-snug" style={{ fontSize: "18px", lineHeight: "26px" }}>{article.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-label-md text-on-surface-variant text-xs">SOURCE: {article.source}</span>
                      <span className="text-coral-warm font-label-md text-xs inline-flex items-center gap-1">
                        READ <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm text-ink-navy">Stay up to date with our mission</h2>
            <p className="text-on-surface-variant font-body-md">Subscribe to receive outreach reports and updates.</p>
            {subStatus === "success" ? (
              <p className="text-wellbeing-teal font-semibold">You&apos;re subscribed! Thank you for following our journey.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 justify-center max-w-md mx-auto">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
                <button type="submit" disabled={subStatus === "loading"} className="px-6 py-3 bg-coral-warm text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
                  {subStatus === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {subStatus === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
