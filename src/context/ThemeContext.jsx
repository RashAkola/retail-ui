import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}