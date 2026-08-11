import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "About Us | iPadAGirl" };

const pillars = [
  {
    icon: "visibility",
    color: "coral-warm",
    title: "Our Vision",
    body: "To create a future where every girl has the knowledge, confidence and resources to manage her menstrual health with dignity.",
  },
  {
    icon: "flag",
    color: "dignity-purple",
    title: "Our Mission",
    body: "To educate, empower and support teenage schoolgirls — particularly those in underserved communities — with menstrual sanitary products, personal hygiene resources and accurate hygiene education that enables them to experience and navigate adolescence with dignity and confidence.",
  },
  {
    icon: "track_changes",
    color: "wellbeing-teal",
    title: "Our Goal",
    body: "To reach and support at least 10,000 schoolgirls across schools and rural communities in Africa, starting with schools in Nigeria.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">
                ABOUT IPADAGIRL
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">
                Who We Are
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Project iPadAGirl is a long-term menstrual health and personal hygiene
                initiative committed to supporting schoolgirls across Africa — starting with Nigeria. We
                combine hygiene-kit distribution with practical education about
                menstruation, puberty, self-care and personal hygiene.
              </p>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Goal */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((item) => (
                <div key={item.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm">
                  <div className={`w-14 h-14 bg-${item.color}/10 text-${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-ink-navy text-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md mb-4">Our Core Values</h2>
              <p className="text-surface-variant max-w-2xl mx-auto">
                These principles guide every decision we make and every outreach we deliver.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {["Dignity", "Education", "Compassion", "Transparency", "Inclusion", "Confidence", "Long-term Impact"].map((val) => (
                <div key={val} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="font-headline-sm text-coral-warm text-sm font-bold">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the name */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-dignity-purple/10 text-dignity-purple rounded-full font-label-md text-label-md">
                OUR NAME
              </span>
              <h2 className="font-headline-md text-headline-md text-ink-navy">Why iPadAGirl?</h2>
              <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                &ldquo;Pad a Girl&rdquo; represents providing a girl with menstrual protection â€” but our initiative goes far beyond pads. We support a girl&apos;s complete hygiene, knowledge and confidence.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The name is a call to action: every time you hear it, you&apos;re being asked to do something â€” to pad a girl, to give her what she needs to thrive. It captures both the practical and the aspirational sides of our work.
              </p>
            </div>
            <div className="bg-pink-soft rounded-3xl p-10 space-y-6">
              <div className="text-6xl font-bold text-coral-warm font-display-lg">i<span className="text-dignity-purple">Pad</span>A<span className="text-wellbeing-teal">Girl</span></div>
              <p className="font-body-md text-on-surface-variant">
                Each letter carries meaning. The lowercase &ldquo;i&rdquo; echoes a personal conviction while keeping the focus on the action to Pad. &ldquo;Pad&rdquo; names the action. &ldquo;A Girl&rdquo; names the beneficiary — every single one of them.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-coral-warm text-base-white text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-6">
            <h2 className="font-headline-md text-headline-md">Ready to be part of something meaningful?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate" className="px-8 py-4 bg-base-white text-coral-warm rounded-xl font-bold hover:scale-105 transition-transform">
                Donate Now
              </Link>
              <Link href="/founder" className="px-8 py-4 border-2 border-base-white text-base-white rounded-xl font-bold hover:bg-white/10 transition-all">
                Meet the Founder
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
