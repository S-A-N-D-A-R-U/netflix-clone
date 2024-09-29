import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addOnTheAir } from "../utils/tvSeriesSlice";


const useOnTheAirTVSeries = () => {
  const dispatch = useDispatch();

  const getOnTheAirTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addOnTheAir(json.results));
  };

  useEffect(() => {
    getOnTheAirTVSeries();
  }, []);
};

export default useOnTheAirTVSeries;