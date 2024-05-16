import { useState } from "react";
import { useEffect } from "react";

export const useTheme = () => {
  const themeLocal = localStorage.getItem("theme") || "dark-mode";
  const [theme, setTheme] = useState(themeLocal);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "white-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("white-mode");
    }
  };

  return { theme, toggleTheme };
};
