import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";
import { pastorFullName, pastorShortName } from "@/config/site";

export default function WelcomePastor() {
  return (
    <section id="welcome" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={3}
          name="Welcome from the Pastor"
          purpose="A warm, personal invitation in the pastor's own voice"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gradient-to-br from-brown-light to-brown-deep">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gold-light/80 p-8 text-center">
                <svg className="w-20 h-20 mb-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase">
                  Pastor &amp; Family Photo
                </p>
                <p className="text-xs text-gold-light/60 mt-2 normal-case tracking-normal">
                  Replace with /pastor-family.jpg
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                A Message From Our Pastor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                You&rsquo;re Invited to <em className="text-brown-light italic">Visit Us</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                Hello friend — I&rsquo;m {pastorFullName}, and on behalf of our church family
                I want to personally invite you to join us this Sunday.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-6">
                We&rsquo;re an old-fashioned, Bible-believing church that loves the Lord, preaches
                the King James Bible, and loves people. Whether you&rsquo;ve been in church your
                whole life or you&rsquo;ve never set foot in one, you&rsquo;ll find a warm welcome here.
              </p>
              <p className="font-serif italic text-text-light mb-8">
                — {pastorShortName}
              </p>
              <a
                href="/pastor"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Meet {pastorFullName}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
