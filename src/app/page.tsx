import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Spaces from "@/components/Spaces";
import PhotoGallery from "@/components/PhotoGallery";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";
import { SITE, logoUrl, ogImageUrl, phoneTel } from "@/config/site";

const venueSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: SITE.name,
  alternateName: SITE.formerName,
  url: SITE.url,
  logo: logoUrl,
  image: `${SITE.url.replace(/\/$/, "")}${ogImageUrl}`,
  description: SITE.description,
  telephone: phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  sameAs: [SITE.facebookUrl].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Spaces />
        <PhotoGallery />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
