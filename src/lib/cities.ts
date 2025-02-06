
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
    // Add error handling for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query
      )}&format=json&addressdetails=1&limit=100`,
      {
        signal: controller.signal
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Failed to fetch cities:', response.status, response.statusText);
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

    // Only create Map if we have cities
    if (cities.length === 0) return [];

    // Sort by importance/popularity and remove duplicates
    const uniqueCities = Array.from(
      new Map(
        cities.map(city => [`${city.name}-${city.country}`, city])
      ).values()
    );

    // Return top 10 results sorted by popularity
    return uniqueCities
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10);
  } catch (error) {
    // Improved error logging
    if (error instanceof Error) {
      console.error('Error fetching cities:', error.message);
    } else {
      console.error('Unknown error fetching cities:', error);
    }
    return [];
  }
};
