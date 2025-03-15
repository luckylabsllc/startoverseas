
import { DashboardCard } from "./DashboardCard";
import { ProgressItem } from "./ProgressItem";
import { Button } from "@/components/ui/button";
import { FileCheck, Calendar, ArrowRight } from "lucide-react";

export function VisaApplicationsModule() {
  // Demo data - would be replaced with real data
  const visaApplications = [
    { 
      country: "Portugal", 
      type: "D7 Visa", 
      progress: 65, 
      deadline: "Oct 15, 2023",
      nextStep: "Submit financial documents"
    },
    { 
      country: "Spain", 
      type: "Non-Lucrative Visa", 
      progress: 30, 
      deadline: "Dec 1, 2023",
      nextStep: "Book consulate appointment"
    }
  ];

  return (
    <DashboardCard 
      title="Visa Applications" 
      isDraggable
      footer={
        <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary hover:text-primary-foreground">
          <FileCheck className="mr-2 h-4 w-4" />
          <span>View All Applications</span>
        </Button>
      }
    >
      <div className="space-y-4">
        {visaApplications.map((visa, index) => (
          <div key={index} className="glass-card p-3 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{visa.country}</h3>
                <p className="text-sm text-muted-foreground">{visa.type}</p>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-3 w-3 mr-1 text-primary" />
                <span>{visa.deadline}</span>
              </div>
            </div>
            
            <ProgressItem 
              label="Application Progress" 
              progress={visa.progress} 
              target={`${visa.progress}%`}
            />
            
            <div className="flex items-center text-sm border-t border-border pt-2">
              <ArrowRight className="h-3 w-3 mr-2 text-primary" />
              <span>Next: {visa.nextStep}</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
