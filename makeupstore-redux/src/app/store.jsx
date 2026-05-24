import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartSlice';
// import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // cart: cartReducer,
  },
});

export default store;