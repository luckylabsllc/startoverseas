
import { DashboardCard } from "./DashboardCard";
import { Coins, Percent, ChartLine, ArrowRight, ArrowDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <DashboardCard 
      title="Financial Optimizer" 
      isDraggable
      className="overflow-auto"
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-muted-foreground">
            Data updated <span className="text-primary">today</span>
          </span>
          <Badge variant="outline" className="bg-primary/10 cursor-pointer hover:bg-primary/20">
            <ArrowRight className="h-3 w-3 mr-1" />
            Full Report
          </Badge>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Tabs Navigation */}
        <div className="flex space-x-1 bg-secondary/30 p-0.5 rounded-lg">
          {["overview", "taxes", "costs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-xs font-medium py-1.5 px-2 rounded-md transition-all ${
                activeTab === tab 
                  ? "bg-white shadow-sm text-primary" 
                  : "text-muted-foreground hover:bg-white/50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="glass-card p-4 transform transition-all hover:translate-y-[-2px] hover:shadow-md">
            <div className="flex items-center mb-4">
              <Coins className="h-5 w-5 mr-3 text-primary" />
              <h3 className="font-semibold text-lg">Total Savings</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold">{savingsPercent}%</span>
                  <span className="text-xs text-muted-foreground">cheaper</span>
                </div>
                <svg className="w-full" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="var(--secondary)" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="var(--primary)" 
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - savingsPercent/100)}`}
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
              
              <div className="flex justify-between items-center bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <span className="font-bold text-sm">{currentLocation.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{currentLocation}</p>
                    <p className="text-xs text-muted-foreground">Current Location</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground mx-2" />
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold text-sm text-primary">{targetLocation.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{targetLocation}</p>
                    <p className="text-xs text-muted-foreground">Target Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Taxes Tab */}
        {activeTab === "taxes" && (
          <div className="glass-card p-4 transform transition-all hover:translate-y-[-2px] hover:shadow-md">
            <div className="flex items-center mb-4">
              <Percent className="h-5 w-5 mr-3 text-primary" />
              <h3 className="font-semibold text-lg">Effective Tax Rates</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary/40 p-4 rounded-xl hover:bg-secondary/60 transition-colors">
                <p className="text-sm text-muted-foreground mb-2">{currentLocation}</p>
                <p className="text-4xl font-bold flex items-center">{currentTaxRate}</p>
                <div className="w-full h-1 bg-muted mt-4">
                  <div className="h-full bg-muted-foreground" style={{ width: currentTaxRate }}></div>
                </div>
              </div>
              <div className="bg-primary/5 p-4 rounded-xl hover:bg-primary/10 transition-colors">
                <p className="text-sm text-muted-foreground mb-2">{targetLocation}</p>
                <p className="text-4xl font-bold text-primary flex items-center">
                  {targetTaxRate}
                  <span className="text-xs ml-2 flex items-center text-green-500">
                    <ArrowDown className="h-3 w-3 mr-1" /> -17%
                  </span>
                </p>
                <div className="w-full h-1 bg-muted mt-4">
                  <div className="h-full bg-primary" style={{ width: targetTaxRate }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm">
                <span className="font-medium">Tax Benefits:</span> {targetLocation} offers Digital Nomad visa holders significant tax advantages compared to {currentLocation}.
              </p>
            </div>
          </div>
        )}

        {/* Costs Tab */}
        {activeTab === "costs" && (
          <div className="glass-card p-4 transform transition-all hover:translate-y-[-2px] hover:shadow-md">
            <div className="flex items-center mb-4">
              <ChartLine className="h-5 w-5 mr-3 text-primary" />
              <h3 className="font-semibold text-lg">Cost Comparison</h3>
            </div>
            
            <div className="space-y-5">
              {comparisons.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-secondary/30 p-3 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.category}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <span className="text-xs text-muted-foreground mr-2">{currentLocation}</span>
                        <Badge variant="outline">100%</Badge>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-primary mr-2">{targetLocation}</span>
                        <Badge variant="outline" className="bg-primary/10">{item.target}%</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-muted-foreground rounded-full"
                      style={{ width: `${item.current}%`, zIndex: 1 }}
                    />
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      style={{ width: `${item.target}%`, zIndex: 2 }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium">{100 - item.target}% savings</span> compared to {currentLocation}
                  </div>
                </motion.div>
              ))}
              
              <div className="flex justify-center mt-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  View All Categories
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
