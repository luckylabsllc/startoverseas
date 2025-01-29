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
}

export const searchCities = async (query: string): Promise<City[]> => {
  if (!query || query.length < 2) return [];

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query
      )}&format=json&addressdetails=1&featureType=city&limit=5`
    );

    if (!response.ok) {
      console.error('Failed to fetch cities');
      return [];
    }

    const data: NominatimResponse[] = await response.json();
    
    return data
      .map(item => {
        const cityName = item.address.city || item.address.town || item.address.village || '';
        if (!cityName) return null;
        
        return {
          name: cityName,
          country: item.address.country,
          // Set a default popularity score since the API doesn't provide this
          popularity: 80
        };
      })
      .filter((city): city is City => city !== null);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};