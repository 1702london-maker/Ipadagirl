import Link from "next/link";

const socials = [
  { label: "Instagram", icon: "photo_camera", href: "https://www.instagram.com/padagirlwithzzini" },
  { label: "Facebook", icon: "group", href: "https://web.facebook.com/profile.php?id=61592765517960" },
  { label: "TikTok", icon: "music_note", href: "https://www.tiktok.com/@padagirlwithzzini" },
  { label: "YouTube", icon: "play_circle", href: "https://www.youtube.com/@padagirlwithzzini" },
  { label: "LinkedIn", icon: "business", href: "https://www.linkedin.com/company/padagirlwithzzini" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-navy text-base-white py-20">
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Project iPadAGirl" className="h-14 w-auto object-contain brightness-0 invert" />
            <p className="text-surface-variant font-body-md max-w-sm leading-relaxed">
              Empowering schoolgirls across Africa through access to essential hygiene
              products and comprehensive menstrual health education. Together, we
              build dignity.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-warm transition-colors"
                  aria-label={s.label}
                >
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                </a>
              ))}
            </div>
            <div className="space-y-1 text-surface-variant text-sm">
              <p>📞 <a href="tel:+2349169457000" className="hover:text-coral-warm">+234 916 945 7000</a></p>
              <p>✉️ <a href="mailto:letspadagirlnow@gmail.com" className="hover:text-coral-warm">letspadagirlnow@gmail.com</a></p>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">About</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/founder", label: "Meet the Team" },
                { href: "/impact", label: "Our Impact" },
                { href: "/transparency", label: "Transparency" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-surface-variant hover:text-coral-warm transition-colors text-body-md">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/partner", label: "Partner With Us" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/request-outreach", label: "Request an Outreach" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-surface-variant hover:text-coral-warm transition-colors text-body-md">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-label-md text-label-md text-wellbeing-teal mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {[
                { href: "/learning-hub", label: "Girls' Learning Hub" },
                { href: "/resources", label: "Parents & Teachers" },
                { href: "/stories", label: "News & Stories" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-surface-variant hover:text-coral-warm transition-colors text-body-md">
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
              <p className="font-headline-sm text-base-white mb-1">Stay connected to our mission</p>
              <p className="text-surface-variant text-body-md">Get outreach updates, impact reports and stories.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-base-white placeholder:text-surface-variant focus:outline-none focus:border-coral-warm"
              />
              <button type="submit" className="px-6 py-3 bg-coral-warm text-white rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-surface-variant text-label-md">
          <p>© 2026 Project iPadAGirl. Empowering health and education through social progress.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-coral-warm transition-colors">Privacy Policy</Link>
            <Link href="/safeguarding-policy" className="hover:text-coral-warm transition-colors">Safeguarding Policy</Link>
            <Link href="/terms-of-use" className="hover:text-coral-warm transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-coral-warm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
