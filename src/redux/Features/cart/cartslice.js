import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalprice: 0
};

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = action.payload;
      state.carts.push({ ...item, quantity: 1 });
       state.totalprice = state.carts.reduce((total, item) => total + item.discount_price_inr * item.quantity, 0);
    },
    removeCart: (state, action) => {
      const id = action.payload;
       state.carts = state.carts.filter(cartItem => cartItem.id !== id);
       state.totalprice = state.carts.reduce((total, item) => total + item.discount_price_inr * item.quantity, 0);
    },
    increment: (state, action) => {
      const id = action.payload;
      const item = state.carts.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      } 

      state.totalprice = state.carts.reduce((total, item) => total + item.discount_price_inr * item.quantity, 0);
    },
    decrement: (state, action) => {
      const id = action.payload;
      const item = state.carts.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } 

      state.totalprice = state.carts.reduce((total, item) => total + item.discount_price_inr * item.quantity, 0);
    },
    calculateTotal: (state) => {
      state.totalprice = state.carts.reduce((total, item) => total + item.discount_price_inr * item.quantity, 0);
    }
  },
});

export const { addCart, removeCart, increment, decrement, calculateTotal } = cartslice.actions;
export const selectCartItems = (state) => state.cart.carts;
export const selectTotalPrice = (state) => state.cart.totalprice;

export default cartslice.reducer;
