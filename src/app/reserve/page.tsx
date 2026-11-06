import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ReserveForm from "@/components/ReserveForm";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Check Availability",
  description: `Request pricing and check availability for your wedding or event at ${SITE.name} in Frankenmuth, Michigan.`,
};

export default function ReservePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Your Celebration Starts Here"
          title="Check Your Date"
          subtitle="Browse the venue calendar when available, then connect directly with The Schäffler to confirm your date, current pricing, and a private tour."
        />
        <ReserveForm />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
