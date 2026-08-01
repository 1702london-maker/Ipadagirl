import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-navy text-base-white py-20">
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-coral-warm text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>
              <span className="font-headline-sm text-coral-warm font-bold">
                iPadAGirl
              </span>
            </div>
            <p className="text-surface-variant font-body-md max-w-sm leading-relaxed">
              Empowering Nigerian schoolgirls through access to essential hygiene
              products and comprehensive menstrual health education. Together, we
              build dignity.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "tiktok", "youtube", "linkedin"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-warm transition-colors"
                    aria-label={icon}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {icon === "instagram"
                        ? "photo_camera"
                        : icon === "facebook"
                        ? "group"
                        : icon === "tiktok"
                        ? "music_note"
                        : icon === "youtube"
                        ? "play_circle"
                        : "business"}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/founder", label: "Meet the Founder" },
                { href: "/impact", label: "Our Impact" },
                { href: "/transparency", label: "Transparency" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-surface-variant hover:text-coral-warm transition-colors text-body-md"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/partner", label: "Partner With Us" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/request-outreach", label: "Request an Outreach" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-surface-variant hover:text-coral-warm transition-colors text-body-md"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/learning-hub", label: "Girls' Learning Hub" },
                { href: "/resources", label: "Parents & Teachers" },
                { href: "/stories", label: "News & Stories" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-surface-variant hover:text-coral-warm transition-colors text-body-md"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-y border-white/10 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-headline-sm text-base-white mb-1">
                Stay connected to our mission
              </p>
              <p className="text-surface-variant text-body-md">
                Get outreach updates, impact reports and stories.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-base-white placeholder:text-surface-variant focus:outline-none focus:border-coral-warm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-coral-warm text-white rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-surface-variant text-label-md">
          <p>Â© 2026 iPadAGirl. Empowering health and education through social progress.</p>
          <div className="flex flex-wrap gap-4">
            {["Privacy Policy", "Safeguarding Policy", "Terms of Use", "Contact"].map(
              (item) => (
                <a key={item} href="#" className="hover:text-coral-warm transition-colors">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
