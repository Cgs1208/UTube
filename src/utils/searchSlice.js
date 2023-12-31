import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    caccheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const searchSliceActions = searchSlice.actions;
export default searchSlice.reducer;
