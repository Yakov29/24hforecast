import React, { useState } from "react";
import "./Slider.css";
import Container from "../Container/Container";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?semt=ais_hybrid&w=740",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
  "https://img.hotels24.ua/photos/ria/new_images/1123/112316/11231683/11231683m.jpg",
  "https://faktypro.com.ua/uploads/img-2/15-cikavih-faktiv-pro-dnipro.jpg"
];



const Slider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const getSlide = (i) => {
    const total = images.length;
    return images[(index + i + total) % total];
  };

  return (
    <section className="slider">
      <Container>
        <h2 className="slider__title">Beautiful Nature</h2>
        <div className="slider__box">
          <button className="slider__arrow slider__arrow--left" onClick={prevSlide}><FaArrowLeft/></button>
          <ul className="slider__list">
            <li className="slider__item side">
              <img className="slider__img" src={getSlide(-1)} alt="side-left" />
            </li>
            <li className="slider__item center">
              <img className="slider__img" src={getSlide(0)} alt="center" />
            </li>
            <li className="slider__item side">
              <img className="slider__img" src={getSlide(1)} alt="side-right" />
            </li>
          </ul>
          <button className="slider__arrow slider__arrow--right" onClick={nextSlide}><FaArrowRight/></button>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
