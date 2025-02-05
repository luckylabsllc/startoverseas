import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, MapPin, Globe2, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CountryInfo {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  area: number;
  region: string;
  subregion: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  timezones: string[];
  car: {
    side: string;
  };
}

const fetchCountryInfo = async (cityQuery: string): Promise<CountryInfo> => {
  // Ensure we have a valid query
  if (!cityQuery) throw new Error('No city query provided');
  
  // Split the query and get the last part which should be the country
  const parts = cityQuery.split(',');
  if (parts.length < 2) throw new Error('Invalid city query format');
  
  const country = parts[parts.length - 1].trim();
  console.log('Fetching country info for:', country);
  
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch country information for ${country}`);
  }
  
  const data = await response.json();
  return data[0];
};

const DossierPage = () => {
  const { cityQuery } = useParams<{ cityQuery: string }>();

  const { data: countryInfo, isLoading } = useQuery({
    queryKey: ["countryInfo", cityQuery],
    queryFn: () => fetchCountryInfo(cityQuery || ""),
    enabled: !!cityQuery,
  });

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getLanguages = (langs: Record<string, string>) => {
    return Object.values(langs).join(", ");
  };

  const getCurrencies = (currencies: Record<string, { name: string; symbol: string }>) => {
    return Object.keys(currencies).join(", ");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Link>
        </Button>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[400px] w-full" />
          </div>
        ) : countryInfo ? (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <MapPin className="w-4 h-4" />
                Location Information
              </div>
              <h1 className="text-4xl font-bold">{countryInfo.name.common}</h1>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Basic Information</h2>
                <div className="grid gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Official Name</p>
                    <p className="font-medium">{countryInfo.name.official}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capital</p>
                    <p className="font-medium">{countryInfo.capital?.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Population</p>
                    <p className="font-medium">{formatNumber(countryInfo.population)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p className="font-medium">{formatNumber(countryInfo.area)} km²</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Additional Details</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Region</p>
                      <p className="font-medium">{countryInfo.region}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Subregion</p>
                      <p className="font-medium">{countryInfo.subregion}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="font-medium">{getLanguages(countryInfo.languages)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Currencies</p>
                    <p className="font-medium">{getCurrencies(countryInfo.currencies)}</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Timezone(s)</p>
                        <p className="font-medium">{countryInfo.timezones.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Driving Side</p>
                        <p className="font-medium capitalize">{countryInfo.car.side}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No information found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DossierPage;