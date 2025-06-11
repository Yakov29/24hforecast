import React, { useEffect } from "react";
import Container from "../Container/Container";
import { FaPlus } from "react-icons/fa";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ weatherHandler, weatherSaver }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const options = { year: "numeric", month: "long", weekday: "long", day: "numeric" };
    return now.toLocaleDateString("en-US", options);
  };

  return (
    <section className="hero" data-aos="fade-up" id="hero">
      <Container>
        <h1 className="hero__title" data-aos="fade-down">Weather dashboard</h1>
        <ul className="hero__list">
          <li className="hero__item" data-aos="fade-right" data-aos-delay="100">
            <span className="hero__text">
              Create your personal list of favorite cities and always be aware
              of the weather.
            </span>
          </li>
          <li className="hero__item" data-aos="fade-right" data-aos-delay="200">
            <span className="hero__text">{getCurrentDate()}</span>
          </li>
        </ul>
        <div className="hero__box" data-aos="zoom-in" data-aos-delay="300">
          <input
            type="search"
            placeholder="Add location..."
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
