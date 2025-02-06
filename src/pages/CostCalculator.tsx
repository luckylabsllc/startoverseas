
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { searchCities } from "@/lib/cities";
import { useToast } from "@/components/ui/use-toast";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CostCalculator = () => {
  const [sourceCity, setSourceCity] = useState("");
  const [targetCity, setTargetCity] = useState("");
  const [sourceCityOpen, setSourceCityOpen] = useState(false);
  const [targetCityOpen, setTargetCityOpen] = useState(false);
  const [sourceCitySearch, setSourceCitySearch] = useState("");
  const [targetCitySearch, setTargetCitySearch] = useState("");
  const { toast } = useToast();

  const { data: sourceCities, isLoading: isLoadingSource } = useQuery({
    queryKey: ['cities', sourceCitySearch],
    queryFn: () => searchCities(sourceCitySearch),
    enabled: sourceCitySearch.length >= 2,
    retry: false,
    staleTime: 30000, // Cache results for 30 seconds
  });

  const { data: targetCities, isLoading: isLoadingTarget } = useQuery({
    queryKey: ['cities', targetCitySearch],
    queryFn: () => searchCities(targetCitySearch),
    enabled: targetCitySearch.length >= 2,
    retry: false,
    staleTime: 30000, // Cache results for 30 seconds
  });

  const handleCompare = async () => {
    if (!sourceCity || !targetCity) {
      toast({
        title: "Error",
        description: "Please select both cities to compare",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/compare-cost-of-living`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          sourceCity,
          targetCity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to compare cities');
      }

      const data = await response.json();
      toast({
        title: "Comparison Results",
        description: data.comparison,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to compare cities. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Cost of Living Calculator</h1>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Compare Cities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current City</label>
                  <Popover open={sourceCityOpen} onOpenChange={setSourceCityOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={sourceCityOpen}
                        className="w-full justify-between"
                      >
                        {sourceCity || "Select city..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search cities..."
                          value={sourceCitySearch}
                          onValueChange={setSourceCitySearch}
                        />
                        <CommandEmpty>No cities found.</CommandEmpty>
                        <CommandGroup>
                          {isLoadingSource ? (
                            <div className="p-2">
                              <Skeleton className="h-8" />
                              <Skeleton className="h-8 mt-2" />
                            </div>
                          ) : (
                            sourceCities?.map((city) => (
                              <CommandItem
                                key={`${city.name}-${city.country}`}
                                value={`${city.name}, ${city.country}`}
                                onSelect={(value) => {
                                  setSourceCity(value);
                                  setSourceCityOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    sourceCity === `${city.name}, ${city.country}` ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {city.name}, {city.country}
                              </CommandItem>
                            ))
                          )}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target City</label>
                  <Popover open={targetCityOpen} onOpenChange={setTargetCityOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={targetCityOpen}
                        className="w-full justify-between"
                      >
                        {targetCity || "Select city..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search cities..."
                          value={targetCitySearch}
                          onValueChange={setTargetCitySearch}
                        />
                        <CommandEmpty>No cities found.</CommandEmpty>
                        <CommandGroup>
                          {isLoadingTarget ? (
                            <div className="p-2">
                              <Skeleton className="h-8" />
                              <Skeleton className="h-8 mt-2" />
                            </div>
                          ) : (
                            targetCities?.map((city) => (
                              <CommandItem
                                key={`${city.name}-${city.country}`}
                                value={`${city.name}, ${city.country}`}
                                onSelect={(value) => {
                                  setTargetCity(value);
                                  setTargetCityOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    targetCity === `${city.name}, ${city.country}` ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {city.name}, {city.country}
                              </CommandItem>
                            ))
                          )}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={handleCompare}
                disabled={!sourceCity || !targetCity}
              >
                Compare Cities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CostCalculator;
