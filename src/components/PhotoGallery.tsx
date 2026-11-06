import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";
import Image from "next/image";

const tiles = [
  { caption: "The Grand Reception Room", src: "/venue/grand-reception-room.jpg", position: "center", className: "md:col-span-2 md:row-span-2" },
  { caption: "A Packed Dance Floor", src: "/venue/wedding-dance-floor.jpg", position: "center", className: "" },
  { caption: "The Moments Between", src: "/venue/reception-candids.jpg", position: "60% center", className: "" },
  { caption: "Warm String Lights", src: "/venue/facebook-banquet-room.jpg", position: "center 24%", className: "" },
  { caption: "A Room Ready to Transform", src: "/venue/grand-reception-room.jpg", position: "center 68%", className: "md:col-span-2" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-28 lg:py-36 bg-[#1d1612] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <p className="eyebrow text-gold-light">Inside The Schäffler</p>
            <h2 className="section-title text-white">
              A room with <em className="text-gold-light">presence.</em>
            </h2>
            <p className="text-white/65 mt-4 max-w-2xl mx-auto leading-relaxed">
              Real celebrations and real views of the venue—from its timber-framed
              reception room to the dance floor and the candid moments guests remember.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-3 md:gap-4">
          {tiles.map((p, i) => (
            <AnimateOnScroll key={p.caption} delay={i * 60} className={p.className}>
              <figure
                className="group relative h-full rounded-2xl overflow-hidden shadow-sm bg-brown-deep"
              >
                <Image
                  src={p.src}
                  alt={`${p.caption} at The Schäffler in Frankenmuth`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: p.position }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-light/90">
                    {p.caption}
                  </p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>

        {SITE.facebookUrl && (
          <AnimateOnScroll delay={350}>
            <div className="text-center mt-10">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-brown-light text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown-light hover:text-white hover:-translate-y-0.5 transition-all"
              >
                Follow the Venue on Facebook
              </a>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
