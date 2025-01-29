export interface City {
  name: string;
  country: string;
  popularity: number;
}

// Mock data - in production this would come from an API
export const cities: City[] = [
  { name: "Chicago", country: "USA", popularity: 100 },
  { name: "Chihuahua", country: "Mexico", popularity: 60 },
  { name: "Chiang Mai", country: "Thailand", popularity: 80 },
  { name: "London", country: "UK", popularity: 100 },
  { name: "Paris", country: "France", popularity: 100 },
  { name: "New York", country: "USA", popularity: 100 },
  { name: "Tokyo", country: "Japan", popularity: 100 },
  { name: "Sydney", country: "Australia", popularity: 90 },
  { name: "Dubai", country: "UAE", popularity: 90 },
  { name: "Singapore", country: "Singapore", popularity: 85 },
];

export const searchCities = (query: string): City[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];
  
  return cities
    .filter(city => 
      city.name.toLowerCase().includes(normalizedQuery) ||
      city.country.toLowerCase().includes(normalizedQuery)
    )
    .sort((a, b) => {
      // Prioritize exact matches
      const aStartsWith = a.name.toLowerCase().startsWith(normalizedQuery);
      const bStartsWith = b.name.toLowerCase().startsWith(normalizedQuery);
      
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      
      // Then sort by popularity
      return b.popularity - a.popularity;
    });
};