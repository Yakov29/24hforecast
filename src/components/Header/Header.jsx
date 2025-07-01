import React, { useEffect } from "react";
import Container from "../Container/Container";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoIosArrowDown } from "react-icons/io";
import logo from "../../images/logo.svg";

const Header = ({ regButtonHandler, avatar, isLoggedIn, openMenu, logOut }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <Container>
        <img className="header__logo" src={logo} alt="" data-aos="fade-right" />

        <ul className="header__list" data-aos="fade-up">
          <li className="heder__item">
            <a href="#hero" className="header__link" data-aos="fade-up" data-aos-delay="100">
              Who we are
            </a>
          </li>
          <li className="heder__item">
            <a href="#footer" className="header__link" data-aos="fade-up" data-aos-delay="200">
              Contacts
            </a>
          </li>
          <li className="heder__item">
            <a href="#cards" className="header__link" data-aos="fade-up" data-aos-delay="300">
              Cities
            </a>
          </li>
        </ul>

        {!isLoggedIn ? (
          <button
            onClick={regButtonHandler}
            className="header__button"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={logOut}
            className="header__button"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Log Out
          </button>
        )}

        <button
          onClick={openMenu}
          className="header__menu"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          Menu <IoIosArrowDown />
        </button>

        {isLoggedIn && (
          <img
            src={avatar}
            className="header__user"
            alt="User avatar"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
