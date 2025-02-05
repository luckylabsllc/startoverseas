export interface City {
  name: string;
  country: string;
  popularity: number;
}

interface NominatimResponse {
  display_name: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    country: string;
  };
  importance?: number;
}

export const searchCities = async (query: string): Promise<City[]> => {
  if (!query || query.length < 2) return [];

  try {
    // Increase limit to get more results that we can sort through
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query
      )}&format=json&addressdetails=1&featureType=city&limit=100`
    );

    if (!response.ok) {
      console.error('Failed to fetch cities');
      return [];
    }

    const data: NominatimResponse[] = await response.json();
    
    // Process and sort results
    const cities = data
      .map(item => {
        const cityName = item.address.city || item.address.town || item.address.village || '';
        if (!cityName) return null;
        
        return {
          name: cityName,
          country: item.address.country,
          // Use the API's importance score or default to 0.5
          popularity: item.importance || 0.5
        };
      })
      .filter((city): city is City => city !== null);

    // Sort by importance/popularity and remove duplicates
    const uniqueCities = Array.from(
      new Map(
        cities.map(city => [`${city.name}-${city.country}`, city])
      ).values()
    );

    // Return top 100 results sorted by popularity
    return uniqueCities
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 100);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};