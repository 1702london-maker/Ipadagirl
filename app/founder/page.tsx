import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Meet the Founder | iPadAGirl" };

export default function FounderPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-pink-soft/20">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md">
                MEET THE FOUNDER
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy">
                Zzini Oluchi Ekeh
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                TV Host Â· Producer Â· Advocate for Girls&apos; Dignity
              </p>
              <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Zzini Oluchi Ekeh is a television host, producer and the driving force behind iPadAGirl "” a nationwide initiative to provide Nigerian schoolgirls with menstrual products, hygiene education and the confidence to navigate puberty with dignity.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDnp36dqltJ-QBp9iUOcT9mCBEE6R5wSBa_mZsr_57qW29qOAjQTCjQBovLLJDTvk-oHRR8UKl8vYLMQZOtRPtCchf58nmYG3jd92YA6nSbyWL1DgRBqQX8NZ8scbG7R91PlLzvGgaMzwI2C0A-t2IWL_tRBelG1NlRzED-wyopmvu_MNPpjqLn0c2Y9Sr6vpWZhtzsmFzeVlmfTPtt_BAkGa9p0-ebFO9XbZWpIWwbUpQe6D5DP3jCg"
                  alt="Zzini Oluchi Ekeh, Founder of iPadAGirl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-coral-warm rounded-2xl shadow-xl text-base-white hidden md:block">
                <div className="text-headline-sm font-bold">2026</div>
                <div className="text-label-md opacity-80">Year Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-8 text-center">Her Story</h2>
              <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                <div className="p-8 bg-pink-soft rounded-3xl border-l-4 border-coral-warm">
                  <p className="italic text-ink-navy font-body-lg text-body-lg">
                    &ldquo;Growing up, I realised that many girls around me were entering puberty without understanding what was happening to their bodies. I was fortunate to have guidance and support at home, but many other girls experienced confusion, fear and shame.&rdquo;
                  </p>
                </div>
                <p>
                  Those early observations stayed with Zzini. As she grew into her career in media and television production, she never lost sight of the girls she had witnessed struggling silently through adolescence "” unable to ask questions, unable to access even the most basic products, and sometimes missing school for days at a time.
                </p>
                <p>
                  In 2026, she turned those memories into action. iPadAGirl launched its maiden outreach at JOAK Secondary School in Ibeju-Lekki, Lagos "” reaching 80 girls between JSS1 and SSS3 with complete hygiene kits and practical menstrual health education.
                </p>
                <p>
                  The response confirmed what Zzini had always known: the need was urgent, the impact was immediate, and the work was only beginning.
                </p>
                <div className="p-8 bg-ink-navy text-base-white rounded-3xl">
                  <p className="italic font-body-lg text-body-lg">
                    &ldquo;This initiative is about more than distributing sanitary pads. It is about giving girls accurate information, essential hygiene resources and the confidence to understand their bodies without embarrassment. Through iPadAGirl, we want every girl to know that menstruation is natural, her questions are valid, and she deserves to grow into womanhood with dignity.&rdquo;
                  </p>
                  <p className="mt-4 font-label-md text-coral-warm">"” Zzini Oluchi Ekeh, Founder, iPadAGirl</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline-md text-headline-md text-ink-navy mb-6">Her Vision for 10,000 Girls</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Zzini&apos;s goal is to reach at least 10,000 schoolgirls across Nigeria, beginning with underserved schools and communities where the need is greatest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "school", title: "Every School", desc: "Partnering with public secondary schools in underserved communities across all 36 states." },
                { icon: "groups", title: "Every Girl", desc: "Ensuring no girl is left behind "” from JSS1 to SSS3, urban or rural, Lagos or beyond." },
                { icon: "health_and_safety", title: "Every Cycle", desc: "Providing lasting education so girls are equipped for every month of every year." },
              ].map((item) => (
                <div key={item.title} className="bg-base-white p-8 rounded-2xl shadow-sm border border-surface-container-high">
                  <span className="material-symbols-outlined text-coral-warm text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-coral-warm text-base-white text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-6">
            <h2 className="font-headline-md text-headline-md">Support Zzini&apos;s Mission</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
              Every kit you sponsor brings us closer to 10,000 girls reached.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate" className="px-8 py-4 bg-base-white text-coral-warm rounded-xl font-bold hover:scale-105 transition-transform">
                Donate Now
              </Link>
              <Link href="/partner" className="px-8 py-4 border-2 border-base-white text-base-white rounded-xl font-bold hover:bg-white/10 transition-all">
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
