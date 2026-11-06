import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  { label: "Share the vision", text: "Tell us your preferred date, estimated guest count, and the kind of celebration you have in mind." },
  { label: "Walk the room", text: "Tour the venue in person, see the sightlines and scale, and talk through the details that matter most to you." },
  { label: "Build the plan", text: "Confirm current availability, pricing, layout options, vendor policies, and everything included for your date." },
];

const questions = [
  "What room layouts are available for my guest count?",
  "What are the current catering and bar arrangements?",
  "How much setup time is included?",
  "Which furnishings, linens, or decor are available?",
  "What are the accessibility and parking details?",
  "Which dates and tour times are currently open?",
];

export default function Planning() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="max-w-3xl mb-16">
            <p className="eyebrow">Planning Your Event</p>
            <h2 className="section-title">Start with the room.<br/><em>Make it entirely yours.</em></h2>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.label} delay={index * 100}>
                <div className="grid grid-cols-[56px_1fr] gap-5 pb-10 relative last:pb-0">
                  {index < steps.length - 1 && <span className="absolute left-[27px] top-14 bottom-0 w-px bg-gold/35" />}
                  <span className="relative z-10 w-14 h-14 rounded-full bg-brown-deep text-gold-light flex items-center justify-center font-serif italic text-xl">0{index + 1}</span>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-text-dark mb-2">{step.label}</h3>
                    <p className="leading-7 text-text-body">{step.text}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={180}>
            <aside className="bg-warm-white rounded-[2rem] border border-cream-dark p-8 md:p-10 shadow-sm">
              <p className="text-[10px] font-bold tracking-[.22em] uppercase text-gold-dark mb-4">Bring these to your tour</p>
              <h3 className="font-serif text-3xl text-text-dark mb-7">Six questions worth asking</h3>
              <ul className="space-y-4">
                {questions.map((question) => (
                  <li key={question} className="flex gap-3 text-sm leading-6 text-text-body">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-none" />
                    {question}
                  </li>
                ))}
              </ul>
              <a href="/reserve#availability" className="primary-button mt-9 w-full">Check availability <span>→</span></a>
            </aside>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
