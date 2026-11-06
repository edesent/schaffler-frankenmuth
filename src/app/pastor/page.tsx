import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { SITE, pastorFullName, pastorShortName, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "Meet Our Pastor",
  description: `Get to know ${pastorShortName} of ${SITE.name} — his testimony, his family, and the heart behind his ministry.`,
  alternates: { canonical: "/pastor" },
  openGraph: {
    title: `Meet Our Pastor | ${SITE.name}`,
    description: "Get to know our pastor and the heart behind his ministry.",
    url: "/pastor",
    type: "profile",
  },
};

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Our Pastor"
          title={`Meet ${pastorFullName}`}
          subtitle="Husband, father, and shepherd of our church family"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg">
            <p className="text-lg text-text-body leading-relaxed mb-6">
              {pastorFullName} has served our church family since [year]. He is a graduate of
              [Bible college], holds a [degree], and is married to [wife&rsquo;s name].
              They have [N] children: [names].
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              His Heart for Ministry
            </h2>
            <p className="text-text-body leading-relaxed mb-6">
              [Replace this paragraph with a personal note from the pastor about his calling,
              his passion for preaching the King James Bible, and his love for the church
              family God has entrusted to him.]
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              How to Reach Him
            </h2>
            <p className="text-text-body leading-relaxed">
              {pastorFullName} loves hearing from members and visitors alike. Call the church
              office at <a href={`tel:${phoneTel}`} className="text-brown-light font-semibold">{SITE.phone}</a>,
              email <a href={`mailto:${SITE.email}`} className="text-brown-light font-semibold">{SITE.email}</a>,
              or use the chat widget on the homepage.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
