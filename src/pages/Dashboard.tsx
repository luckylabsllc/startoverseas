
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { VisaApplicationsModule } from "@/components/dashboard/VisaApplicationsModule";
import { HousingExplorerModule } from "@/components/dashboard/HousingExplorerModule";
import { FinancialOptimizerModule } from "@/components/dashboard/FinancialOptimizerModule";
import { ExpatNetworkModule } from "@/components/dashboard/ExpatNetworkModule";
import { RemoteJobMatchesModule } from "@/components/dashboard/RemoteJobMatchesModule";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to your relocation command center
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ResizablePanelGroup direction="vertical" className="min-h-[800px]">
                <ResizablePanel defaultSize={50}>
                  <div className="p-1 h-full">
                    <VisaApplicationsModule />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="p-1 h-full">
                    <HousingExplorerModule />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
            
            <div className="lg:row-span-2">
              <ResizablePanelGroup direction="vertical" className="min-h-[800px]">
                <ResizablePanel defaultSize={60}>
                  <div className="p-1 h-full">
                    <FinancialOptimizerModule />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="p-1 h-full">
                    <ExpatNetworkModule />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
            
            <div className="lg:col-span-2">
              <RemoteJobMatchesModule />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
