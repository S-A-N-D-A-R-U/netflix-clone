import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "TV Series",
  initialState: {
    airing_today: null,
    on_the_air: null,
    popular: null,
    top_rated: null,
  },
  reducers: {
    addAiringToday: (state, action) => {
      state.airing_today = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.on_the_air = action.payload
    },
    adddPopular: (state, action) => {
      state.popular = action.payload
    },
    addTopRated: (state, action ) => {
      state.top_rated = action.payload
    },
  },
});

export const { addAiringToday , addOnTheAir, adddPopular, addTopRated } = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
