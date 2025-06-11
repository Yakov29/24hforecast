import React, { useState, useEffect } from "react";
import "./Slider.css";
import Container from "../Container/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?semt=ais_hybrid&w=740",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
  "https://img.hotels24.ua/photos/ria/new_images/1123/112316/11231683/11231683m.jpg",
  "https://faktypro.com.ua/uploads/img-2/15-cikavih-faktiv-pro-dnipro.jpg"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const getImage = (offset) => {
    const total = images.length;
    return images[(currentIndex + offset + total) % total];
  };

  const handleSlide = (dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === "left"
          ? (prev - 1 + images.length) % images.length
          : (prev + 1) % images.length
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="slider" data-aos="fade-up">
      <Container>
        <h2 className="slider__title">Beautiful Nature</h2>
        <div className="slider__box">
          <button
            className="slider__arrow slider__arrow--left"
            onClick={() => handleSlide("left")}
          >
            <FaArrowLeft />
          </button>

          <div className={`slider__viewport ${isAnimating ? "animating " + direction : ""}`}>
            <div className="slider__track">
              {[getImage(-1), getImage(0), getImage(1)].map((src, i) => (
                <div
                  key={i}
                  className={`slider__item ${i === 1 ? "center" : "side"}`}
                >
                  <img src={src} alt={`slide-${i}`} className="slider__img" />
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider__arrow slider__arrow--right"
            onClick={() => handleSlide("right")}
          >
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
