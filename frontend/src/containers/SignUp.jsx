import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import Cross from "../assets/img/cross.png";
import Home from "../containers/Home";
import { push } from "connected-react-router";
// import Melodium from "../assets/img/Melodium.svg";

const SignUp = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />

      <section class="popup">
      
      <div class="popup-inner">
        <br/>
        <span onClick={closeButton}>
            <a href="./index.html">
              <img src={Cross} alt="" />
            </a>
          </span>
        <h1>Lemonade</h1>
        <br/>
        <h2>SIGN UP</h2>
        <br/>
        <div class="popup-input">
          <input type="text" onChange={inputUserName} required placeholder="User-name" value={user_name} />
          <br /><br />
          <input type="email"  onChange={inputEmail} required placeholder="Email-address" value={email}  />
          <br /><br />
          <input type="password" onChange={inputPassword} required placeholder="Password" value={password} />
          <br />
          <br />
          <button class="btn2" onClick={signUpButton} >Sign Up</button>
          <br /><br />
          <p>Already a Member? <a href="./signin.html">Sign in</a></p>
        </div>
      </div>
    </section>
    </>
  );
};

export default SignUp;
