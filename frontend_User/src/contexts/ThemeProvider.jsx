import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setThemeMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
