import React from "react";
import "./Slider.css";
import Container from "../Container/Container";

import nature1 from "../../images/nature1.png"
import nature2 from "../../images/nature2.png"


const Slider = () => {
  return (
    <section className="slider">
      <Container>
        <h2 className="slider__title">Beautiful nature</h2>
        <div className="slider__box">
            <ul className="slider__list">
                <li className="slider__item">
                    <img className="slider__img" src={nature1} alt="" />
                </li>
                <li className="slider__item">
                    <img className="slider__img" src={nature2} alt="" />
                </li>
            </ul>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
