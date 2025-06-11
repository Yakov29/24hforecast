import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Menu.css";

const Menu = ({ avatar, regButtonHandler, isLoggedIn, logOut }) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="backdrop menu" data-aos="fade-down">
      <form className="menu__modal">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Who we are
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contacts
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Menu
            </a>
          </li>
        </ul>
        <div className="menu__profile">
          <img className="menu__avatar" src={avatar} alt="User avatar" />
          {!isLoggedIn ? (
            <button
              type="button"
              onClick={regButtonHandler}
              className="menu__button"
            >
              Sign Up
            </button>
          ) : (
            <button type="button" onClick={logOut} className="menu__button">
              Log Out
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Menu;
