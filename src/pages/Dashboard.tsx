import { Header } from "@/components/layout/Header";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DashboardLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your dashboard. Here you can manage your profile and access all your tools.
          </p>
        </div>
      </DashboardLayout>
    </div>
  );
}