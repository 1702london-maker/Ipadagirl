import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Resources for Parents & Teachers | iPadAGirl" };

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-wellbeing-teal/10">
          <div className="max-w-container-max mx-auto px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-wellbeing-teal/10 text-wellbeing-teal rounded-full font-label-md text-label-md mb-6">FOR ADULTS</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Resources for Parents & Teachers</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Many girls lack guidance at home or school. These resources help parents and teachers support girls through puberty and menstruation with confidence and compassion.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Parent Resources */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-coral-warm/10 text-coral-warm rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">family_restroom</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-ink-navy">For Parents</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "How to talk to your daughter about menstruation", desc: "A calm, honest conversation early makes all the difference. Here's how to start." },
                    { title: "Preparing for her first period", desc: "What to buy, what to say, and how to make sure she feels supported rather than alarmed." },
                    { title: "Building a period emergency kit", desc: "The essential items every girl should have at home and in her school bag." },
                    { title: "Supporting a girl experiencing pain or anxiety", desc: "When cramps or emotions feel overwhelming — how you can help without minimising what she feels." },
                    { title: "Responding without shame or judgement", desc: "The words we use matter. How to create a home where menstruation is normal, not secret." },
                  ].map((item) => (
                    <div key={item.title} className="bg-base-white p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all cursor-pointer">
                      <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-2 text-[18px]">{item.title}</h3>
                      <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Resources */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-dignity-purple/10 text-dignity-purple rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-ink-navy">For Teachers</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Supporting students who begin menstruating at school", desc: "What to do in the moment — calmly, quickly and without drawing attention." },
                    { title: "Responding to period-related bullying", desc: "Teasing about periods is common and harmful. How to address it effectively in the classroom." },
                    { title: "Creating a period-friendly school", desc: "Practical steps schools can take to ensure no girl misses class because of her period." },
                    { title: "Emergency sanitary product provision", desc: "Schools should always have a discreet supply. Here's how to set this up and manage it." },
                    { title: "How to request an iPadAGirl workshop", desc: "Invite us to your school and we'll handle the rest — kits, facilitators, education, and Q&A." },
                  ].map((item) => (
                    <div key={item.title} className="bg-base-white p-6 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all cursor-pointer">
                      <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-2 text-[18px]">{item.title}</h3>
                      <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ink-navy text-base-white text-center">
          <div className="max-w-container-max mx-auto px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm">Want iPadAGirl at your school?</h2>
            <p className="text-surface-variant font-body-md">We deliver education directly to students so you don&apos;t have to do it alone.</p>
            <Link href="/request-outreach" className="inline-block px-8 py-4 bg-coral-warm text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
              Request a School Outreach
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
