import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";
import { HelpToggle } from "@/components/layout/HelpToggle";

const Index = () => {
  console.log("Rendering Index page"); // Debug log
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-16">
        <HeroSection />
        <ToolsSection />
        <BenefitsSection />
        <PricingSection />
      </main>
      <Footer />
      <HelpToggle />
    </div>
  );
};

export default Index;