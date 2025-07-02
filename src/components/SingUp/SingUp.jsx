import React, { useState, useRef } from "react";
import "./SingUp.css";

const SingUp = ({ registerAccount, logButtonHandler , onClose}) => {
  const [avatarError, setAvatarError] = useState("");
  const avatarInputRef = useRef(null);

  const checkAvatarUrl = () => {
    const url = avatarInputRef.current.value.trim();
    if (!url) {
      setAvatarError("");
      return;
    }
    const img = new Image();
    img.onload = () => {
      setAvatarError("");
    };
    img.onerror = () => {
      setAvatarError("Invalid avatar image URL");
    };
    img.src = url;
  };

  return (
    <div className="backdrop singup">
      <form className="singup__modal" onSubmit={registerAccount}>
        <button
          type="button"
          className="avatar__close-button"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="singup__title">Sign Up</h2>
        <ul className="singup__list">
          <li className="singup__item">
            <label className="singup__description" htmlFor="name">
              Username
            </label>
            <input
              className="singup__input"
              type="text"
              id="name"
              name="username"
              placeholder="Username"
              required
            />
          </li>
          <li className="singup__item">
            <label className="singup__description" htmlFor="email">
              Email
            </label>
            <input
              className="singup__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </li>
          <li className="singup__item">
            <label className="singup__description" htmlFor="password">
              Password
            </label>
            <input
              className="singup__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </li>
          <li className="singup__item">
            <label className="singup__description" htmlFor="avatar">
              Avatar URL
            </label>
            <input
              className="singup__input"
              type="text"
              id="avatar"
              name="avatar"
              placeholder="Link to avatar image"
              ref={avatarInputRef}
              onBlur={checkAvatarUrl}
            />
            {avatarError && (
              <p style={{ color: "red", marginTop: "4px" }}>{avatarError}</p>
            )}
          </li>
          <button
            type="submit"
            className="singup__button"
            disabled={!!avatarError}
          >
            Sign Up
          </button>
        </ul>
        <span className="singup__login">
          Already have an account?{" "}
          <button
            type="button"
            onClick={logButtonHandler}
            className="singup__login-button"
          >
            Log In
          </button>
        </span>
      </form>
    </div>
  );
};

export default SingUp;
