import { SITE } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <header id="home" className="relative min-h-[100svh] overflow-hidden bg-brown-deep">
      <Image
        src="/venue/grand-reception-room.jpg"
        alt="The Schäffler reception room with exposed timber beams, chandeliers, string lights, and wedding tables"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.02]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,17,13,.9)_0%,rgba(24,17,13,.66)_45%,rgba(24,17,13,.28)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17100c] via-transparent to-black/30" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="relative z-10 min-h-[100svh] max-w-7xl mx-auto px-6 pt-36 pb-24 flex items-end lg:items-center">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-gold" />
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.34em] uppercase text-gold-light">
              A New Chapter in Frankenmuth
            </p>
          </div>

          <h1 className="animate-fade-up animation-delay-200 font-serif text-[clamp(4.25rem,12vw,8.5rem)] font-medium text-white leading-[.78] tracking-[-0.055em]">
            The <span className="block italic text-gold-light mt-4">Schäffler</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-10 text-lg md:text-2xl text-white/86 max-w-2xl leading-relaxed font-light">
            {SITE.tagline}. The beloved venue once known as {SITE.formerName} returns with a new name and the same unmistakable timber-framed character.
          </p>

          <div className="animate-fade-up animation-delay-600 flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="/reserve#availability"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-brown-deep font-bold text-xs tracking-[0.18em] uppercase px-8 py-4.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Check Availability
            <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/gallery"
            className="inline-flex items-center justify-center border border-white/45 text-white font-bold text-xs tracking-[0.18em] uppercase px-8 py-4.5 rounded-full backdrop-blur-sm hover:bg-white hover:text-brown-deep hover:-translate-y-0.5 transition-all"
          >
            View the Gallery
          </a>
        </div>

          <div className="animate-fade-up animation-delay-800 mt-14 flex flex-wrap gap-x-10 gap-y-4 text-white/70">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold-light mb-1">Location</p>
              <p className="text-sm font-semibold">Frankenmuth, Michigan</p>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold-light mb-1">Celebrations</p>
              <p className="text-sm font-semibold">Weddings · Receptions · Events</p>
            </div>
          </div>
      </div>
      </div>

      <p className="absolute bottom-5 right-6 z-10 text-[9px] uppercase tracking-[0.14em] text-white/45">
        Photo courtesy of The Schäffler
      </p>
    </header>
  );
}
