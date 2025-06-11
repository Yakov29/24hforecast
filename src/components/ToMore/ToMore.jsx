import React, { useEffect } from "react";
import "./ToMore.css";
import { TiWeatherCloudy } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

const ToMore = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const scrollToMore = () => {
    const moreSection = document.getElementById("more");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="tomore" onClick={scrollToMore} data-aos="zoom-in">
      <TiWeatherCloudy />
    </button>
  );
};

export default ToMore;
