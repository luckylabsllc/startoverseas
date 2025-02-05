import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";
import { HelpToggle } from "@/components/layout/HelpToggle";

const Index = () => {
  console.log("Rendering Index page");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <HeroSection />
          <ToolsSection />
          <BenefitsSection />
          <PricingSection />
        </div>
      </main>
      <Footer />
      <HelpToggle />
    </div>
  );
};

export default Index;