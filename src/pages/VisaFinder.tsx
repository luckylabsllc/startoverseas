
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Timer, Calendar, CreditCard } from "lucide-react";
import { ComboboxDemo } from "@/components/VisaFinder/CountryCombobox";

const formSchema = z.object({
  nationality: z.string().min(1, "Please select your nationality"),
  destination: z.string().min(1, "Please select your destination country"),
});

export default function VisaFinder() {
  const [visaResults, setVisaResults] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationality: "",
      destination: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Simulated visa results - in a real app, this would come from an API
    const mockVisaResults = [
      {
        type: "Tourist Visa",
        processingTime: "5-10 business days",
        validity: "90 days",
        cost: "$60",
        requirements: [
          "Valid passport",
          "Proof of accommodation",
          "Return ticket",
          "Bank statements",
        ],
      },
      {
        type: "Business Visa",
        processingTime: "7-15 business days",
        validity: "180 days",
        cost: "$120",
        requirements: [
          "Valid passport",
          "Business invitation letter",
          "Company registration",
          "Bank statements",
        ],
      },
    ];

    setVisaResults(mockVisaResults);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Visa Finder</h1>
            <p className="text-muted-foreground mt-2">
              Find the right visa for your journey based on your nationality and destination.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Find Available Visas</CardTitle>
              <CardDescription>
                Enter your details to see available visa options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Nationality</FormLabel>
                        <FormControl>
                          <ComboboxDemo
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Select your nationality"
                          />
                        </FormControl>
                        <FormDescription>
                          Select the country of your passport
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destination Country</FormLabel>
                        <FormControl>
                          <ComboboxDemo
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Select destination country"
                          />
                        </FormControl>
                        <FormDescription>
                          Where do you plan to travel?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Find Visa Options
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {visaResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {visaResults.map((visa, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-primary" />
                      {visa.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center text-center">
                        <Timer className="h-5 w-5 text-muted-foreground mb-2" />
                        <span className="text-sm font-medium">{visa.processingTime}</span>
                        <span className="text-xs text-muted-foreground">Processing</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Calendar className="h-5 w-5 text-muted-foreground mb-2" />
                        <span className="text-sm font-medium">{visa.validity}</span>
                        <span className="text-xs text-muted-foreground">Validity</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <CreditCard className="h-5 w-5 text-muted-foreground mb-2" />
                        <span className="text-sm font-medium">{visa.cost}</span>
                        <span className="text-xs text-muted-foreground">Cost</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm space-y-1">
                        {visa.requirements.map((req: string, i: number) => (
                          <li key={i} className="text-muted-foreground">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}
