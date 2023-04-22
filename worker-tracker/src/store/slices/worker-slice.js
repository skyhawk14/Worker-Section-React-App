import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllWorkers } from "../../workers/utils/api";

const initialState = {
  workersData: [],
};

export const fetchAllWorkers = createAsyncThunk(
  "workers/fetchWorkers",
  async () => {
    const data = await getAllWorkers();
    return data.data;
  }
);

export const workerSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {
    set: (state, action) => {
      state.workersData = action.payload;
    },
  },
  extraReducers: {
    [fetchAllWorkers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.workersData = action.payload;
    },
  },
});
