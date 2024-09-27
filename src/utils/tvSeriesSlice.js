import { createSlice } from "@reduxjs/toolkit";


const tvSeriesSlice = createSlice({
    name: "TV Series",
    initialState: {
        aringTodayTVSeries: null,
    },
    reducers: {
        addAringTodayTVSeries: (state, action) => {
            state.aringTodayTVSeries = action.payload;
        },

    }
    
})

export const {addAringTodayTVSeries} = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;