import Cursor from "@/components/ui/Cursor";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import NewHeroSection from "@/components/sections/NewHeroSection";
import NewPhilosophySection from "@/components/sections/NewPhilosophySection";
import TransformationSection from "@/components/sections/TransformationSection";
import NewMaterialArchiveShowcaseSection from "@/components/sections/NewMaterialArchiveSection";
import NewProductShowcaseSection from "@/components/sections/NewProductShowcaseSection";
import NewProjectsSection from "@/components/sections/NewProjectsSection";
import NewCTASection from "@/components/sections/NewCTASection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Cursor />
      <Navigation />
      <NewHeroSection />
      <NewPhilosophySection />
      <TransformationSection />
      <NewMaterialArchiveShowcaseSection />
      <NewProductShowcaseSection />
      <NewProjectsSection />
      <NewCTASection />
      <Footer />
    </main>
  );
}
