
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";
import { HelpToggle } from "@/components/layout/HelpToggle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });
    
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-16">
        <HeroSection />
        
        {isAuthenticated && (
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="glass-card p-8 flex flex-col items-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Your Relocation Dashboard is Ready</h2>
              <p className="text-muted-foreground max-w-2xl">
                Access your personalized dashboard to track visa applications, explore housing options, 
                and manage all aspects of your international relocation.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/dashboard" className="flex items-center gap-2">
                  Go to Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
        
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
