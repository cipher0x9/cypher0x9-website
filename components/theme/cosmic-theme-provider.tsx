"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CosmicTheme = "cosmic" | "aurora";

interface CosmicThemeContextValue {
  theme: CosmicTheme;
  toggleTheme: () => void;
}

const CosmicThemeContext = createContext<CosmicThemeContextValue | undefined>(
  undefined
);

function getInitialTheme(): CosmicTheme {
  if (typeof window === "undefined") {
    return "cosmic";
  }
  return (window.localStorage.getItem("cosmic-theme") as CosmicTheme) ?? "cosmic";
}

export function CosmicThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<CosmicTheme>("cosmic");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.cosmicTheme = theme;
    window.localStorage.setItem("cosmic-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "cosmic" ? "aurora" : "cosmic"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <CosmicThemeContext.Provider value={value}>
      {children}
    </CosmicThemeContext.Provider>
  );
}

export function useCosmicTheme() {
  const ctx = useContext(CosmicThemeContext);
  if (!ctx) {
    throw new Error("useCosmicTheme must be used within CosmicThemeProvider");
  }
  return ctx;
}
