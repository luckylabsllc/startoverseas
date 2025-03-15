
import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  className?: string;
  children: ReactNode;
  footer?: ReactNode;
  isDraggable?: boolean;
}

export function DashboardCard({ 
  title, 
  className, 
  children, 
  footer,
  isDraggable = false
}: DashboardCardProps) {
  return (
    <Card 
      className={cn(
        "h-full overflow-hidden hover-lift transition-all duration-300", 
        isDraggable && "cursor-move",
        className
      )}
    >
      <CardHeader className="bg-secondary/30 dark:bg-secondary/10 pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          {isDraggable && (
            <div className="opacity-30 hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">{children}</CardContent>
      {footer && <CardFooter className="bg-secondary/20 dark:bg-secondary/5 py-2 px-4">{footer}</CardFooter>}
    </Card>
  );
}
