import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Meet the Team | iPadAGirl" };

const team = [
  {
    name: "Zzini Oluchi Ekeh",
    role: "Founder, Project iPadAGirl",
    tags: ["TV Host", "Producer", "PR Strategist", "Social Impact Advocate"],
    image: "/images/outreach/MMC08145.jpg",
    bio: [
      "Zzini Oluchi Ekeh is a Nigerian media professional, presenter, producer, PR strategist, and social impact advocate with over a decade of experience across television, radio, event hosting, media production, and brand communications.",
      "Passionate about using her platform and influence to create meaningful change, Zzini founded Project iPadAGirl — an initiative dedicated to supporting girls in underserved communities by providing access to menstrual hygiene products, education, and practical knowledge about personal and intimate hygiene.",
      "Through Project iPadAGirl, Zzini is committed to helping young girls navigate menstruation with dignity, confidence, and the right information, while contributing to a future where no girl is limited by the lack of access to basic menstrual care.",
      "She currently serves as a Sports Presenter on SuperSport's Monday Night Football, is the West African Correspondent for iGaming AFRIKA, and is the Head of Operations at AquilaMediaCo.",
    ],
    quote: "When we empower girls with the right resources, knowledge, and support, we empower communities and create a stronger future.",
  },
  {
    name: "Ezinne Joy Nwaokike",
    role: "Admin Manager",
    tags: ["Office Administration", "Executive Support", "Operations"],
    image: "/images/outreach/MMC08222.jpg",
    bio: [
      "Ezinne keeps things running behind the scenes at iPadAGirl. With a background in office administration and executive support, she brings structure and organisation to the team's outreach efforts, ensuring every kit reaches the girls who need it.",
      "She is passionate about dignity, education, and empowerment for young girls, and is proud to support a cause that changes lives one classroom at a time.",
    ],
    quote: null,
  },
  {
    name: "Shola Daniel",
    role: "Creative Director",
    tags: ["Brand Identity", "Design", "Print", "Digital Media"],
    image: "/images/outreach/MMC08224.jpg",
    bio: [
      "Shola Daniel is the Creative Director at AquilaMediaCo, a vibrant creative with over a decade of experience in the design and print industry. His depth of creativity and strategic thinking has positioned him to work with companies and brands at home and abroad.",
      "Shola is a Brand Identity specialist and product promotions expert with a swift, innovative approach to visual storytelling. He brings creative spontaneity, proactive ideas, and new growth strategies to everything iPadAGirl puts out in the world.",
      "A Computer Science graduate of Obafemi Awolowo University, Ile-Ife, Shola currently heads Aquila Media and Aquila PrintHub.",
    ],
    quote: null,
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-pink-soft/20">
          <div className="max-w-container-max mx-auto px-4 md:px-6 text-center">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">
              THE PEOPLE BEHIND THE MISSION
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">
              Meet the Team
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              iPadAGirl is powered by a small, passionate team committed to ensuring every schoolgirl in Nigeria grows up with dignity, knowledge, and access to what she needs.
            </p>
          </div>
        </section>

        {/* Founder — full-width featured card */}
        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={team[0].image}
                    alt={team[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-coral-warm rounded-2xl shadow-xl text-base-white hidden md:block">
                  <div className="text-headline-sm font-bold">2026</div>
                  <div className="text-label-md opacity-80">Year Founded</div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <span className="inline-block px-3 py-1 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md text-sm">
                  FOUNDER
                </span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy">{team[0].name}</h2>
                <p className="font-body-lg text-coral-warm font-semibold">{team[0].role}</p>
                <div className="flex flex-wrap gap-2">
                  {team[0].tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-surface-container rounded-full font-label-md text-label-md text-on-surface-variant text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-16 h-1.5 bg-coral-warm rounded-full" />
                <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {team[0].bio.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {team[0].quote && (
                  <div className="p-6 bg-ink-navy text-base-white rounded-2xl">
                    <p className="italic font-body-md text-body-md">&ldquo;{team[0].quote}&rdquo;</p>
                    <p className="mt-3 font-label-md text-coral-warm">— {team[0].name}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-ink-navy mb-3">Our Core Team</h2>
              <div className="w-16 h-1.5 bg-coral-warm rounded-full mx-auto" />
            </div>

            {/* Team cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {team.slice(1).map((member) => (
                <div key={member.name} className="bg-base-white rounded-3xl border border-surface-container-high shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-ink-navy">{member.name}</h3>
                      <p className="font-label-md text-coral-warm mt-1">{member.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((t) => (
                        <span key={t} className="px-3 py-1 bg-pink-soft/30 rounded-full font-label-md text-label-md text-ink-navy text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {member.bio.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story pull-quote */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="p-8 bg-base-white rounded-3xl border-l-4 border-coral-warm shadow-sm text-left">
              <p className="italic font-body-lg text-body-lg text-ink-navy">
                &ldquo;This initiative is about more than distributing sanitary pads. It is about giving girls accurate information, essential hygiene resources and the confidence to understand their bodies without embarrassment. Through iPadAGirl, we want every girl to know that menstruation is natural, her questions are valid, and she deserves to grow into womanhood with dignity.&rdquo;
              </p>
              <p className="mt-4 font-label-md text-coral-warm">— Zzini Oluchi Ekeh, Founder, iPadAGirl</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-coral-warm text-base-white text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-6">
            <h2 className="font-headline-md text-headline-md">Support Our Mission</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
              Every kit you sponsor brings us one girl closer to 10,000.
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
