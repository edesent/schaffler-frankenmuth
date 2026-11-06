import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const highlights = [
  {
    title: "Timber Architecture",
    body: "Exposed beams, a vaulted profile, and layered railings give the room a warm character that feels unmistakably Frankenmuth.",
    icon: (
      <path d="M12 2L4 7v2h16V7l-8-5zM4 11v8h4v-6h8v6h4v-8H4z" />
    ),
  },
  {
    title: "Reception Atmosphere",
    body: "Soft chandeliers, suspended string lights, and generous sightlines create a natural canvas for dinner, dancing, and toasts.",
    icon: (
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    ),
  },
  {
    title: "Flexible Styling",
    body: "Classic white linens, dramatic draping, florals, or a modern minimal palette all sit comfortably against the venue’s warm woodwork.",
    icon: (
      <path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5zm0 12c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
    ),
  },
  {
    title: "Destination Setting",
    body: "Place your event in the heart of Michigan’s Little Bavaria, close to the restaurants, lodging, and charm guests expect from Frankenmuth.",
    icon: (
      <path d="M9 2l-1.83 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    ),
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="py-28 lg:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="eyebrow">The Venue</p>
            <h2 className="section-title">Historic warmth. <em>Endless possibility.</em></h2>
            <p className="text-text-body mt-4 max-w-2xl mx-auto">
              The beauty of The Schäffler is already built into the room. Your details
              simply make it yours.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="relative aspect-[16/8] min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl mb-10">
            <Image
              src="/venue/grand-reception-room.jpg"
              alt="The Schäffler reception room with exposed timber beams, warm lanterns, string lights, and white draping"
              fill
              sizes="(min-width: 1280px) 1152px, 95vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white">
              <div>
                <p className="text-[10px] font-bold tracking-[.24em] uppercase text-gold-light mb-2">The signature room</p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight max-w-[17rem] sm:max-w-none">Warm wood. Soft light. Grand scale.</h3>
              </div>
              <p className="text-xs text-white/65 md:text-right">A real view of the room<br/>Courtesy of The Schäffler</p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <AnimateOnScroll key={h.title} delay={i * 100}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mb-5">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    {h.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-text-dark mb-2">
                  {h.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{h.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <p className="text-center text-sm text-text-light mt-10 max-w-3xl mx-auto">
            Room layouts, current capacity, catering and bar arrangements, included furnishings,
            accessibility, and vendor policies should be confirmed directly during your tour.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
