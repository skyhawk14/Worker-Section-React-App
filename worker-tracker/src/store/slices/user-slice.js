import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setEmail: (state, action) => {
      // debugger;
      state.email = action.payload.email;
    },
  },
});
