import AnimateOnScroll from "./AnimateOnScroll";
import { SITE } from "@/config/site";

const questions = [
  { q: `Is ${SITE.name} the former ${SITE.formerName}?`, a: `Yes. ${SITE.name} is the new name being introduced for the venue at 281 Heinlein Strasse that many Frankenmuth families remember as ${SITE.formerName}.` },
  { q: "Can I tour the venue before deciding?", a: "That is the best place to begin. Request a private walk-through so you can see the room, discuss your date, and confirm the details that apply to your event." },
  { q: "Are pricing and packages available online?", a: "The venue’s current packages have not been published online. Share your date and event details to request the most accurate availability and pricing information." },
  { q: "What should I confirm during my tour?", a: "Ask about current capacity, room layouts, catering and bar arrangements, setup timing, included furnishings, accessibility, parking, and vendor policies." },
  { q: "Where is the venue located?", a: "The Schäffler is at 281 Heinlein Strasse in Frankenmuth, Michigan 48734, in the heart of Michigan’s Little Bavaria." },
];

export default function FAQ() {
  return (
    <section className="py-28 lg:py-36 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow">Before You Visit</p>
            <h2 className="section-title">A few helpful <em>answers.</em></h2>
          </div>
        </AnimateOnScroll>
        <div className="divide-y divide-cream-dark border-y border-cream-dark">
          {questions.map((item, index) => (
            <AnimateOnScroll key={item.q} delay={index * 50}>
              <details className="group py-6">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-serif text-xl md:text-2xl text-text-dark">
                  {item.q}
                  <span className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center text-gold-dark text-2xl font-sans font-light transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pt-4 pr-14 text-text-body leading-7 max-w-3xl">{item.a}</p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
