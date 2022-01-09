import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import Home from "../containers/Home";
import Cross from "../assets/img/cross.png";
import { push } from "connected-react-router";

const Signin = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <section class="popup">
        <div class="popup-inner">
          <br />
          <span onClick={closeButton}>
            <a href="./index.html">
              <img src={Cross} alt="" />
            </a>
          </span>
          <h1>Lemonade</h1>
          <br />
          <h2>SIGN IN</h2>
          <br />
          <div class="popup-input">
            <input
              type="email"
              onChange={inputEmail}
              required
              placeholder="Email-address"
              value={email}
            />
            <br />
            <br />

            <input
              type="password"
              onChange={inputPassword}
              required
              placeholder="Password"
              vlaue={password}
            />
            <br />
            <br />

            <button class="btn2" onClick={signInButton}>
              Sign In
            </button>

            <br />
            <br />
            <p>
              Not a Member? <a href="/SignUp">Join us</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
