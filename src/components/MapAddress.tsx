import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";
import { SITE, phoneTel, mapsUrl } from "@/config/site";

export default function MapAddress() {
  return (
    <section id="contact" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={18}
          name="Where to Find Us"
          purpose="Address, embedded map, phone, and directions"
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          <AnimateOnScroll>
            <div className="h-full p-8 md:p-10 bg-warm-white rounded-2xl border border-cream-dark shadow-sm flex flex-col">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                Come Worship <em className="text-brown-light italic">With Us</em>
              </h2>

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
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-0.5">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-text-dark font-medium hover:text-brown-light transition-colors">
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-cream-dark relative bg-cream-dark">
              <div className="absolute inset-0 iframe-shimmer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brown-light/70 p-8 text-center">
                <svg className="w-16 h-16 mb-4 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                </svg>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase">Embedded Map</p>
                <p className="text-xs text-brown-light/50 mt-2 normal-case tracking-normal max-w-xs">
                  Replace with a Google Maps iframe embed pointing to your actual address.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
