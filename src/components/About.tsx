import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              A Frankenmuth Landmark, <em className="text-brown-light italic">Reintroduced</em>
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <blockquote className="relative p-8 md:p-12 bg-warm-white rounded-2xl border border-cream-dark shadow-sm mb-10">
            <span className="absolute -top-5 left-8 text-6xl font-serif text-gold/40 select-none">&ldquo;</span>
            <p className="font-serif italic text-xl md:text-2xl text-text-dark leading-relaxed">
              We are excited to reintroduce {SITE.formerName} as {SITE.name}. For years
              this venue served as the backdrop for unforgettable&nbsp;celebrations&hellip;
            </p>
            <p className="text-sm text-text-light mt-5 not-italic">
              — from The Schäffler&rsquo;s Facebook page
            </p>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll delay={250}>
          <div className="grid md:grid-cols-2 gap-10 text-text-body leading-relaxed">
            <p>
              For years, this address on Heinlein Strasse was known to the
              Frankenmuth community as {SITE.formerName} — the setting for
              countless wedding days, receptions, and family celebrations.
              That history is still very much part of this building.
            </p>
            <p>
              Today the venue continues under a new name, {SITE.name}, with a
              renewed focus on hosting weddings and private events in
              Michigan&rsquo;s Little Bavaria. We&rsquo;d love to show you
              around and talk through what your day could look like here.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
