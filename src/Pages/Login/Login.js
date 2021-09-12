import Style from "./Login.module.scss";
import { Link } from "react-router-dom";
import { login } from "../../AuthContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const formRef = useRef();

  const { sender:dispatch ,isFeching} = useContext(AuthContext);

  // const history = useHistory()

  const handleSignIn = async (e) => {
    e.preventDefault();

    const user = {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    };
    
    console.log(user)
    login(dispatch, user);
  };
  return (
    <div className={Style.login}>
      <div className={Style.top}>
        <div className={Style.wrapper}>
          <img
            className={Style.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className={Style.container}>
        <form onSubmit={handleSignIn} ref={formRef}>
          <h1>Sign In</h1>
          <input id='mail' type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button disabled={isFeching} type="submit" className={Style.loginButton}>
            Sign In
          </button>
          <span>
            New to Netflix?
            <Link className={Style.link} to="/register">
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
