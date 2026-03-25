import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";
import { productApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (gDM) => gDM().concat(productApi.middleware)
});