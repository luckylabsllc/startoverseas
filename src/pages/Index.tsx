import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="space-y-16">
        <HeroSection />
        <ToolsSection />
        <BenefitsSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;