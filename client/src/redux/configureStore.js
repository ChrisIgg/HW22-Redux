import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product";

export default configureStore({
  reducer: {
    // counter: counterReducer,

    products: productsReducer,
    // cart:
    // cartOpen:
    // categories:
    // currentCategory:
  },
});
