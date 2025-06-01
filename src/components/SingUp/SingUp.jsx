import React from "react";
import "./SingUp.css";

const SingUp = () => {
  return (
    <div className="backdrop sungup">
      <form className="singup__modal">
        <h2 className="singup__title">Sign Up</h2>
        <ul className="singup__list">
          <li className="singup__item">
            <p className="singup__description" htmlFor="name">
              Username
            </p>
            <input
              className="singup__input"
              type="text"
              id="name"
              placeholder="Username"
            />
          </li>
          <li className="singup__item">
            <p className="singup__description" htmlFor="email">
              Email
            </p>
            <input
              className="singup__input"
              type="email"
              id="email"
              placeholder="Email"
            />
          </li>
          <li className="singup__item">
            <p className="singup__description" htmlFor="password">
              Password
            </p>
            <input
              className="singup__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </li>

          <button type="submit" className="singup__button">
            Sign Up
          </button>
        </ul>
      </form>
    </div>
  );
};

export default SingUp;
