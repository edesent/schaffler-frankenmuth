import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import PhotoGallery from "@/components/PhotoGallery";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look at ${SITE.name}, the Frankenmuth wedding venue formerly known as ${SITE.formerName}.`,
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Gallery"
          title="A Glimpse Inside"
          subtitle={`Design placeholders stand in below until real photos of ${SITE.name} are added. See current photos on our Facebook page.`}
        />
        <PhotoGallery />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
