import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CityInfo {
  temperature: number;
  description: string;
  language: string;
  population: string;
  famousFor: string;
}

const fetchCityInfo = async (cityQuery: string): Promise<CityInfo> => {
  // First, get the weather
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityQuery)}&units=metric&appid=8d9b58b6c4654f1f41f6ce21a844f03c`
  );
  const weatherData = await weatherResponse.json();
  
  // Then, get city information from OpenAI
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful travel assistant. Provide concise information about cities.",
        },
        {
          role: "user",
          content: `Provide the following information about ${cityQuery} in JSON format:
            1. Primary language spoken
            2. Approximate population
            3. What the city is most famous for
            Keep each response very brief (1-2 sentences max).`,
        },
      ],
    }),
  });

  const aiData = await response.json();
  const cityData = JSON.parse(aiData.choices[0].message.content);

  return {
    temperature: Math.round(weatherData.main.temp),
    description: weatherData.weather[0].description,
    language: cityData.language,
    population: cityData.population,
    famousFor: cityData.famousFor,
  };
};

const DossierPage = () => {
  const { cityQuery } = useParams<{ cityQuery: string }>();

  const { data: cityInfo, isLoading } = useQuery({
    queryKey: ["cityInfo", cityQuery],
    queryFn: () => fetchCityInfo(cityQuery || ""),
    enabled: !!cityQuery,
  });

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Link>
        </Button>

        <h1 className="text-4xl font-bold text-center mb-8">{cityQuery}</h1>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[100px] w-full" />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6 space-y-2">
              <h2 className="text-xl font-semibold">Current Weather</h2>
              <p className="text-3xl font-bold">{cityInfo?.temperature}°C</p>
              <p className="text-muted-foreground capitalize">{cityInfo?.description}</p>
            </Card>

            <Card className="p-6 space-y-2">
              <h2 className="text-xl font-semibold">Language</h2>
              <p>{cityInfo?.language}</p>
            </Card>

            <Card className="p-6 space-y-2">
              <h2 className="text-xl font-semibold">Population</h2>
              <p>{cityInfo?.population}</p>
            </Card>

            <Card className="p-6 space-y-2">
              <h2 className="text-xl font-semibold">Famous For</h2>
              <p>{cityInfo?.famousFor}</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DossierPage;