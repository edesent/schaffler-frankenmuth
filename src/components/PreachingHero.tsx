import { brandTop, brandBottom } from "@/config/site";

export default function PreachingHero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — solid warm tone stands in for the looping preaching clip */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,85,0.25),transparent_60%)]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/60 via-brown-deep/40 to-brown-deep/80 z-[1]" />

      {/* Badge — floats above hero content */}
      <div className="absolute top-24 left-0 right-0 z-[3] px-6">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-black/30 backdrop-blur-sm text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-brown-deep text-[10px] font-bold">
              01
            </span>
            <span className="whitespace-nowrap">Preaching Video Hero</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold/50" />
            <span className="hidden sm:inline-block normal-case tracking-normal text-[12px] font-normal text-white/70">
              Looping clip of the pastor preaching + tagline + CTAs
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          {brandTop}<br />{brandBottom}
        </h1>
        <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-lg md:text-xl italic text-white/85 leading-relaxed max-w-xl mx-auto mb-9 animate-fade-up animation-delay-800">
          &ldquo;Preach the word; be instant in season, out of season.&rdquo;
          <span className="block not-italic text-sm text-gold-light mt-2">— 2 Timothy 4:2 (KJV)</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="#watch-live"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Watch Live
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a href="#watch-live" className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase">
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
