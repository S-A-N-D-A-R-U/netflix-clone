import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addAiringToday } from "../utils/tvSeriesSlice";

const useAringTodayTVSeries = () => {
  const dispatch = useDispatch();

  const getAringTodayTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addAiringToday(json.results));
  };

  useEffect(() => {
    getAringTodayTVSeries();
  }, []);
};

export default useAringTodayTVSeries;
