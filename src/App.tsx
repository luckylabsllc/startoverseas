
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import DossierPage from "./pages/DossierPage";
import CostCalculator from "./pages/CostCalculator";
import VisaFinder from "./pages/VisaFinder";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (mounted) {
          setIsAuthenticated(!!session);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        if (mounted) {
          setIsAuthenticated(false);
          setIsLoading(false);
        }
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setIsAuthenticated(!!session);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const AppHeader = () => {
  const location = useLocation();
  // Hide header on dashboard routes and signin page
  if (location.pathname === '/dashboard' || 
      location.pathname === '/cost-calculator' || 
      location.pathname === '/signin') {
    return null;
  }
  return <Header />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/dossier/:cityQuery" element={<DossierPage />} />
          <Route 
            path="/cost-calculator" 
            element={
              <ProtectedRoute>
                <CostCalculator />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/visa-finder" 
            element={
              <ProtectedRoute>
                <VisaFinder />
              </ProtectedRoute>
            } 
          />
          {/* Catch all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
