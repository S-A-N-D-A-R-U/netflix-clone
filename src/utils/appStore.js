import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import tvseriesReducer from "./tvSeriesSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            tvSeries: tvseriesReducer,
        }
    }
)

export default appStore;