import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Full access to all tools for independent explorers",
    features: [
      "Cost Calculator",
      "Visa Finder",
      "Transportation Hub",
      "Accommodations Finder",
      "Cultural Integration Guide",
      "Banking & Healthcare Tools",
    ],
    cta: "Get Pro",
    ctaPath: "/signup-pro",
  },
  {
    name: "Concierge",
    price: "$299",
    period: "/month",
    description: "Everything in Pro, plus hands-on expert support",
    features: [
      "All Pro features",
      "24-hour priority support",
      "Exclusive access to experts",
      "Personalized guidance",
    ],
    cta: "Upgrade to Concierge",
    ctaPath: "/signup-concierge",
    highlighted: true,
  },
];

export const PricingSection = () => {
  return (
    <section className="relative py-20 w-screen -ml-[50vw] left-1/2">
      <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-gray-900 mix-blend-multiply bg-opacity-50" style={{ backgroundColor: 'rgba(234, 56, 76, 0.03)' }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold dark:text-white">Start Your Journey with the Perfect Plan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative dark:bg-gray-800 dark:border-gray-700 ${tier.highlighted ? 'border-primary shadow-lg' : ''}`}
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center dark:text-white">
                  <span className="text-2xl">{tier.name}</span>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground dark:text-gray-400">{tier.period}</span>
                  </div>
                </CardTitle>
                <p className="text-center text-muted-foreground dark:text-gray-400">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 dark:text-gray-300">
                      <Star className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full dark:bg-white dark:text-black dark:hover:bg-white/90" asChild>
                  <Link to={tier.ctaPath}>{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};