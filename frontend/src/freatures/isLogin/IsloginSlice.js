import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("jwt");
const initialState = { value: token ? true : false };

export const isLoginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    setIsLogin: (state) => {
      state.value = true;
    },
  },
});

export const { setIsLogin } = isLoginSlice.actions;

export default isLoginSlice.reducer;
