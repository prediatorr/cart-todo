import { configureStore } from "@reduxjs/toolkit"; //core lib
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
