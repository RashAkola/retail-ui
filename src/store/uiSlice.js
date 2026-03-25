import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { search: "", category: "" },
  reducers: {
    setSearch: (s, a) => { s.search = a.payload },
    setCategory: (s, a) => { s.category = a.payload }
  }
});

export const { setSearch, setCategory } = uiSlice.actions;
export default uiSlice.reducer;