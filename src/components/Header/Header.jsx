import React from "react";
import Container from "../Container/Container";
import "./Header.css";

import { FaArrowRight } from "react-icons/fa";
import logo from "../../images/logo.svg";

const Header = ({ regButtonHandler, avatar, isLoggedIn, openMenu, logOut }) => {
  return (
    <header className="header">
      <Container>
        <img className="header__logo" src={logo} alt="" />
        <ul className="header__list">
          <li className="heder__item">
            <a href="#" className="header__link">
              Who we are
            </a>
          </li>
          <li className="heder__item">
            <a href="#" className="header__link">
              Contacts
            </a>
          </li>
          <li className="heder__item">
            <a href="#" className="header__link">
              Menu
            </a>
          </li>
        </ul>

        {!isLoggedIn ? (
          <button onClick={regButtonHandler} className="header__button">
            Sign Up
          </button>
        ) : (
          <button onClick={logOut} className="header__button">
            Log Out
          </button>
        )}

        <button onClick={openMenu} className="header__menu">
          Menu <FaArrowRight />
        </button>

        {isLoggedIn && <img src={avatar} className="header__user" alt="User avatar" />}
      </Container>
    </header>
  );
};

export default Header;
