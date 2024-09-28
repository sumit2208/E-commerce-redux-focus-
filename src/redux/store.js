import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartslice"; 

export const store = configureStore({
  reducer: {  
    cart: cartReducer, 
  },
});

export default store;
