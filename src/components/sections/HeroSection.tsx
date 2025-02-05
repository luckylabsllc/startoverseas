import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [cityQuery, setCityQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityQuery.trim()) {
      navigate(`/dossier/${encodeURIComponent(cityQuery)}`);
    }
  };

  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
          Your Journey Abroad <br />
          <span className="text-primary">Starts Here</span>
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Plan your move, explore the world, and thrive abroad with Overseas
        </p>

        <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2">
          <Input
            type="text"
            placeholder="Enter a city name..."
            value={cityQuery}
            onChange={(e) => setCityQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            Search
          </Button>
        </form>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Popular cities: Tokyo, London, Berlin, Singapore
          </p>
        </div>
      </div>
    </section>
  );
};