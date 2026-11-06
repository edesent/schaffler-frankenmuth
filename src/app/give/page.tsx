import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Give Online",
  description: `Give your tithes and offerings to ${SITE.name} securely online — or by mail or in person.`,
  alternates: { canonical: "/give" },
  openGraph: {
    title: `Give Online | ${SITE.name}`,
    description: "Support the work of the Lord through your tithes and offerings.",
    url: "/give",
    type: "website",
  },
};

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Giving"
          title="Support the Lord's Work"
          subtitle="&ldquo;Every man according as he purposeth in his heart, so let him give.&rdquo; — 2 Cor 9:7"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give Online</h2>
              <p className="text-text-body leading-relaxed mb-6">
                The fastest, easiest way — set up one-time or recurring giving through our
                secure giving portal.
              </p>
              <a
                href="#"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Open Giving Portal
              </a>
            </div>
            <div id="mail" className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give by Mail</h2>
              <p className="text-text-body leading-relaxed mb-4">
                Prefer the old-fashioned way? Mail your check to:
              </p>
              <address className="not-italic font-serif text-text-dark leading-relaxed mb-4">
                {SITE.name}<br />
                Attn: Treasurer<br />
                {SITE.address.street}<br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </address>
              <p className="text-sm text-text-light">
                Make checks payable to <strong>{SITE.name}</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
