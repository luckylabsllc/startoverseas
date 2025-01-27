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
import {
  Home,
  Calculator,
  Landmark,
  Bus,
  Building2,
  Globe2,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Cost Calculator", icon: Calculator, path: "/cost-calculator" },
  { title: "Visa Finder", icon: Landmark, path: "/visa-finder" },
  { title: "Transportation", icon: Bus, path: "/transportation" },
  { title: "Accommodations", icon: Building2, path: "/accommodations" },
  { title: "Culture Guide", icon: Globe2, path: "/culture-guide" },
  { title: "Healthcare", icon: Heart, path: "/healthcare" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-6">
          <img 
            src="/lovable-uploads/1d393d13-a6ba-4f41-98aa-bf8fa669481b.png" 
            alt="StartOverseas Logo" 
            className="w-full h-auto max-w-[200px] mx-auto"
          />
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}