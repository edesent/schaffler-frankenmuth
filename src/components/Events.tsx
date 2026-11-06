import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const events = [
  { number: "01", title: "Wedding Receptions", copy: "Dinner, toasts, first dances, and a full evening together in a room designed to feel special before the first centerpiece is placed." },
  { number: "02", title: "Ceremonies", copy: "Ask how your vows and reception might work together at one address, with a smooth transition between the two parts of your day." },
  { number: "03", title: "Showers & Rehearsal Dinners", copy: "Bring your closest people together before the wedding for a gathering that feels polished, comfortable, and distinctly Frankenmuth." },
  { number: "04", title: "Milestones & Private Events", copy: "Anniversaries, birthdays, family celebrations, community gatherings, and company events can all begin with a private conversation and tour." },
];

export default function Events() {
  return (
    <section id="events" className="py-28 lg:py-36 bg-burgundy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[.78fr_1.22fr] gap-14 lg:gap-24">
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-gold-light">Gather Here</p>
              <h2 className="section-title text-white">One address.<br/><em className="text-gold-light">So many reasons.</em></h2>
              <p className="mt-6 text-white/70 leading-7 max-w-md">
                The Schäffler is being introduced first as a wedding venue, but its story has always been about bringing people together.
              </p>
              <a href="/reserve#availability" className="inline-flex mt-8 border-b border-gold-light pb-2 text-xs font-bold tracking-[.18em] uppercase text-gold-light hover:text-white hover:border-white transition-colors">
                Check your date&nbsp; →
              </a>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <Image
                  src="/venue/wedding-dance-floor.jpg"
                  alt="Wedding guests celebrating together on The Schäffler dance floor"
                  fill
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/65 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[.18em] uppercase text-white/80">A room made for celebrating</p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {events.map((event, index) => (
              <AnimateOnScroll key={event.title} delay={index * 80}>
                <article className="grid sm:grid-cols-[72px_1fr] gap-5 py-8 md:py-10 group">
                  <span className="font-serif italic text-3xl text-gold-light/70">{event.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-gold-light transition-colors">{event.title}</h3>
                    <p className="text-white/65 leading-7 max-w-2xl">{event.copy}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
