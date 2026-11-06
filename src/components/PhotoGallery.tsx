import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";

const tiles = [
  { caption: "The Reception Hall", tone: "from-brown-light to-brown-deep" },
  { caption: "Ceremony Setup", tone: "from-gold to-brown-light" },
  { caption: "Evening String Lights", tone: "from-burgundy to-brown-deep" },
  { caption: "Historic Charm", tone: "from-sage to-brown-deep" },
  { caption: "Table & Decor", tone: "from-gold-dark to-brown" },
  { caption: "Little Bavaria Grounds", tone: "from-burgundy-dark to-brown-deep" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3">
              Gallery
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              A Glimpse of <em className="text-brown-light italic">The Schäffler</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              This demo site is standing in with design placeholders until
              real venue photos are added. See current photos of the space on
              our Facebook page.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((p, i) => (
            <AnimateOnScroll key={p.caption} delay={i * 60}>
              <figure
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-gradient-to-br ${p.tone}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
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
                See Real Photos on Facebook
              </a>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
