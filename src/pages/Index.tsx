import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, LineChart, Users, Handshake, Lock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
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

const testimonials = [
  {
    quote: "StartOverseas made my transition to a new country seamless and stress-free.",
    author: "Sarah K.",
    location: "Moved to Spain",
  },
  {
    quote: "The cost calculator alone saved me months of research.",
    author: "Michael R.",
    location: "Moved to Japan",
  },
  {
    quote: "Finally, all the tools I need in one place!",
    author: "David L.",
    location: "Moved to Australia",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Basic tools to start your journey",
    features: ["Basic cost calculator", "Limited visa info", "Community access"],
  },
  {
    name: "Pro",
    price: "$19/month",
    description: "Everything you need for a successful move",
    features: ["Full dashboard access", "All premium tools", "Priority support", "Detailed guides"],
  },
  {
    name: "Premium",
    price: "$39/month",
    description: "Perfect for families and businesses",
    features: ["Multiple locations", "Team collaboration", "Custom reports", "Dedicated advisor"],
  },
];

const faqs = [
  {
    question: "What's included in the subscription?",
    answer: "Our Pro subscription includes full access to all tools, including the cost calculator, visa finder, and more. You'll also get priority support and detailed guides.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! You can cancel your subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied.",
  },
  {
    question: "How is StartOverseas different?",
    answer: "We combine real-time data, personalized tools, and expert guidance in one platform, making your overseas transition smoother than ever.",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-20 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Your Ultimate Guide to Living Overseas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your move, navigate the journey, and thrive abroad with StartOverseas
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Get Started <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Choose StartOverseas?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Preview Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything You Need in One Place</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Card key={tool.title} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {tool.title}
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Unlock these tools and more with a Pro account
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Trusted by Hundreds of Global Movers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="text-center">
                <CardContent className="pt-6">
                  <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="relative">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <p className="text-3xl font-bold">{tier.price}</p>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/signup">Subscribe Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
    </DashboardLayout>
  );
};

export default Index;