import { configureStore } from "@reduxjs/toolkit";
import { workerSlice } from "./slices/worker-slice.js";
import { globalSlice } from "./slices/global-slice.js";
export const store = configureStore({
  reducer: {
    workers: workerSlice.reducer,
    global: globalSlice.reducer,
  },
});
