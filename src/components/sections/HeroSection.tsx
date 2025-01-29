import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { City, searchCities } from "@/lib/cities";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSearch = async (value: string) => {
    setSearchQuery(value);
    
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce search
    timeoutRef.current = setTimeout(async () => {
      if (value.length >= 2) {
        setIsLoading(true);
        const searchResults = await searchCities(value);
        setResults(searchResults);
        setSelectedIndex(0);
        setIsLoading(false);
      } else {
        setResults([]);
      }
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          const selected = results[selectedIndex];
          setSearchQuery(`${selected.name}, ${selected.country}`);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleSelectCity = (city: City) => {
    setSearchQuery(`${city.name}, ${city.country}`);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  useEffect(() => {
    setIsOpen(searchQuery.length > 0);
  }, [searchQuery]);

  return (
    <section className="text-center py-12 space-y-6">
      <h1 className="text-5xl font-bold tracking-tight dark:text-white">
        Your App for Everything Overseas
      </h1>
      <p className="text-sm font-bold text-black dark:text-gray-300 max-w-3xl mx-auto">
        Unlock banger opportunities to live your best life overseas with the most powerful AI travel tool ever created.
      </p>
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-full max-w-[313px] relative">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Where to?"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            className="h-12 text-base shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-gray-100"
          />
          {isOpen && (
            <div className="absolute w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 max-h-[300px] overflow-y-auto z-50">
              {isLoading ? (
                <div className="px-4 py-2 text-gray-500 text-sm">
                  Loading...
                </div>
              ) : results.length > 0 ? (
                <div className="py-1">
                  {results.map((city, index) => (
                    <div
                      key={`${city.name}-${city.country}`}
                      className={cn(
                        "px-4 py-2 cursor-pointer text-left flex justify-between items-center",
                        selectedIndex === index ? "bg-primary/10" : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      )}
                      onClick={() => handleSelectCity(city)}
                    >
                      <span>{city.name}, {city.country}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-2 text-gray-500 text-sm">
                  {searchQuery.length < 2 ? "Type at least 2 characters" : "No results found"}
                </div>
              )}
            </div>
          )}
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