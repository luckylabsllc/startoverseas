
import { DashboardCard } from "./DashboardCard";
import { Coins, Percent, ChartLineUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function FinancialOptimizerModule() {
  // Demo financial data
  const currentLocation = "San Francisco";
  const targetLocation = "Lisbon";
  const savingsPercent = 62;
  const currentTaxRate = "37%";
  const targetTaxRate = "20%";
  
  // Cost comparison (normalized to 100)
  const comparisons = [
    { category: "Housing", current: 100, target: 45 },
    { category: "Food", current: 80, target: 52 },
    { category: "Transportation", current: 75, target: 30 },
    { category: "Healthcare", current: 90, target: 15 },
  ];

  return (
    <DashboardCard title="Financial Optimizer" isDraggable>
      <div className="space-y-4">
        <div className="glass-card p-3">
          <div className="flex items-center mb-2">
            <Coins className="h-4 w-4 mr-2 text-primary" />
            <h3 className="font-semibold">Total Savings</h3>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>Moving from {currentLocation} to {targetLocation}</span>
              <span className="font-bold">{savingsPercent}%</span>
            </div>
            <Progress value={savingsPercent} className="h-2" />
          </div>
        </div>

        <div className="glass-card p-3">
          <div className="flex items-center mb-2">
            <Percent className="h-4 w-4 mr-2 text-primary" />
            <h3 className="font-semibold">Effective Tax Rates</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">{currentLocation}</p>
              <p className="text-2xl font-bold">{currentTaxRate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">{targetLocation}</p>
              <p className="text-2xl font-bold text-primary">{targetTaxRate}</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-3">
          <div className="flex items-center mb-2">
            <ChartLineUp className="h-4 w-4 mr-2 text-primary" />
            <h3 className="font-semibold">Cost Comparison</h3>
          </div>
          
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{item.category}</span>
                  <div>
                    <span className="text-muted-foreground mr-2">{currentLocation}</span>
                    <span className="text-primary">{targetLocation}</span>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-muted-foreground rounded-full"
                    style={{ width: `${item.current}%` }}
                  />
                  <div 
                    className="h-full bg-primary mt-[-8px] rounded-full"
                    style={{ width: `${item.target}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
