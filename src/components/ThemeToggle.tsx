import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Moon className="h-4 w-4 text-muted-foreground" />
        <Switch disabled />
        <Sun className="h-4 w-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Moon className="h-4 w-4 text-tech-blue transition-all" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
      />
      <Sun className="h-4 w-4 text-cyber-cyan transition-all" />
    </div>
  );
};

export default ThemeToggle;