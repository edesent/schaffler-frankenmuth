import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-gold/20" />
      <div className="absolute -top-4 -right-4 w-64 h-64 rounded-full border border-gold/15" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-24 items-center">
          <AnimateOnScroll>
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/venue/our-story-dance.jpg"
                  alt="Couples dancing during a celebration at The Schäffler"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-10 max-w-[250px] bg-burgundy text-white p-6 rounded-2xl shadow-xl">
                <p className="font-serif italic text-xl leading-snug">A familiar place, ready for new memories.</p>
              </div>
              <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold rounded-full flex items-center justify-center bg-cream shadow-sm">
                <span className="font-serif italic text-4xl text-gold-dark">S</span>
              </div>
            </div>
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll delay={100}>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title max-w-2xl">
                A Frankenmuth gathering place begins its <em>next chapter.</em>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={180}>
              <blockquote className="my-9 pl-7 border-l-2 border-gold">
                <p className="font-serif italic text-xl md:text-2xl text-text-dark leading-relaxed">
                  “We are excited to reintroduce {SITE.formerName} as {SITE.name}.
                  For years this venue served as the backdrop for unforgettable celebrations…”
                </p>
                <cite className="block mt-4 text-[11px] font-bold not-italic tracking-[0.18em] uppercase text-gold-dark">
                  The Schäffler · Facebook introduction
                </cite>
              </blockquote>
            </AnimateOnScroll>

            <AnimateOnScroll delay={240}>
              <div className="space-y-5 text-[17px] text-text-body leading-8">
                <p>
                  Generations of guests knew this Heinlein Strasse address as
                  {" "}{SITE.formerName}: a place where wedding parties gathered,
                  families celebrated, and evenings unfolded beneath warm wood beams.
                </p>
                <p>
                  {SITE.name}{" "}honors that history while giving the venue a fresh identity.
                  The character remains unmistakable—the soaring timber structure,
                  layered reception room, soft lighting, and a setting rooted in
                  Frankenmuth&rsquo;s tradition of welcoming people well.
                </p>
              </div>
              <a href="/reserve#availability" className="text-link mt-8">Check availability <span>→</span></a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
