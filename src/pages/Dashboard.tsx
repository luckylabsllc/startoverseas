import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-muted-foreground">
          Select a tool from the sidebar to get started.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;