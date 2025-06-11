import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Arrows.css";

const Arrows = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrolledToBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
    setIsAtBottom(scrolledToBottom);
  };

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button onClick={handleClick} className="arrow">
      {isAtBottom ? <FaArrowUp size={30} /> : <FaArrowDown size={30} />}
    </button>
  );
};

export default Arrows;
