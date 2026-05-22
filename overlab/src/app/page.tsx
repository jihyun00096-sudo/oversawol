import Cursor from "@/components/ui/Cursor";
import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import MaterialArchiveSection from "@/components/sections/MaterialArchiveSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import PopupExhibitionSection from "@/components/sections/PopupExhibitionSection";
import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <main className="relative">
      <Cursor />
      <Navigation />
      <HeroSection />
      <WhySection />
      <MaterialArchiveSection />
      <TransformationSection />
      <ImpactSection />
      <CollaborationSection />
      <PopupExhibitionSection />
      <ProductSection />
    </main>
  );
}
