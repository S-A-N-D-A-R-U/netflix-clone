import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "TV Series",
  initialState: {
    airing_today: null,
  },
  reducers: {
    addAiringToday: (state, action) => {
      state.airing_today = action.payload;
    },
  },
});

export const { addAiringToday } = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
