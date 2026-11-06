import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  {
    title: "Ceremony & Reception",
    body: "Host your ceremony and reception under one roof, with space that can flex for an intimate gathering or a large celebration.",
    icon: (
      <path d="M12 2L4 7v2h16V7l-8-5zM4 11v8h4v-6h8v6h4v-8H4z" />
    ),
  },
  {
    title: "Catering & Bar Service",
    body: "Talk through catering, bar service, and table setup options so the reception feels exactly the way you picture it.",
    icon: (
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    ),
  },
  {
    title: "Getting-Ready Space",
    body: "A place for the wedding party to get ready and settle in before the day gets underway.",
    icon: (
      <path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5zm0 12c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
    ),
  },
  {
    title: "Photo-Ready Grounds",
    body: "Frankenmuth&rsquo;s Little Bavaria setting makes for a memorable backdrop for wedding-day photos.",
    icon: (
      <path d="M9 2l-1.83 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    ),
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3">
              The Venue
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Your Day, <em className="text-brown-light italic">Your Way</em>
            </h2>
            <p className="text-text-body mt-4 max-w-2xl mx-auto">
              Every wedding is different, so we talk through the details with
              every couple before anything is finalized. Here&rsquo;s a sense
              of what we help with.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <AnimateOnScroll key={h.title} delay={i * 100}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark hover:shadow-lg hover:-translate-y-1 transition-all">
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
          <p className="text-center text-sm text-text-light mt-10 max-w-2xl mx-auto">
            Capacity, room configuration, and included amenities vary by date
            and package. Reach out and we&rsquo;ll walk through specifics for
            your event.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
