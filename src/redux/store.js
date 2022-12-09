import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../Ex_Redux_Burger/burgerSlice";

export const store = configureStore({
  reducer: {
    burgerReducer: burgerReducer,
  },
});
