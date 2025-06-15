import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheObject: {},
  },
  reducers: {
    cacheResult: (state, action) => {
      state.cacheObject = { ...state.cacheObject, ...action.payload };
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice;
