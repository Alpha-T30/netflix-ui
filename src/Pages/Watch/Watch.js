import Style from "./watch.module.scss";

import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie?.fullMovie ; 

  console.log(movie);
  return (
    <div className={Style.watch}>
      <Link to="/">
        <div className={Style.back}>
          <ArrowBackOutlined></ArrowBackOutlined>
          Home
        </div>
      </Link>

      <div className={Style.videoBackground}>
      <video autoPlay progress controls src={movie}  className={Style.video}></video>
        
          {/* <iframe
          className={Style.video}
          width="400"
            title="vid"
            src={movie?movie:""}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        
      </div>
      
    </div>
  );
}
