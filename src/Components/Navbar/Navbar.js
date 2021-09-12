import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./navbar.module.scss";
import { AuthContext } from '../../AuthContext/AuthContext';
import { logOut } from "../../AuthContext/AuthActions";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const{sender:dispatch} =useContext(AuthContext)

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  


  const logout = (e) =>{
    e.preventDefault()
    dispatch(logOut())


  }
  return (
    <div
      className={scrolled ? `${Style.navbar} ${Style.navscroll}` : Style.navbar}
    >
      <div className={Style.container}>
        <div className={Style.left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link className="link" to="/series">
            <span className={Style.keep}>Series</span>
          </Link>
          <Link className="link" to="/movies">
            <span className={Style.keep} >Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className={Style.right}>
          <Search className={Style.icon} />
          <span>KID</span>
          <Notifications className={Style.icon} />
          <img
            src={JSON.parse(localStorage.getItem("user")).profilePic?JSON.parse(localStorage.getItem("user")).profilePic:"./images/noavatar.png"}
            alt=""
          />
          <div className={Style.profile}>
            <ArrowDropDown className={Style.icon} />
            <div className={Style.options}>
              <span>Settings</span>
              <span onClick={logout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
