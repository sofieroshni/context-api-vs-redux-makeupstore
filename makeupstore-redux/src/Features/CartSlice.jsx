import { createSlice } from "@reduxjs/toolkit";
// import { products } from "../Data.json";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    boughtItems: [],
    cartItems: []
  },
  reducers: {
    Add: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { Add } = cartSlice.actions;

export default cartSlice.reducer;