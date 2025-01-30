import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, FileCheck, Plane, Building2, MessagesSquare, Activity, Wallet, HeartHandshake, Lock } from "lucide-react";

const tools = [
  {
    title: "Cost Calculator",
    description: "Compare living costs across cities worldwide.",
    path: "/cost-calculator",
    icon: DollarSign,
    emoji: "💰"
  },
  {
    title: "Visa Finder",
    description: "Find the right visa for your journey.",
    path: "/visa-finder",
    icon: FileCheck,
    emoji: "✈️"
  },
  {
    title: "Transportation",
    description: "Book flights, trains, and more.",
    path: "/transportation",
    icon: Plane,
    emoji: "🚅"
  },
  {
    title: "Accommodations",
    description: "Find your perfect home abroad.",
    path: "/accommodations",
    icon: Building2,
    emoji: "🏠"
  },
  {
    title: "Cultural Integration Guide",
    description: "Learn about local customs and languages.",
    path: "/cultural-guide",
    icon: MessagesSquare,
    emoji: "🌍"
  },
  {
    title: "Healthcare",
    description: "Access healthcare information and resources.",
    path: "/healthcare",
    icon: Activity,
    emoji: "🏥"
  },
  {
    title: "Banking & Finances",
    description: "Manage payments, finances, and taxes abroad.",
    path: "/banking",
    icon: Wallet,
    emoji: "🏦"
  },
  {
    title: "Mental Wellness",
    description: "Resources to support your mental health before, during, and after your travels.",
    path: "/wellness",
    icon: HeartHandshake,
    emoji: "🧘‍♀️"
  }
];

export const ToolsSection = () => {
  return (
    <section className="relative py-20 w-screen -ml-[50vw] left-1/2">
      <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-gray-900 mix-blend-multiply bg-opacity-50" style={{ backgroundColor: 'rgba(234, 56, 76, 0.03)' }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center">
          <div className="sticker inline-block mb-4">
            <span className="text-lg">✨ AI-Powered Tools</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            8 Powerful AI Tools To Supercharge Your Travels
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Card key={tool.title} className="hover-lift relative overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="absolute top-0 right-0 p-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary">
                    <tool.icon className="w-5 h-5" />
                  </span>
                  <span className="flex-1">{tool.title}</span>
                  <span className="text-xl">{tool.emoji}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-gray-400">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};