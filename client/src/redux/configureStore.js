import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    // counter: counterReducer,

    products: productsReducer,
    cart: cartReducer,
    // cart:
    // cartOpen:
    // categories:
    // currentCategory:
  },
});
