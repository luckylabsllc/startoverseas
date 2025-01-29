import { Card, CardContent } from "@/components/ui/card";
import { Globe, LineChart, Handshake, Users } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Personalized Tools",
    description: "Tailored to your needs, whether you're moving for work, family, or adventure.",
  },
  {
    icon: LineChart,
    title: "Actionable Insights",
    description: "Real-time data to make confident decisions.",
  },
  {
    icon: Handshake,
    title: "Expert Guidance",
    description: "Step-by-step support from visa to settling in.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others living the dream overseas.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold dark:text-white">Why Choose StartOverseas.com?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{benefit.title}</h3>
              <p className="text-muted-foreground dark:text-gray-400">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};