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
          subtitle={`Real views of ${SITE.name} today and the room’s Sullivan’s Black Forest history.`}
        />
        <PhotoGallery />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
