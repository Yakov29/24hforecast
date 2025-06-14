import React from "react";
import "./Login.css"

const Login = ({logInAccount}) => {
  return (
    <div className="backdrop login">
      <form className="login__modal">
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
