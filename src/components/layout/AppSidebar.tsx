import {
  Calculator,
  FileCheck,
  Plane,
  Building2,
  MessagesSquare,
  Activity,
  Wallet,
  HeartHandshake,
  LogOut,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const tools = [
  {
    title: "Cost Calculator",
    path: "/dashboard/cost-calculator",
    icon: Calculator,
  },
  {
    title: "Visa Finder",
    path: "/dashboard/visa-finder",
    icon: FileCheck,
  },
  {
    title: "Transportation",
    path: "/dashboard/transportation",
    icon: Plane,
  },
  {
    title: "Accommodations",
    path: "/dashboard/accommodations",
    icon: Building2,
  },
  {
    title: "Cultural Integration",
    path: "/dashboard/cultural-guide",
    icon: MessagesSquare,
  },
  {
    title: "Healthcare",
    path: "/dashboard/healthcare",
    icon: Activity,
  },
  {
    title: "Banking & Finances",
    path: "/dashboard/banking",
    icon: Wallet,
  },
  {
    title: "Mental Wellness",
    path: "/dashboard/wellness",
    icon: HeartHandshake,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut} className="flex items-center gap-2 text-red-500">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}