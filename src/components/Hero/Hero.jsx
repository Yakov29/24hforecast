import React from "react";
import Container from "../Container/Container";
import { FaPlus } from "react-icons/fa";
import "./Hero.css";

const Hero = ({ weatherHandler, weatherSaver }) => {
  const getCurrentDate = () => {
    const now = new Date();
    const options = { year: "numeric", month: "long", weekday: "long", day: "numeric" };
    return now.toLocaleDateString("en-US", options); // Можно заменить "en-US" на нужный язык
  };

  return (
    <section className="hero">
      <Container>
        <h1 className="hero__title">Weather dashboard</h1>
        <ul className="hero__list">
          <li className="hero__item">
            <span className="hero__text">
              Create your personal list of favorite cities and always be aware
              of the weather.
            </span>
          </li>
          <li className="hero__item">
            <span className="hero__text">{getCurrentDate()}</span>
          </li>
        </ul>
        <div className="hero__box">
          <input
            type="search"
            placeholder="Search location..."
            className="hero__input"
            onChange={weatherHandler}
          />
          <button className="hero__search" onClick={weatherSaver}>
            <FaPlus />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
