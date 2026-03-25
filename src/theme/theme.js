import {createTheme}  from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#1976d2",
      },

      secondary: {
        main: "#9c27b0",
      },

      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },

      text: {
        primary: mode === "light" ? "#1a1a1a" : "#ffffff",
        secondary: mode === "light" ? "#555" : "#aaaaaa",
      },
    },

    // 🔹 Spacing system (8px grid)
    spacing: 8,

    // 🔹 Border radius token
    shape: {
      borderRadius: 12,
    },

    // 🔹 Typography system
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

      h6: {
        fontWeight: 600,
        fontSize: "1.1rem",
      },

      subtitle1: {
        fontWeight: 500,
      },

      body2: {
        fontSize: "0.875rem",
      },
    },

    // 🔹 Component-level overrides (Design System consistency)
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },

      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          size: "small",
        },
      },

      MuiSelect: {
        defaultProps: {
          size: "small",
        },
      },
    },
  });