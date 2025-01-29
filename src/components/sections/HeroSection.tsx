import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Select from "react-select/async";
import { useState } from "react";

// Type for destination option
type DestinationOption = {
  value: string;
  label: string;
  type: 'city' | 'state' | 'airport';
};

export const HeroSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationOption | null>(null);

  // Function to load options based on input
  const loadOptions = async (inputValue: string) => {
    if (inputValue.length < 2) return [];
    
    try {
      // This is a mock API call - in a real application, you would call your travel API here
      const response = await fetch(
        `https://api.example.com/destinations?search=${encodeURIComponent(inputValue)}`
      );
      const data = await response.json();
      
      // Mock data for demonstration
      return [
        { value: 'NYC', label: 'New York (JFK)', type: 'airport' },
        { value: 'LAX', label: 'Los Angeles (LAX)', type: 'airport' },
        { value: 'SF', label: 'San Francisco, California', type: 'city' },
        { value: 'CHI', label: 'Chicago, Illinois', type: 'city' },
      ];
    } catch (error) {
      console.error('Error fetching destinations:', error);
      return [];
    }
  };

  return (
    <section className="text-center py-12 space-y-6">
      <h1 className="text-5xl font-bold tracking-tight dark:text-white">
        Your App for Everything Overseas
      </h1>
      <p className="text-sm font-bold text-black dark:text-gray-300 max-w-3xl mx-auto">
        Unlock banger opportunities to live your best life overseas with the most powerful AI travel tool ever created.
      </p>
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="w-full max-w-[313px]">
          <Select
            placeholder="Choose destination"
            value={selectedDestination}
            onChange={(option) => setSelectedDestination(option as DestinationOption)}
            loadOptions={loadOptions}
            async
            className="text-base"
            classNames={{
              control: (state) => 
                "h-12 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] !min-h-[48px]",
              input: () => "text-base",
              option: () => "text-base",
            }}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null
            }}
            noOptionsMessage={({ inputValue }) => 
              inputValue.length < 2 ? "Type to search destinations" : "No destinations found"
            }
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