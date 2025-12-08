"use client";

import { Moon, Sun } from "lucide-react";
import { useCosmicTheme } from "./cosmic-theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useCosmicTheme();
  const isAurora = theme === "aurora";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 transition-all hover:border-[#00D9FF]/40 hover:text-white"
      aria-label="Toggle cosmic theme"
    >
      {isAurora ? (
        <Sun className="h-4 w-4 text-[#FFD700]" />
      ) : (
        <Moon className="h-4 w-4 text-[#00D9FF]" />
      )}
      <span className="hidden sm:inline">
        {isAurora ? "Aurora Mode" : "Dark Matter"}
      </span>
    </button>
  );
}
