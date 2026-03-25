import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@mui/material";

import {ShoppingCart} from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useThemeContext } from "../context/ThemeContext";

export default function Header({ openCart }) {
  const { toggleTheme } = useThemeContext();

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* LEFT SIDE TITLE */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Retail App - Products
        </Typography>

        {/* RIGHT SIDE ACTIONS */}
        <IconButton color="inherit" onClick={toggleTheme}>
          <DarkModeIcon />
        </IconButton>

        <IconButton color="inherit" onClick={openCart}>
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}