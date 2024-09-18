import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartslice"; // import the reducer properly

export const store = configureStore({
  reducer: { // Provide the reducer object
    cart: cartReducer, // Assign the cart slice reducer to the 'cart' key
  },
});

export default store;
