import { createSlice } from "@reduxjs/toolkit";

export const heartSlice = createSlice({
  name: "heart",
  initialState: JSON.parse(localStorage.getItem("heart")) || [],
  reducers: {
    addToHeart: (state, action) => {
      let result = [...state, action.payload];
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },

    removeFromHeart: (state, action) => {
      let result = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },
  },
});

export const { addToHeart, removeFromHeart } = heartSlice.actions;
