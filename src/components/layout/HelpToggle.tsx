import { LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HelpToggle = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full bg-background shadow-lg hover:bg-accent hover:text-accent-foreground"
      >
        <LifeBuoy className="h-5 w-5" />
      </Button>
    </div>
  );
};