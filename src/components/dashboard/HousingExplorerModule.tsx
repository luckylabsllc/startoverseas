
import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MapPin, Building2, Home, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HousingExplorerModule() {
  const [showMap, setShowMap] = useState(false);
  
  // Demo housing data
  const housingData = [
    {
      city: "Lisbon",
      avgRent: "€850",
      changeRate: "+5%",
      listings: 124
    },
    {
      city: "Porto",
      avgRent: "€650",
      changeRate: "+2%",
      listings: 87
    }
  ];

  return (
    <DashboardCard 
      title="Housing Explorer" 
      isDraggable
      footer={
        <div className="flex justify-between w-full items-center">
          <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
            <Plus className="mr-2 h-4 w-4" />
            <span>Add Location</span>
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Live Map</span>
            <Switch 
              checked={showMap} 
              onCheckedChange={setShowMap}
            />
          </div>
        </div>
      }
    >
      <div className="mb-4">
        <div className="relative">
          <MapPin className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Search city or neighborhood" 
            className="pl-10"
          />
        </div>
      </div>

      {showMap ? (
        <div className="h-64 rounded-md bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Interactive map would appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {housingData.map((location, index) => (
            <div key={index} className="glass-card p-3 hover:bg-secondary/30 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2 text-primary" />
                  <h3 className="font-semibold">{location.city}</h3>
                </div>
                <span className="text-xs py-1 px-2 bg-primary/10 rounded-full">
                  {location.changeRate}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Avg. Rent:</span>
                  <span className="font-semibold ml-2">{location.avgRent}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Listings:</span>
                  <span className="font-semibold ml-2">{location.listings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
}
