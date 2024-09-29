import React from "react";
import useAringTodayTVSeries from "../hooks/useAiringTodayTVSeries";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useOnTheAirTVSeries from "../hooks/useOnTheAirTVSeries";
import usePopular from "../hooks/usePopularTVSeries";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";


const TVShows = () => {
  useAringTodayTVSeries();
  useOnTheAirTVSeries();
  usePopular();
  useTopRatedTVSeries();

  const tvSeries = useSelector((store) => store.tvSeries);
  if(!tvSeries) return;
  
  return (
    <div className="bg-black">
        <div className=" pt-[100px] relative ">
          <MovieList title={"Airig Today"} movies={tvSeries.airing_today} />
          <MovieList title={"On The Air"} movies={tvSeries.on_the_air} />
          <MovieList title={"Popular"} movies={tvSeries.popular} />
          <MovieList title={"Top Rated"} movies={tvSeries.top_rated} />
        </div>
      </div>
  );
};

export default TVShows;
