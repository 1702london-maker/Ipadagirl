import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Girls' Learning Hub | iPadAGirl" };

const topics = [
  { icon: "child_care", title: "What Is Puberty?", desc: "Your body changes. It's completely normal. Here's everything you need to know about what's happening and why." },
  { icon: "water_drop", title: "What Is Menstruation?", desc: "A period is your body's way of preparing for the future. It happens every month and it's a sign of good health." },
  { icon: "calendar_month", title: "Understanding Your Cycle", desc: "Learn how to track your period, understand what's normal, and what changes to look out for." },
  { icon: "redeem", title: "How to Use a Sanitary Pad", desc: "Step-by-step: how to apply, wear, change and dispose of a pad correctly and hygienically." },
  { icon: "soap", title: "Staying Clean During Your Period", desc: "Simple, practical hygiene steps to stay fresh, comfortable and healthy during your cycle." },
  { icon: "medical_information", title: "Managing Period Pain", desc: "Cramps are common. Here's how to manage them safely "” and when to speak to a trusted adult." },
  { icon: "psychology", title: "Body Changes & Confidence", desc: "Puberty affects your emotions too. Understanding how to talk to yourself kindly is part of growing up." },
  { icon: "groups", title: "Supporting a Friend", desc: "If a friend is struggling with her period, here's how to help without making her feel embarrassed." },
  { icon: "quiz", title: "Questions Girls Are Afraid to Ask", desc: "Real questions, honest answers. Nothing is too embarrassing here. We've heard it all." },
  { icon: "warning", title: "When to Speak to an Adult", desc: "There are times when you need support from a parent, teacher or health professional. Here's when and how." },
  { icon: "cancel", title: "Period Myths "” Busted", desc: "Swimming, exercise, cooking food "” let's clear up the myths that have caused unnecessary shame for generations." },
  { icon: "backpack", title: "Your Period Emergency Bag", desc: "What to keep in your bag so you're always prepared, wherever you are." },
];

export default function LearningHubPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-dignity-purple/10">
          <div className="max-w-container-max mx-auto px-4 md:px-6 text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-dignity-purple/10 text-dignity-purple rounded-full font-label-md text-label-md mb-6">SAFE SPACE</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Girls&apos; Learning Hub</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A safe, friendly space where you can learn everything about puberty, menstruation and growing up "” in plain language, with no judgement. All content is age-appropriate and medically reviewed.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic) => (
                <div key={topic.title} className="bg-base-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-dignity-purple/10 text-dignity-purple rounded-xl flex items-center justify-center mb-6 group-hover:bg-dignity-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{topic.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-ink-navy mb-3">{topic.title}</h3>
                  <p className="text-on-surface-variant font-body-md">{topic.desc}</p>
                  <div className="mt-6 text-dignity-purple font-label-md text-label-md inline-flex items-center gap-1">
                    READ MORE <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ask Section */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-headline-md text-headline-md text-ink-navy">Ask iPadAGirl</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Have a question you&apos;re too shy to ask? Submit it anonymously below. Do not include your name or any personal details.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left space-y-2">
                <p className="font-label-md text-amber-800">Important Reminders:</p>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>• This service does not replace professional medical advice.</li>
                  <li>• Do not share your name, school or personal details.</li>
                  <li>• If you need urgent help, speak to a trusted adult or health professional.</li>
                </ul>
              </div>
              <form className="text-left space-y-4">
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-dignity-purple transition-colors resize-none"
                  placeholder="Type your anonymous question here..."
                />
                <button type="submit" className="w-full py-4 bg-dignity-purple text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Submit Anonymously
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
