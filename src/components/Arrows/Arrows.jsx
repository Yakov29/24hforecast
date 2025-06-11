import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Arrows.css";

const Arrows = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const arrows = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsAtBottom(false);
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setIsAtBottom(true);
    }
  };

  return (
    <button onClick={arrows} className="arrow">
      {isAtBottom ? <FaArrowUp /> : <FaArrowDown />}
    </button>
  );
};

export default Arrows;
