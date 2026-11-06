import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ReserveForm from "@/components/ReserveForm";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Reserve Your Date",
  description: `Request pricing and check availability for your wedding or event at ${SITE.name} in Frankenmuth, Michigan.`,
};

export default function ReservePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Reserve Your Date"
          title="Check Availability & Pricing"
          subtitle="We don't publish flat pricing because every wedding is different. Send us a few details and we'll follow up with availability and pricing for your date."
        />
        <ReserveForm />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
