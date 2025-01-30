import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { City, searchCities } from "@/lib/cities";
import { cn } from "@/lib/utils";
import { Globe, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSearch = async (value: string) => {
    setSearchQuery(value);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

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
          handleSelectCity(selected);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleSelectCity = (city: City) => {
    const cityQuery = `${city.name}, ${city.country}`;
    setSearchQuery(cityQuery);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleStartTravel = () => {
    if (searchQuery) {
      navigate(`/dossier/${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    setIsOpen(searchQuery.length > 0);
  }, [searchQuery]);

  return (
    <section className="relative text-center py-8 space-y-4 overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent -z-10" />
      
      <div className="sticker mb-6">
        <Sparkles className="w-4 h-4" />
        Most Powerful AI Travel Tool Ever Created
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent leading-[1.2] pb-1">
        Your App for Everything Overseas
      </h1>
      
      <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
        Unlock banger opportunities to live your best life overseas.
      </p>
      
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-full max-w-md px-4 sm:px-0 relative">
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Where do you want to live?"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              className="h-14 pl-10 text-lg shadow-lg border-transparent focus:border-primary"
            />
          </div>
          
          {isOpen && (
            <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-h-[300px] overflow-y-auto z-50">
              {isLoading ? (
                <div className="px-4 py-3 text-muted-foreground">
                  Loading...
                </div>
              ) : results.length > 0 ? (
                <div className="py-2">
                  {results.map((city, index) => (
                    <div
                      key={`${city.name}-${city.country}`}
                      className={cn(
                        "px-4 py-3 cursor-pointer text-left flex justify-between items-center hover:bg-secondary transition-colors",
                        selectedIndex === index && "bg-primary/10"
                      )}
                      onClick={() => handleSelectCity(city)}
                    >
                      <span>{city.name}, {city.country}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-3 text-muted-foreground">
                  {searchQuery.length < 2 ? "Type at least 2 characters" : "No results found"}
                </div>
              )}
            </div>
          )}
        </div>
        
        <button 
          onClick={handleStartTravel}
          className="
            px-8 py-4 
            text-lg font-bold text-[#fff8e7]
            bg-[#e03347] hover:bg-[#c92e40]
            border border-black
            rounded-lg
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1),inset_0_1px_4px_rgba(0,0,0,0.25)]
            transition-all duration-200
            transform hover:translate-y-[2px] hover:translate-x-[2px]
          "
        >
          GO OVERSEAS
        </button>
      </div>
    </section>
  );
};