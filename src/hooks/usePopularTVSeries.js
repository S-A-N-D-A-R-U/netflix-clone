import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { adddPopular } from "../utils/tvSeriesSlice";


const usePopular = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(adddPopular(json.results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;