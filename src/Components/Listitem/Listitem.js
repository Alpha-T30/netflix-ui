import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import Style from "./listitem.module.scss";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Listitem({ item, index }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchmovie = async () => {
      try {
        const res = await axios.get(`/movie/find/${item}`, {
          headers: {
            token:
            "beare "+JSON.parse(localStorage.getItem("user")).accessToken

          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovie();
  }, [item]);

  const [ishovered, setIshovered] = useState(false);
  return (
     < Link   to={{pathname:"/watch", movie:movie}}> 
    <div
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
      style={{
        left: ishovered && index * 225 - 50 + index * 5,
      }}
      className={Style.listitem}
      >
      <img src={movie.thumbImg} alt="" />
      {ishovered && (
        <>
          <video  autoPlay={true} loop   src={movie.trailer} type="video/mp4"></video>
          {/* <iframe
             className={Style.video}
             src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <div className={Style.iteminfo}>
            <div className={Style.icons}>
              <PlayArrow className={Style.icon} />
              <Add className={Style.icon}></Add>
              <ThumbUpOutlined className={Style.icon}></ThumbUpOutlined>
              <ThumbDownOutlined className={Style.icon}></ThumbDownOutlined>
            </div>
            <div className={Style.itemInfoTop}>
              <span>{movie.duration}</span>
              <span className={Style.limit}>{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className={Style.desc}>{movie.desc}</div>
            <div className={Style.genre}>{movie.genre}</div>
          </div>
        </>
      )}
    </div>
            </Link>
  );
}
