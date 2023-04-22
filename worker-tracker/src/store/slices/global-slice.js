import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: [],
  isSaved: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.isError = action.payload;
    },
  },
});
