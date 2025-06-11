import React from "react";
import Container from "../Container/Container";
import "./Pets.css";

import getPetsAPI from "../../api/getPetsAPI";

import AOS from "aos";
import "aos/dist/aos.css";

const Pets = () => {
  const [pets, setPets] = React.useState([]);
  const [visibleCount, setVisibleCount] = React.useState(4);

  React.useEffect(() => {
    getPetsAPI("pets").then((data) => {
      setPets(data);
    });
  }, []);

  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, [pets, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pets">
      <Container>
        <h2 className="pets__title">Interacting with our pets</h2>
        <ul className="pets__list">
          {pets.slice(0, visibleCount).map((pet, index) => (
            <li
              className="pets__item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={pet.webformatURL} alt={pet.tags} className="pets__image" />
              <p className="pets__description">{pet.tags}</p>
            </li>
          ))}
        </ul>

        {visibleCount < pets.length && (
          <button className="pets__load" onClick={handleLoadMore}>
            See More
          </button>
        )}
      </Container>
    </div>
  );
};

export default Pets;
