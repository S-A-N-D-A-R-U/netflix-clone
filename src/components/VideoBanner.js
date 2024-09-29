import React from "react";
import { IMG_CDN } from "../utils/constant";

const VideoBanner = ({ backdrop_path }) => {
  return (
    <div className="w-screen">
      <img
        className="w-screen  -mt-[45px]"
        alt="banner"
        src={IMG_CDN + backdrop_path}
      />
    </div>
  );
};

export default VideoBanner;
