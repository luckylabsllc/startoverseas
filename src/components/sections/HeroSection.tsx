import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

type Destination = {
  id: string;
  city: string;
  country: string;
};

const mockDestinations: Destination[] = [
  { id: "1", city: "Chicago", country: "USA" },
  { id: "2", city: "Chiang Mai", country: "Thailand" },
  { id: "3", city: "Chihuahua", country: "Mexico" },
  { id: "4", city: "Chittagong", country: "Bangladesh" },
  { id: "5", city: "Chiba", country: "Japan" }
];

const fetchDestinations = async (query: string): Promise<Destination[]> => {
  // In a real app, this would be an API call
  return mockDestinations.filter(dest => 
    dest.city.toLowerCase().includes(query.toLowerCase()) ||
    dest.country.toLowerCase().includes(query.toLowerCase())
  );
};

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: destinations, isLoading } = useQuery({
    queryKey: ['destinations', searchQuery],
    queryFn: () => fetchDestinations(searchQuery),
    enabled: searchQuery.length > 1
  });

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
          <Select onValueChange={(value) => setSearchQuery(value)}>
            <SelectTrigger className="h-12 text-base shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-gray-100">
              <SelectValue placeholder="Choose destination" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <SelectItem value="loading">Loading...</SelectItem>
              ) : destinations && destinations.length > 0 ? (
                destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.city}>
                    {`${dest.city}, ${dest.country}`}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="no-results">No destinations found</SelectItem>
              )}
            </SelectContent>
          </Select>
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