import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Gallery | iPadAGirl" };

const images = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgBnz73GS38NDoG85M1M_tqaI8Jmd5V9XMW2-Ro1f2NTsHHzOF7dPNBu_zXcojsC1DDTioBkugPiGiA44S8gX8-3Xim4V2OsEsyaUrvYtLMxrV_RVgb4XkjxvcZ_ZewLJ3Uf5hBNhDbGy4xlj789F385ow-56LQ9YEj_Bl7f2ra82UK_RCHlcbj_EMT2kwR3EOfXOQ8kF-MWF3V-S_qEgT2Bed9PAfs0mU3D3lTRcLcQ_vKdP9_leRFQ", caption: "Volunteer handing over a hygiene kit", tag: "JOAK Â· July 2026" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHIqPCeeNobsZ3pdYntkzK0eXpWbG-tBsg6HSkG9U6bU_Wu8j1bHoz6miMgEY_9DgSFCwgUvuygM5oP09MV1vDY_RofGUYsXNwoCEcA-tdavBicy-e5BvXoGeGnAINLuEgdMaqZaWObkh8wr_ENCS7fBHK51pX4FNk_Z5OdHSIGIvARoB8VV_Vm4e-guVxZ2VlANfVbGZhBJcNVAfZjN4XH1YknhK3vk5NTQnaxRvxdQZl6vP77s0Gg", caption: "Menstrual health education session in progress", tag: "JOAK Â· July 2026" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7zwbZQs2HPGqrx264lvfErjGlzXISBA6kLM-S63immQ3Fkwdw3NWeC83icnEUPKgykeG1bYnVjvE0Za6ccPyTsifad1UMIExUmVoSSg52dx1Yd9pSzqROce6cZIuhj_gpcyBPriygsBp_Kj5l0vHTbQBlVfR40WJ9gdBJIdBdkp0EK24x-6dJ8OwqkgSCwGxVwY09o6B2ZPP6AqWVuKsa1JQqOxN-1uevSJk6Byx0P-Hx6iLLwtzogg", caption: "Girls holding their new hygiene kits", tag: "JOAK Â· July 2026" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSV7_XrKGauLuLHsYbcN-MGnOUVmSKlohI0ht3CXYK-A8lAS6S_RtSLGHyAyNNkElJaLissADVn6y9YCagSKisCaVKdGm2DRFYuryh3Gu6jXVdIPgiAx3dluzR23bIPahORaVGS3UYjh8FStkp-S1VVaNhhUhzuhQ1uZ_71GrzCgSwCLERH9yagjPio1Y3HSfJWVFggZxkZpPtW61lujXyBVWCZMveSwRL14jucTtZ_QtqZtsaisyJ2w", caption: "Confident, ready and in school", tag: "iPadAGirl" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDnp36dqltJ-QBp9iUOcT9mCBEE6R5wSBa_mZsr_57qW29qOAjQTCjQBovLLJDTvk-oHRR8UKl8vYLMQZOtRPtCchf58nmYG3jd92YA6nSbyWL1DgRBqQX8NZ8scbG7R91PlLzvGgaMzwI2C0A-t2IWL_tRBelG1NlRzED-wyopmvu_MNPpjqLn0c2Y9Sr6vpWZhtzsmFzeVlmfTPtt_BAkGa9p0-ebFO9XbZWpIWwbUpQe6D5DP3jCg", caption: "Founder Zzini Oluchi Ekeh at the outreach", tag: "iPadAGirl" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5JNERJEfJqFEbuYsIsRfw-PjiPADibudiz79axqfRlgv6uqHb6rEFVU3ycj1vgwCxVUkIL_tMTjlf278fgl7pvWttc7ZWz1hAbY9yoY1yyXCGGG7lJC27hMXDoj6osNkbCPZYBdm3vASHG5PsA7zh7rcvmc3n4KS2L5ekvBZJETWz0tjW6_iIFL4wjrSY8mt0KDQZaD49PFh9SXJfXO7RGfnVhEfMLg4Ws5PtPrc1I__zqrFA6A9-ig", caption: "iPadAGirl Dignity Kit â€” contents on display", tag: "iPadAGirl" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-ink-navy text-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-base-white rounded-full font-label-md text-label-md mb-6">GALLERY</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">In the Field</h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
              Photographs from our outreaches, showing girls, communities and the people who make this work possible. All images published with appropriate consent.
            </p>
          </div>
        </section>

        <section className="py-20 bg-base-white">
          <div className="max-w-container-max mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="font-headline-sm text-headline-sm text-ink-navy mb-2">JOAK Secondary School Outreach â€” July 2026</h2>
              <p className="text-on-surface-variant font-body-md">Okun-Idado, Ibeju-Lekki, Lagos State Â· 80 girls reached</p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-surface-container-high group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-base-white">
                    <p className="font-body-md text-ink-navy text-sm">{img.caption}</p>
                    <p className="font-label-md text-on-surface-variant text-xs mt-1 uppercase tracking-wider">{img.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low text-center">
          <div className="max-w-container-max mx-auto px-4 md:px-6 space-y-4">
            <h2 className="font-headline-sm text-headline-sm text-ink-navy">More outreaches mean more photos</h2>
            <p className="text-on-surface-variant">Help fund our next outreach so we can add to this gallery.</p>
            <a href="/donate" className="inline-block px-8 py-4 bg-coral-warm text-white rounded-xl font-bold hover:opacity-90 transition-opacity">Donate Now</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
