import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovietrailer";

function VideoBackground({ movieId }) {
  const trailerVedio = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className=" w-screen ">
      <iframe className=" w-screen aspect-video -mt-[45px]"
        src={
          "https://www.youtube.com/embed/" + trailerVedio?.key + 
          "?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=" + trailerVedio?.key + "&rel=0"
        }        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
