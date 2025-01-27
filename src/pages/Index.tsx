import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Cost Calculator",
    description: "Compare living costs across cities worldwide",
    path: "/cost-calculator",
  },
  {
    title: "Visa Finder",
    description: "Find the right visa for your journey",
    path: "/visa-finder",
  },
  {
    title: "Transportation",
    description: "Book flights, trains, and more",
    path: "/transportation",
  },
  {
    title: "Accommodations",
    description: "Find your perfect home abroad",
    path: "/accommodations",
  },
  {
    title: "Culture Guide",
    description: "Learn about local customs and languages",
    path: "/culture-guide",
  },
  {
    title: "Healthcare",
    description: "Access healthcare information and resources",
    path: "/healthcare",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fadeIn">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome to StartOverseas</h1>
          <p className="text-muted-foreground text-lg">
            Your journey to a new life abroad starts here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link to={feature.path} className="flex items-center justify-center gap-2">
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;