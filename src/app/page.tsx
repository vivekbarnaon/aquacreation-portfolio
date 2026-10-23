import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesOverview from "@/components/home/ServicesOverview";
import Philosophy from "@/components/home/Philosophy";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServicesOverview />
      <Philosophy />
      <CtaSection />
    </>
  );
}


