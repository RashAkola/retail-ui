import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";

import { useDispatch } from "react-redux";
import { setSearch, setCategory } from "../store/uiSlice";
import { useState } from "react";

export default function SearchFilterBar() {
  const dispatch = useDispatch();
  const [search, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    dispatch(setSearch(value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        mt: 2, // 👈 spacing from header
        flexWrap: "wrap",
        alignItems: "center"
      }}
    >
      {/* Search Input */}
      <TextField
        label="Search products"
        variant="outlined"
        size="small"
        value={search}
        onChange={handleSearch}
        sx={{ minWidth: 250 }}
      />

      {/* Category Filter */}
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel>Category</InputLabel>
        <Select
          defaultValue=""
          label="Category"
          onChange={(e) => dispatch(setCategory(e.target.value))}
          sx={{
            borderRadius: 2,
            backgroundColor: "background.paper"
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Shoes">Shoes</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Accessories">Accessories</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}