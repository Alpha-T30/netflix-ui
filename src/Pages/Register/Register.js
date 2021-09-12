import Style from "./register.module.scss";

import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  axios  from "axios";
import { ArrowBackOutlined } from "@material-ui/icons";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    console.log( {
      username: usernameRef.current.value,
      email: email,
      password: passwordRef.current.value,
    } )
    e.preventDefault()
    setpassword(passwordRef.current.value);
    try {
      await axios.post("auth/register", {
        username: usernameRef.current.value,
        email: email,
        password: passwordRef.current.value,
      });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Style.register}>
      <div className={Style.top}>
        <div className={Style.wrapper}>
          <img
            className={Style.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className={Style.link} to="/login">
            <button className={Style.loginButton}>Sign In</button>
          </Link>
        </div>
      </div>
      <div className={Style.container}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className={Style.input}>
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className={Style.registerButton} onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className={Style.input}>
            <div onClick={()=>setEmail("")} className={Style.back}>
              <ArrowBackOutlined></ArrowBackOutlined>
             <span>Back</span>
            </div>
            <input placeholder="username" ref={usernameRef} type="text" />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className={Style.registerButton} onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
