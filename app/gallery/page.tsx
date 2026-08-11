import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Gallery | iPadAGirl" };

const photos = [
  { src: "/images/outreach/MMC08241-Enhanced-NR.jpg", alt: "Girls at outreach", span: "col-span-2 row-span-2" },
  { src: "/images/outreach/MMC08284-Enhanced-NR.jpg", alt: "Kit distribution" },
  { src: "/images/outreach/MMC08289-Enhanced-NR.jpg", alt: "Education session" },
  { src: "/images/outreach/MMC08077.jpg", alt: "Outreach team" },
  { src: "/images/outreach/MMC08145.jpg", alt: "Founder at outreach" },
  { src: "/images/outreach/MMC08163.jpg", alt: "Girls in class" },
  { src: "/images/outreach/MMC08199.jpg", alt: "Hygiene kits ready", span: "col-span-2" },
  { src: "/images/outreach/MMC08212.jpg", alt: "Distribution" },
  { src: "/images/outreach/MMC08222.jpg", alt: "Girls receiving kits" },
  { src: "/images/outreach/MMC08224.jpg", alt: "Session in progress" },
  { src: "/images/outreach/MMC08236.jpg", alt: "Team photo" },
  { src: "/images/outreach/MMC08239.jpg", alt: "Girls empowered" },
  { src: "/images/outreach/MMC07877.jpg", alt: "Outreach preparation" },
  { src: "/images/outreach/MMC07936.jpg", alt: "Setting up" },
  { src: "/images/outreach/MMC07941.jpg", alt: "Community" },
  { src: "/images/outreach/MMC07985.jpg", alt: "Outreach day" },
  { src: "/images/outreach/MMC08007.jpg", alt: "Girls smiling" },
  { src: "/images/outreach/MMC08022.jpg", alt: "Kit contents" },
  { src: "/images/outreach/MMC08059.jpg", alt: "Education" },
  { src: "/images/outreach/MMC08063.jpg", alt: "Distribution queue" },
  { src: "/images/outreach/MMC08253.jpg", alt: "Outreach moment" },
  { src: "/images/outreach/MMC08262.jpg", alt: "Team on ground" },
  { src: "/images/outreach/MMC08277.jpg", alt: "Girls together" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-pink-soft/30">
          <div className="max-w-container-max mx-auto px-4 md:px-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-coral-warm/10 text-coral-warm rounded-full font-label-md text-label-md mb-6">JOAK OUTREACH — JULY 2026</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-ink-navy mb-6">Gallery</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Real moments from our maiden outreach at JOAK Secondary School, Ibeju-Lekki — where 80+ girls received their dignity kits and menstrual health education.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {photos.map((photo, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-ink-navy text-center text-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm">Follow our journey on social media</h2>
            <p className="text-surface-variant">@PadagirlwithZzini across Instagram, TikTok, Facebook, YouTube and LinkedIn</p>
            <a
              href="https://www.instagram.com/padagirlwithzzini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-coral-warm rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Follow Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
