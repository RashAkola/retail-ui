import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== action.payload
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );
    }
  }
});

export const {
  addToCart,
  decreaseQty,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;