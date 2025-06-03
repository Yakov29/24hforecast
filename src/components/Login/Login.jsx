import React from "react";
import "./Login.css"

const Login = ({logInAccount}) => {
  return (
    <div className="backdrop login">
      <form className="login__modal">
        <h2 className="login__title">Log In</h2>
        <ul className="login__list">
          <li className="login__item">
            <p className="login__description" htmlFor="userid">
              User ID
            </p>
            <input
              className="login__input"
              type="number"
              id="userid"
              name="userid"
              placeholder="User ID"
            />
          </li>
          <li className="login__item">
            <p className="login__description" htmlFor="password">
              Password
            </p>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
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
