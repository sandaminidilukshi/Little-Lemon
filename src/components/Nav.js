import React from "react";
import logo from "../images/logo.jpg";
function Nav() {
  return (
    <>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#order">Order Online</a>
          <a href="#login">Login</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
