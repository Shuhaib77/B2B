import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/productSlice";
// import authSlice from "../redux/authSlice";

 const store = configureStore({
  reducer: {
    productData: productSlice,
    // authData:authSlice
  },
});

export default store;
