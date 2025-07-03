import React from "react";
import "./Login.css";

const Login = ({ logInAccount, onClose }) => {
  return (
    <div className="backdrop login">
      <form className="login__modal">
        <button
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
        </button>

        <h2 className="login__title">Log In</h2>
        <ul className="login__list">
          <li className="login__item">
            <label className="login__description" htmlFor="email">
              Email
            </label>
            <input
              className="login__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </li>
          <li className="login__item">
            <label className="login__description" htmlFor="password">
              Password
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </li>

          <button
            type="submit"
            onClick={logInAccount}
            className="login__button"
          >
            Log In
          </button>
        </ul>
      </form>
    </div>
  );
};

export default Login;
