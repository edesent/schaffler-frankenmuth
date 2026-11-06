import AnimateOnScroll from "./AnimateOnScroll";
import { SITE, phoneTel, mapsUrl, mapsEmbedUrl } from "@/config/site";

export default function MapAddress() {
  return (
    <section id="contact" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
            Come See <em className="text-brown-light italic">The Schäffler</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          <AnimateOnScroll>
            <div className="h-full p-8 md:p-10 bg-cream rounded-2xl border border-cream-dark shadow-sm flex flex-col">
              <div className="space-y-5 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-0.5">Address</p>
                    <p className="text-text-dark font-medium">{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-0.5">Phone</p>
                    <a href={`tel:${phoneTel}`} className="text-text-dark font-medium hover:text-brown-light transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-brown-light flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-0.5">Facebook</p>
                    <a
                      href={SITE.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dark font-medium hover:text-brown-light transition-colors"
                    >
                      The Schäffler on Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Get Directions
                </a>
                <a
                  href="/reserve"
                  className="inline-block text-center bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-cream-dark relative bg-cream-dark">
              <iframe
                title={`Map to ${SITE.name}`}
                src={mapsEmbedUrl}
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
