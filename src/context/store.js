import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { compareSlice } from "./compareSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    compare: compareSlice.reducer,
  },
});
