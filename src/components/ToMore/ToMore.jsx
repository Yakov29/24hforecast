import React from "react";
import "./ToMore.css";

import { TiWeatherCloudy } from "react-icons/ti";

const ToMore = () => {
  const scrollToMore = () => {
    const moreSection = document.getElementById("more");
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="tomore" onClick={scrollToMore}>
      <TiWeatherCloudy />
    </button>
  );
};

export default ToMore;
