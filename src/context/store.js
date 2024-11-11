import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { cartSlice } from "./cartSlice";
import { compareSlice } from "./compareSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    cart: cartSlice.reducer,
    compare: compareSlice.reducer,
  },
});
