import React from "react";
import { Container } from "../Container/Container";

import { IoIosSearch } from "react-icons/io";


import "./Hero.css";

const Hero = () => {
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
            <span className="hero__text">October 2023 Friday, 13th</span>
          </li>
        </ul>
        <div className="hero__box">
          <input
            type="search"
            placeholder="Search location..."
            className="hero__input"
          />
          <button className="hero__search">
              <IoIosSearch/>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
