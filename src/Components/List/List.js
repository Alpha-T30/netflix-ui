import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import Listitem from "../Listitem/Listitem";

import Style from "./list.module.scss";
import { axios } from 'axios';

export default function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth/225);

  
  const listRef = useRef();

  
  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10-clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className={Style.list}>
      <span className={Style.listTitle}>{list.title}</span>
      <div className={Style.wrapper}>
        <ArrowBackIosOutlined
          className={`${Style.sliderArrow} ${Style.left}`}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className={Style.container} ref={listRef}>
          {list.movieList.map((item, index) => {
            return <Listitem item={item} index={index} />;
          })}
        </div>
        <ArrowForwardIosOutlined
          className={`${Style.sliderArrow} ${Style.right}`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
