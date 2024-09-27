import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addAringTodayTVSeries } from "../utils/tvSeriesSlice";

const useAringTodayTVSeries = () => {
  const dispatcher = useDispatch();

  const getAringTodayTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatcher(addAringTodayTVSeries(json.results));
  };

  useEffect(() => {
    getAringTodayTVSeries();
  }, []);
};

export default useAringTodayTVSeries;
