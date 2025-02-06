
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
    
    if (!Array.isArray(data)) {
      console.error('Invalid response format:', data);
      return [];
    }
    
    // Process and sort results
    const cities = data
      .map(item => {
        if (!item || !item.address) return null;
        const cityName = item.address.city || item.address.town || item.address.village || '';
        if (!cityName) return null;
        
        return {
          name: cityName,
          country: item.address.country || 'Unknown',
          // Use the API's importance score or default to 0.5
          popularity: item.importance || 0.5
        };
      })
      .filter((city): city is City => city !== null);

    // Return empty array if no cities found
    if (!cities || cities.length === 0) return [];

    // Create a unique identifier for each city
    const uniqueCitiesMap = new Map();
    cities.forEach(city => {
      const key = `${city.name}-${city.country}`;
      if (!uniqueCitiesMap.has(key) || city.popularity > uniqueCitiesMap.get(key).popularity) {
        uniqueCitiesMap.set(key, city);
      }
    });

    // Convert map back to array and sort by popularity
    return Array.from(uniqueCitiesMap.values())
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

