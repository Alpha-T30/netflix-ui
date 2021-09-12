import { Info, PlayArrow } from "@material-ui/icons";
import React from "react";
import Style from "./featured.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Featured({ type ,setGenre }) {

  console.log("the user is ",localStorage.getItem('user'))

  const [content, setContent] = useState({});
  console.log(content)

  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await axios.get(`/movie/random${type ? "?type=" + type : ""}`, {
          headers: {
            token:
            "beare "+JSON.parse(localStorage.getItem("user")).accessToken

          },
        });
        setContent(res.data[0]) ; 
      } catch (error) {
        console.log(error);
      }
    };
    getFeatured();
  }, [type]);
  return (
    <div className={Style.featured}>
      {type && (
        <div className={Style.category}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select onChange={(e)=>setGenre(e.target.value)} name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content?.featuredImg} alt="" />
      <div className={Style.info}>
        <img src= {content?.featuredTitle} alt="" />
        <span className={Style.desc}>
           {content?.desc}
        </span>

        <div className={Style.buttons}>
          <button className={Style.play}>
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>
          <button className={Style.infoo}>
            <Info></Info>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
