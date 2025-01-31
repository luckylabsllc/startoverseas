import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/370ae040-dcb3-4f1d-b8b0-2d980822c088.png" 
            alt="Overseas" 
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 rounded-full"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full border border-foreground/20 bg-black/5 dark:bg-white/5"
            asChild
          >
            <Link to="/signin">
              <User className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};