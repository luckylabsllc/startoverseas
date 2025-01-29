import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="text-center py-12 space-y-6">
      <h1 className="text-5xl font-bold tracking-tight dark:text-white">
        Your App for Everything Overseas
      </h1>
      <p className="text-sm font-bold text-black dark:text-gray-300 max-w-3xl mx-auto">
        Unlock banger opportunities to live your best life overseas with the most powerful AI travel tool ever created.
      </p>
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-full max-w-[285px]">
          <Input
            type="text"
            placeholder="Where to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 text-base shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          />
        </div>
        <Button 
          size="lg" 
          className="text-base px-8 py-6 font-bold relative w-[200px] bg-primary hover:bg-primary/90 transition-all duration-300" 
          asChild
        >
          <Link to="/signup">START TRAVELING</Link>
        </Button>
      </div>
    </section>
  );
};