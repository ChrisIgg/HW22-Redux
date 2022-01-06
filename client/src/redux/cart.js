import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartOpen: false,
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.concat([...action.payload]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;

// case ADD_TO_CART:
//     return {
//       ...state,
//       cartOpen: true,
//       cart: [...state.cart, action.product],
//     };
