"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { SITE, phoneTel } from "@/config/site";

export default function ReserveForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3">
              Reserve Your Date
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Request Pricing &amp; <em className="text-brown-light italic">Check Availability</em>
            </h2>
            <p className="text-text-body mt-3">
              Every wedding is different, so we don&rsquo;t post flat pricing —
              tell us a bit about your day and we&rsquo;ll follow up with
              availability and pricing for your date.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          {submitted ? (
            <div className="p-10 bg-warm-white rounded-2xl border border-cream-dark text-center">
              <svg className="w-14 h-14 mx-auto mb-4 text-gold-dark" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                Thank you — request received.
              </h3>
              <p className="text-text-body">
                We&rsquo;ll be in touch about availability and pricing for
                your date. In the meantime, feel free to call{" "}
                <a href={`tel:${phoneTel}`} className="text-brown-light font-semibold hover:underline">
                  {SITE.phone}
                </a>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="p-8 md:p-10 bg-warm-white rounded-2xl border border-cream-dark space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane & John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Phone or Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How should we reach you?"
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                    Approx. Guest Count
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="e.g. 150"
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
                  Tell Us About Your Day
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceremony and reception, just a reception, type of event, anything else we should know..."
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Request Pricing &amp; Availability
              </button>

              <p className="text-xs text-text-muted text-center pt-1">
                This demo form is not yet connected to send messages. Prefer
                to talk now? Call{" "}
                <a href={`tel:${phoneTel}`} className="text-brown-light hover:underline">
                  {SITE.phone}
                </a>.
              </p>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
