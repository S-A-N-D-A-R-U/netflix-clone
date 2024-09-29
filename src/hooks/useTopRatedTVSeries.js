import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRated } from "../utils/tvSeriesSlice";

const useTopRatedTVSeries = () => {
  const dispatch = useDispatch();

  const getTopRatedTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRatedTVSeries();
  }, []);
};

export default useTopRatedTVSeries;
