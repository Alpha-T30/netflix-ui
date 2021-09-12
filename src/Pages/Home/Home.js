import Navbar from "../../Components/Navbar/Navbar";
import Style from "./home.module.scss";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ type }) {
  const [lists, setlist] = useState([]);
  const [genre, setgenre] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      console.log(JSON.parse(localStorage.getItem("user")))
      try {
        const res = await axios.get(
          `/list${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "beare "+JSON.parse(localStorage.getItem("user")).accessToken
            },
          }
        );
        setlist(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, [type, genre]);
  return (
    <div className={Style.home}>
      <Navbar></Navbar>
      <Featured setGenre={setgenre} type={type}></Featured>
      {lists.map((l) => {
        return <List list={l}></List>;
      })}
    </div>
  );
}
