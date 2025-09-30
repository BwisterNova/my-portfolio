import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import getSystemTheme from "../utlis/getSystemTheme";

// Create a context for theme
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  // Persist theme in localStorage, fallback to system theme
  const [theme, setTheme] = useLocalStorage(
    "theme",
    getSystemTheme() // 'dark' or 'light'
  );

  // Apply theme class to <body> on change
  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  // Toggle theme
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}
