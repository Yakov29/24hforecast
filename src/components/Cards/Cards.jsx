import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import getWeatherAPI from "../../api/getWeatherAPI";
import { MdDeleteOutline } from "react-icons/md";
import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

import "./Cards.css";

const Cards = ({ getMoreData }) => {
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("city") || "[]");
    setCities(savedCities);

    savedCities.forEach((city) => {
      getWeatherAPI(city).then((data) => {
        setWeatherData((prev) => ({ ...prev, [city]: data }));
      });
    });
  }, []);

  const handleDeleteCity = (cityToDelete) => {
    const updatedCities = cities.filter((city) => city !== cityToDelete);
    setCities(updatedCities);
    localStorage.setItem("city", JSON.stringify(updatedCities));

    setWeatherData((prev) => {
      const updatedData = { ...prev };
      delete updatedData[cityToDelete];
      return updatedData;
    });
  };

  const getWeatherIcon = (iconCode) => {
    const codeMap = {
      "01d": <WiDaySunny size={100} color="#f39c12" />,      // Солнце — желтый
      "01n": <WiNightClear size={100} color="#f1c40f" />,    // Ночь — желтый чуть светлее
      "02d": <WiCloud size={100} color="#7f8c8d" />,         // Облачно — серый
      "02n": <WiCloud size={100} color="#7f8c8d" />,
      "03d": <WiCloudy size={100} color="#95a5a6" />,        // Облачно сильнее — светло-серый
      "03n": <WiCloudy size={100} color="#95a5a6" />,
      "04d": <WiCloudy size={100} color="#7f8c8d" />,
      "04n": <WiCloudy size={100} color="#7f8c8d" />,
      "09d": <WiShowers size={100} color="#3498db" />,       // Ливень — синий
      "09n": <WiShowers size={100} color="#3498db" />,
      "10d": <WiRain size={100} color="#2980b9" />,           // Дождь — синий темный
      "10n": <WiRain size={100} color="#2980b9" />,
      "11d": <WiThunderstorm size={100} color="#8e44ad" />,  // Гроза — фиолетовый
      "11n": <WiThunderstorm size={100} color="#8e44ad" />,
      "13d": <WiSnow size={100} color="#ecf0f1" />,          // Снег — белый
      "13n": <WiSnow size={100} color="#ecf0f1" />,
      "50d": <WiFog size={100} color="#95a5a6" />,            // Туман — серо-голубой
      "50n": <WiFog size={100} color="#95a5a6" />,
    };

    return codeMap[iconCode] || <WiDaySunny size={48} color="#f39c12" />;
  };

  const getCountryFlag = (countryCode) => {
    if (!countryCode) return "";
    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
  };

  const renderCard = (city, index) => {
    const data = weatherData[city];
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    let temp = "Not Found";
    let country = "";
    let iconElement = <div className="cards__image-placeholder"></div>;

    if (data) {
      temp = Math.round(data.main.temp) + "℃";
      country = data.sys.country;
      const iconCode = data.weather[0].icon;
      iconElement = getWeatherIcon(iconCode);
    }

    return (
      <li className="cards__item" key={index} onClick={getMoreData}>
        <span className="cards__city">{city}</span>
        <span className="cards__country">{getCountryFlag(country)}</span>
        <h4 className="cards__time">{time}</h4>
        <ul className="cards__data">
          <li className="cards__data__item">
            <span className="cards__data__text">{date}</span>
          </li>
          <li className="cards__data__item">
            <span className="cards__data__text">{day}</span>
          </li>
        </ul>
        <div className="cards__image">{iconElement}</div>
        <h3 className="cards__temperature">{temp}</h3>
        <button className="cards__more">See more</button>
        <button
          className="cards__delete"
          onClick={() => handleDeleteCity(city)}
          aria-label={`Delete ${city}`}
        >
          <MdDeleteOutline />
        </button>
      </li>
    );
  };

  return (
    <section className="cards">
      <Container>
        <ul className="cards__list">
          {cities.map((city, index) => renderCard(city, index))}
        </ul>
      </Container>
    </section>
  );
};

export default Cards;
