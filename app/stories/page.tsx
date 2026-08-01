import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Stories & News | iPadAGirl" };

const articles = [
  {
    tag: "PRESS",
    tagColor: "text-coral-warm bg-coral-warm/10",
    title: "iPadAGirl Project Kicks Off With Maiden Outreach, Targets 10,000 Schoolgirls",
    excerpt: "TV host and producer Zzini Oluchi Ekeh launched the iPadAGirl initiative with a maiden outreach at JOAK Secondary School in Ibeju-Lekki, Lagos, reaching 80 girls with hygiene kits and practical menstrual health education.",
    source: "Vanguard News",
    date: "July 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgBnz73GS38NDoG85M1M_tqaI8Jmd5V9XMW2-Ro1f2NTsHHzOF7dPNBu_zXcojsC1DDTioBkugPiGiA44S8gX8-3Xim4V2OsEsyaUrvYtLMxrV_RVgb4XkjxvcZ_ZewLJ3Uf5hBNhDbGy4xlj789F385ow-56LQ9YEj_Bl7f2ra82UK_RCHlcbj_EMT2kwR3EOfXOQ8kF-MWF3V-S_qEgT2Bed9PAfs0mU3D3lTRcLcQ_vKdP9_leRFQ",
  },
  {
    tag: "OUTREACH REPORT",
    tagColor: "text-wellbeing-teal bg-wellbeing-teal/10",
    title: "Maiden Outreach Report: JOAK Secondary School, Ibeju-Lekki",
    excerpt: "A full account of our first school visit â€” what we distributed, what was taught, what the students said, and what we learned that will shape every outreach that follows.",
    source: "iPadAGirl",
    date: "July 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHIqPCeeNobsZ3pdYntkzK0eXpWbG-tBsg6HSkG9U6bU_Wu8j1bHoz6miMgEY_9DgSFCwgUvuygM5oP09MV1vDY_RofGUYsXNwoCEcA-tdavBicy-e5BvXoGeGnAINLuEgdMaqZaWObkh8wr_ENCS7fBHK51pX4FNk_Z5OdHSIGIvARoB8VV_Vm4e-guVxZ2VlANfVbGZhBJcNVAfZjN4XH1YknhK3vk5NTQnaxRvxdQZl6vP77s0Gg",
  },
  {
    tag: "FOUNDER UPDATE",
    tagColor: "text-dignity-purple bg-dignity-purple/10",
    title: "A Message from Zzini: What We Learned from Our First 80 Girls",
    excerpt: "After our maiden outreach, founder Zzini Oluchi Ekeh shares her reflections on what surprised her, what moved her, and what the girls themselves taught the team.",
    source: "iPadAGirl",
    date: "August 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDnp36dqltJ-QBp9iUOcT9mCBEE6R5wSBa_mZsr_57qW29qOAjQTCjQBovLLJDTvk-oHRR8UKl8vYLMQZOtRPtCchf58nmYG3jd92YA6nSbyWL1DgRBqQX8NZ8scbG7R91PlLzvGgaMzwI2C0A-t2IWL_tRBelG1NlRzED-wyopmvu_MNPpjqLn0c2Y9Sr6vpWZhtzsmFzeVlmfTPtt_BAkGa9p0-ebFO9XbZWpIWwbUpQe6D5DP3jCg",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">NEWS & STORIES</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Stories & News</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Outreach reports, founder updates, press coverage and the real stories from the girls and communities we serve.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.title} className="bg-base-white rounded-3xl border border-surface-container-high shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all">
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
                      <button className="text-dignity-purple font-label-md text-xs inline-flex items-center gap-1">
                        READ <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low text-center">
          <div className="max-w-container-max mx-auto px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm text-ink-navy">Stay up to date with our mission</h2>
            <p className="text-on-surface-variant font-body-md">Subscribe to receive outreach reports and updates.</p>
            <form className="flex gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-outline-variant focus:outline-none focus:border-coral-warm transition-colors" />
              <button type="submit" className="px-6 py-3 bg-coral-warm text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
