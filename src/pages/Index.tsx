import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Globe, LineChart, Users, Handshake, Lock, Star,
  DollarSign, FileCheck, Plane, Building2, MessagesSquare, Activity, 
  Wallet, HeartHandshake, Sun, Moon, User
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const tools = [
  {
    title: "Cost Calculator",
    description: "Compare living costs across cities worldwide.",
    path: "/cost-calculator",
    icon: DollarSign
  },
  {
    title: "Visa Finder",
    description: "Find the right visa for your journey.",
    path: "/visa-finder",
    icon: FileCheck
  },
  {
    title: "Transportation",
    description: "Book flights, trains, and more.",
    path: "/transportation",
    icon: Plane
  },
  {
    title: "Accommodations",
    description: "Find your perfect home abroad.",
    path: "/accommodations",
    icon: Building2
  },
  {
    title: "Cultural Integration Guide",
    description: "Learn about local customs and languages.",
    path: "/cultural-guide",
    icon: MessagesSquare
  },
  {
    title: "Healthcare",
    description: "Access healthcare information and resources.",
    path: "/healthcare",
    icon: Activity
  },
  {
    title: "Banking & Finances",
    description: "Manage payments, finances, and taxes abroad.",
    path: "/banking",
    icon: Wallet
  },
  {
    title: "Mental Wellness",
    description: "Resources to support your mental health before, during, and after your travels.",
    path: "/wellness",
    icon: HeartHandshake
  }
];

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

const pricingTiers = [
  {
    name: "Pro",
    price: "$49",
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
    price: "$599",
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

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/376e8f7b-c13e-491a-8659-c7089ad8957d.png" 
              alt="Overseas" 
              className="h-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 rounded-full"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 rounded-full border border-foreground/20 bg-black/5 dark:bg-white/5"
              asChild
            >
              <Link to="/signin">
                <User className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight dark:text-white">
            Your App for Everything Overseas
          </h1>
          <p className="text-sm font-bold text-black dark:text-gray-300 max-w-3xl mx-auto">
            Unlock banger opportunities to live your best life overseas with the most powerful AI travel tool ever created.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="w-full max-w-[285px]">
              <Input
                type="text"
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              />
            </div>
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 font-bold relative w-[85%] max-w-[270px] before:absolute before:inset-0 before:-z-10 before:blur-[40px] before:bg-[#FF3B30]/30 before:opacity-100 after:absolute after:inset-0 after:-z-10 after:blur-[15px] after:bg-[#FF3B30]/40 after:opacity-100 bg-[#FF3B30] hover:bg-[#E02E24] hover:shadow-md hover:shadow-[#FF3B30]/10 transition-all duration-300" 
              asChild
            >
              <Link to="/signup">START TRAVELING</Link>
            </Button>
          </div>
        </section>

        {/* Tools Preview Section */}
        <section className="relative py-20 w-screen -ml-[50vw] left-1/2">
          <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-gray-900 mix-blend-multiply bg-opacity-50" style={{ backgroundColor: 'rgba(234, 56, 76, 0.03)' }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold dark:text-white">8 Powerful AI Tools To Supercharge Your Travels</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <Card key={tool.title} className="relative hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 dark:text-white">
                      <tool.icon className="w-5 h-5 text-primary" />
                      {tool.title}
                      <Lock className="w-4 h-4 text-muted-foreground ml-auto" />
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

        {/* Benefits Section */}
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

        {/* Pricing Section */}
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

        {/* Footer */}
        <footer className="border-t dark:border-gray-800 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Contact</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Blog</Link></li>
                <li><Link to="/guides" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Guides</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Terms</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;