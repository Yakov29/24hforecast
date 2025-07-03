import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Menu.css";

const Menu = ({ avatar, regButtonHandler, isLoggedIn, logOut, openProfile, onClose }) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="backdrop menu" data-aos="fade-down">
      <form className="menu__modal">
          {/* <button
          type="button"
          className="close__button"
          onClick={() => {
            console.log("click");
            const backdrops = document.querySelectorAll(".backdrop");
            backdrops.forEach((backdrop) => {
              backdrop.style.display = "none";
            });
          }}
          aria-label="Close"
        >
          &times;
        </button> */}
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#hero">
              Who we are
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#footer">
              Contacts
            </a>
          </li>
        </ul>
        <div className="menu__profile">
          <img className="menu__avatar" onClick={openProfile} src={avatar} alt="User avatar" />
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
