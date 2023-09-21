import { configureStore } from "@reduxjs/toolkit";
import isloginReducer from "../freatures/isLogin/IsloginSlice";

export const store = configureStore({
  reducer: {
    isLogin: isloginReducer,
  },
});
