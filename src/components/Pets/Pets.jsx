import React from "react";
import Container from "../Container/Container";
import "./Pets.css";

import getPetsAPI from "../../api/getPetsAPI";

const Pets = () => {
  const [pets, setPets] = React.useState([]);
  const [visibleCount, setVisibleCount] = React.useState(4);

  React.useEffect(() => {
    // Загружаем всех питомцев при монтировании
    getPetsAPI("pets").then((data) => {
      setPets(data);
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pets">
      <Container>
        <h2 className="pets__title">Interacting with our pets</h2>
        <ul className="pets__list">
          {pets.slice(0, visibleCount).map((pet, index) => (
            <li className="pets__item" key={index}>
              <img src={pet.webformatURL} alt={pet.tags} className="pets__image" />
              <p className="pets__description">{pet.tags}</p>
            </li>
          ))}
        </ul>
       
          <button className="pets__load" onClick={handleLoadMore}>
            See More
          </button>
    
      </Container>
    </div>
  );
};

export default Pets;
