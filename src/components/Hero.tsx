import { SITE } from "@/config/site";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex items-center min-h-screen pt-28 pb-20 overflow-hidden bg-brown-deep"
    >
      {/* Ambient warm light — stands in for venue photography until real
          photos from the owner are uploaded. */}
      <div className="absolute inset-0 bokeh-glow opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,146,79,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-deep via-brown-deep/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="animate-fade-up text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-gold-light mb-6">
          Frankenmuth, Michigan
        </p>

        <h1 className="animate-fade-up animation-delay-200 font-serif italic text-5xl sm:text-6xl md:text-7xl font-medium text-warm-white leading-[1.05]">
          {SITE.name}
        </h1>

        <div className="animate-fade-up animation-delay-400 w-16 h-[2px] bg-gold mx-auto my-7" />

        <p className="animate-fade-up animation-delay-600 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {SITE.tagline}. Formerly known as {SITE.formerName}, reintroduced
          for a new generation of weddings, receptions, and celebrations.
        </p>

        <div className="animate-fade-up animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="/reserve"
            className="bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Check Availability &amp; Pricing
          </a>
          <a
            href="#about"
            className="border border-white/30 text-white font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </header>
  );
}
