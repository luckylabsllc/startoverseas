import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Load JetBrains Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Trigger animation after a short delay
    setTimeout(() => setIsLoaded(true), 100);
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
          <span 
            className={`font-mono font-extrabold text-2xl tracking-tight text-foreground/90 transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              textShadow: '0 0 1px rgba(234, 56, 76, 0.3)',
            }}
          >
            OVERSEAS
          </span>
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