import React, { useEffect, useState } from "react";
import CartLogo from "../../assets/img/cart.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <section class="mainheader">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">
            Lemonade
          </a>
          <form class="d-flex">
            <div class="cart">
              {checkUser ? (
                <span class="logout" onClick={signOutButton}>
                  Logout
                </span>
              ) : (
                <a href="/Signin" class="sign">
                  Sign in
                </a>
              )}
              {checkUser && (
                <a href="/cart" >
                  <img src={CartLogo} class= "cartlogo" alt="" />
                </a>
              )}
            </div>
          </form>
        </div>
      </nav>
    </section>
  );
}
