import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Data.json";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    boughtItems: [],
    cartItems: [],
    userMoney: 500,
  },
  reducers: {
  Add: (state, action) => {
      const existingProduct = state.cartItems.find(
        (p) => p.id === action.payload.id
      );
 
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: +1 });
      }
    },
     removeProduct: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    Increase: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
 
    // Formindsk quantity (og fjern hvis quantity bliver 0)
    Decrease: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product) {
        product.quantity -= 1;
      }
      // Fjern produkter med quantity 0 eller mindre
      state.cart = state.cart.filter((p) => p.quantity > 0);
    },
 
    // Checkout - flyt cart til boughtItems og clear cart
    checkout: (state, action) => {
      action.payload = totalPrice - state.userMoneyoney
      state.boughtItems = [...state.cart];
      state.cart = [];
    }
  },
});

export const { Add, removeProduct, Increase, Decrease, checkout } = cartSlice.actions;

export default cartSlice.reducer;