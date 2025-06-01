import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Pets from "./components/Pets/Pets";
import More from "./components/More/More";
import Slider from "./components/Slider/Slider";
import SingUp from "./components/SingUp/SingUp";

import getWeatherAPI from "./api/getWeatherAPI";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    document.title = "24 Forecast";
  }, []);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [moreCity, setMoreCity] = useState("");

  function regButtonHandler() {
    const singUpBackdrop = document.querySelector(".sungup");
    singUpBackdrop.style.display = "block";
  }


  function weatherHandler(e) {
    const value = e.target.value;
    setCity(value);
    console.log(value);
  }

  function weatherSaver() {
    console.log("save");
    let savedCities = localStorage.getItem("city");
    let citiesArray = savedCities ? JSON.parse(savedCities) : [];
    citiesArray.push(city);
    localStorage.setItem("city", JSON.stringify(citiesArray));
    window.location.reload();
  }

  useEffect(() => {
    getWeatherAPI(city).then((data) => {
      setWeather(data);
    });
  }, [city]);

  const renderCard = (index) => {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const day = now.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    let temp = "—";
    let country = "";
    let cityName = city;
    let iconUrl = "";

    if (weather) {
      temp = Math.round(weather.main.temp) + "℃";
      country = weather.sys.country;
      cityName = weather.name;
      const iconCode = weather.weather[0].icon;
      iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }

    return (
      <li className="cards__item" key={index}>
        <span className="cards__city">{cityName}</span>
        <span className="cards__country">{country}</span>
        <h4 className="cards__time">{time}</h4>
        <button className="cards__button">Hourly forecast</button>
        <ul className="cards__data">
          <li className="cards__data__item">
            <span className="cards__data__text">{date}</span>
          </li>
          <li className="cards__data__item">
            <span className="cards__data__text">{day}</span>
          </li>
        </ul>
        {iconUrl ? (
          <img className="cards__image" src={iconUrl} alt="Weather icon" />
        ) : (
          <div className="cards__image-placeholder"></div>
        )}
        <h3 className="cards__temperature">{temp}</h3>
      </li>
    );
  };

  const getMoreData = (e) => {
    if (e.target.classList.contains("cards__more")) {
      const cityName = e.target
        .closest(".cards__item")
        .querySelector(".cards__city").textContent;
      console.log(`More data for ${cityName}`);
      setMoreCity(cityName);
    }
  };

  return (
    <div className="App">
      <Header regButtonHandler={regButtonHandler}/>
      <Hero  weatherHandler={weatherHandler} weatherSaver={weatherSaver} />
      <Cards city={city} renderCard={renderCard} getMoreData={getMoreData} />
      <Pets />
      <More city={moreCity} />
      <Slider/>
      <SingUp />
      <Footer />
    </div>
  );
}

export default App;
