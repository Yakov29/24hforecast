import React from "react";
import "./Menu.css";

const Menu = ({ avatar, regButtonHandler, isLoggedIn, logOut }) => {
  return (
    <div className="backdrop menu">
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
            <button
              type="button"
              onClick={logOut}
              className="menu__button"
            >
              Log Out
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Menu;
