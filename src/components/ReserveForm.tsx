import AnimateOnScroll from "./AnimateOnScroll";
import VenueCalendar from "./VenueCalendar";
import { SITE, phoneTel } from "@/config/site";

const ready = [
  "Your preferred date or season",
  "An estimated guest count",
  "Ceremony, reception, or both",
  "The atmosphere you want to create",
  "Any questions about vendors or setup",
];

export default function ReserveForm() {
  const calendarEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL?.trim();

  return (
    <section id="availability" className="py-28 lg:py-36 bg-cream scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow">Check Availability</p>
            <h2 className="section-title">Start with <em>your date.</em></h2>
            <p className="mt-5 text-lg text-text-body leading-8">
              {calendarEmbedUrl
                ? "Browse the venue calendar below, then reach out to confirm your date and schedule a private walk-through."
                : "Call or message The Schäffler to check your preferred date and schedule a private walk-through."}
            </p>
          </div>
        </AnimateOnScroll>

        {calendarEmbedUrl && (
          <AnimateOnScroll delay={80}>
            <div className="mb-14 rounded-[2rem] overflow-hidden border border-cream-dark bg-warm-white shadow-xl">
              <div className="px-6 py-4 bg-brown-deep text-white flex items-center justify-between gap-4">
                <p className="font-serif text-xl">Venue Calendar</p>
                <span className="text-[10px] font-bold tracking-[.18em] uppercase text-gold-light">Dates shown are subject to confirmation</span>
              </div>
              <iframe
                title="The Schäffler availability calendar"
                src={calendarEmbedUrl}
                loading="lazy"
                className="w-full h-[620px] border-0 bg-white"
              />
            </div>
          </AnimateOnScroll>
        )}

        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-start">
          <AnimateOnScroll>
            <div>
              <p className="eyebrow">Confirm Your Date</p>
              <h2 className="section-title">Your date deserves a <em>closer look.</em></h2>
              <p className="mt-7 text-lg text-text-body leading-8 max-w-2xl">
                A private walk-through is the best way to experience the scale,
                warmth, and possibilities of The Schäffler. Call or message the
                venue to confirm availability, ask about current pricing, and choose
                a tour time.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                <a href={`tel:${phoneTel}`} className="group p-6 rounded-2xl bg-brown-deep text-white hover:bg-burgundy transition-colors">
                  <span className="block text-[10px] font-bold tracking-[.2em] uppercase text-gold-light mb-3">Call the venue</span>
                  <span className="font-serif text-2xl">{SITE.phone}</span>
                  <span className="block text-sm text-white/60 mt-2">Tap to call now →</span>
                </a>
                <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-warm-white border border-cream-dark text-text-dark hover:border-gold transition-colors">
                  <span className="block text-[10px] font-bold tracking-[.2em] uppercase text-gold-dark mb-3">Message online</span>
                  <span className="font-serif text-2xl">Facebook</span>
                  <span className="block text-sm text-text-light mt-2">Open The Schäffler’s page →</span>
                </a>
              </div>

              <p className="mt-6 text-sm text-text-light">
                Tours are arranged directly with the venue. Availability, packages,
                and event details should be confirmed for your specific date.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={160}>
            <aside className="relative bg-warm-white rounded-[2rem] p-8 md:p-10 border border-cream-dark shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full bg-gold/10" />
              <p className="relative text-[10px] font-bold tracking-[.22em] uppercase text-gold-dark mb-4">Before you reach out</p>
              <h3 className="relative font-serif text-3xl text-text-dark mb-7">Have these details handy</h3>
              <ul className="relative space-y-4">
                {ready.map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-text-body">
                    <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-xs font-bold text-gold-dark">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-9 pt-7 border-t border-cream-dark">
                <p className="font-serif italic text-xl text-text-dark">
                  “A familiar place, ready for new memories.”
                </p>
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
