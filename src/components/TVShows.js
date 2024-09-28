import React from "react";
import useAringTodayTVSeries from "../hooks/useAiringTodayTVSeries";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import VideoBackground from "./VideoBackground";


const TVShows = () => {
  useAringTodayTVSeries();
  const tvSeries = useSelector((store) => store.tvSeries?.airing_today);
  if(!tvSeries) return;


  const maintvSeries = tvSeries[5];

  const { name, overview } = maintvSeries;

  return (
    <div>
      <>
      tv shows
      </>
    </div>
  );
};

export default TVShows;
