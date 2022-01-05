import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    UPDATE_PRODUCTS: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { UPDATE_PRODUCTS } = productSlice.actions;

export default productSlice.reducer;
