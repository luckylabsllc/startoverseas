
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HelpToggle } from "@/components/layout/HelpToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="space-y-16 pb-16">
        <HeroSection />
        <ToolsSection />
        <BenefitsSection />
        <PricingSection />
        <Footer />
      </div>
      <HelpToggle />
    </div>
  );
};

export default Index;
