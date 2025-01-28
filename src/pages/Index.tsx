import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Globe, LineChart, Users, Handshake, Lock, Star,
  DollarSign, FileCheck, Plane, Building2, MessagesSquare, Activity, 
  Wallet, HeartHandshake 
} from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6c1a26ef-5ab5-4cba-b56d-1304d2d7e0c1.png" 
              alt="Overseas" 
              className="h-16"
            />
          </div>
          <Button size="lg" className="bg-black hover:bg-black/90 text-white" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>
      </header>

      <div className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 space-y-8">
          <h1 className="text-7xl font-bold tracking-tight">
            Your App for Everything Overseas
          </h1>
          <p className="text-2xl text-black max-w-3xl mx-auto">
            Plan your move, thrive abroad, and unlock banger opportunities to live your best life overseas with the most powerful AI travel tool ever created.
          </p>
          <div className="flex justify-center pt-4">
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 font-bold relative before:absolute before:inset-0 before:-z-10 before:blur-xl before:bg-primary/50 before:opacity-75 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300" 
              asChild
            >
              <Link to="/signup">START TRAVELING</Link>
            </Button>
          </div>
        </section>

        {/* Tools Preview Section */}
        <section className="relative py-20 w-screen -ml-[50vw] left-1/2">
          <div className="absolute inset-0 bg-[#f8f9fa] mix-blend-multiply bg-opacity-50" style={{ backgroundColor: 'rgba(234, 56, 76, 0.03)' }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold">8 Powerful AI Tools To Supercharge Your Travels</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <Card key={tool.title} className="relative hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <tool.icon className="w-5 h-5 text-primary" />
                      {tool.title}
                      <Lock className="w-4 h-4 text-muted-foreground ml-auto" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Choose StartOverseas.com?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-20 w-screen -ml-[50vw] left-1/2">
          <div className="absolute inset-0 bg-[#f8f9fa] mix-blend-multiply bg-opacity-50" style={{ backgroundColor: 'rgba(234, 56, 76, 0.03)' }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Start Your Journey with the Perfect Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <Card 
                  key={tier.name} 
                  className={`relative ${tier.highlighted ? 'border-primary shadow-lg' : ''}`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      <span className="text-2xl">{tier.name}</span>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{tier.period}</span>
                      </div>
                    </CardTitle>
                    <p className="text-center text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link to={tier.ctaPath}>{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="/guides" className="text-muted-foreground hover:text-foreground">Guides</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;