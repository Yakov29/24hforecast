import React from "react";
import { Component } from "react";
import Container from "../Container/Container";
import "./Header.css";

import logo from "../../images/logo.svg";

const Header = ({ regButtonHandler, avatar, isLoggedIn }) => {
  return (
    <header className="header">
      <Container>
        <img className="header__logo" src={logo} alt="" />
        <ul className="header__list">
          <li className="heder__item">
            <a href="" className="header__link">
              Who we are
            </a>
          </li>
          <li className="heder__item">
            <a href="" className="header__link">
              Contacts
            </a>
          </li>
          <li className="heder__item">
            <a href="" className="header__link">
              Menu
            </a>
          </li>
        </ul>
        {!isLoggedIn && (
          <button onClick={regButtonHandler} className="header__button">
            Sign Up
          </button>
        )}

        <img src={avatar} className="header__user" alt="" />
      </Container>
    </header>
  );
};

export default Header;
