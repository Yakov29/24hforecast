import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Pets from "./components/Pets/Pets";
import More from "./components/More/More";
import Hourly from "./components/Hourly/Hourly";
import Daily from "./components/Daily/Daily";
import Slider from "./components/Slider/Slider";
import SingUp from "./components/SingUp/SingUp";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import getWeatherAPI from "./api/getWeatherAPI";
import pushProfileAPI from "./api/pushProfileAPI";
import getProfileAPI from "./api/getProfileAPI";

import { Chart } from "chart.js";

const user = "https://freesvg.org/img/abstract-user-flat-3.png";

function App() {
  const [avatarURL, setAvatarURL] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [moreCity, setMoreCity] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.title = "24 Forecast";

    const storedAccount = localStorage.getItem("account");

    if (storedAccount === null) {
      localStorage.setItem(
        "account",
        JSON.stringify({
          avatar: user,
        })
      );
      setAvatarURL(user);
    } else {
      const account = JSON.parse(storedAccount);

      if (!account.avatar) {
        setAvatarURL(user);
      } else {
        setAvatarURL(account.avatar);
      }

      if (account.email && account.password) {
        getProfileAPI(account.email, account.password)
          .then((data) => {
            console.log("Account data from API:", data);
            setAvatarURL(data.avatar || user);
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.error("Failed to fetch profile:", error);
            setAvatarURL(user);
            setIsLoggedIn(false);
          });
      }
    }
  }, []);

  function regButtonHandler() {
    const singUpBackdrop = document.querySelector(".singup");
    const menuBackdrop = document.querySelector(".menu");
    menuBackdrop.style.display = "none";
    singUpBackdrop.style.display = "block";
  }

  function logButtonHandler() {
    const singUpBackdrop = document.querySelector(".singup");
    const logInBackdrop = document.querySelector(".login");
    singUpBackdrop.style.display = "none";
    logInBackdrop.style.display = "block";
  }

  function weatherHandler(e) {
    const value = e.target.value;
    setCity(value);
  }

  function weatherSaver() {
    let savedCities = localStorage.getItem("city");
    let citiesArray = savedCities ? JSON.parse(savedCities) : [];
    citiesArray.push(city);
    localStorage.setItem("city", JSON.stringify(citiesArray));
    window.location.reload();
  }

  useEffect(() => {
    if (city) {
      getWeatherAPI(city).then((data) => {
        setWeather(data);
      });
    }
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
      setMoreCity(cityName);
    }
  };

  const registerAccount = (e) => {
    e.preventDefault();
    const form = e.target.closest(".singup__modal");
    const backdrop = document.querySelector(".singup");
    const inputs = form.querySelectorAll(".singup__input[name]");

    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    formData.userid = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();

    backdrop.style.display = "none";

    pushProfileAPI(formData)
      .then((data) => {
        console.log("Account registered:", data);
        localStorage.setItem("account", JSON.stringify(formData));
        setAvatarURL(data.avatar || user);
        setIsLoggedIn(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Error registering account:", error);
      });
  };

  const logInAccount = (e) => {
    e.preventDefault();
    const form = e.target.closest(".login__modal");
    const backdrop = document.querySelector(".login");
    const inputs = form.querySelectorAll(".login__input[name]");

    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    getProfileAPI(formData.email, formData.password)
      .then((data) => {
        console.log("Успішний вхід:", data);
        backdrop.style.display = "none";
        localStorage.setItem("account", JSON.stringify(formData));
        setAvatarURL(data.avatar || user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        alert(error.message);
        console.error("Помилка входу:", error);
      });
  };

  function openMenu() {
    const backdrop = document.querySelector(".menu");
    backdrop.style.display = "block";
  }

  const logOut = () => {
    localStorage.removeItem("account");
    setAvatarURL(user);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header
        regButtonHandler={regButtonHandler}
        avatar={avatarURL}
        isLoggedIn={isLoggedIn}
        openMenu={openMenu}
        logOut={logOut} 
      />
      <Hero weatherHandler={weatherHandler} weatherSaver={weatherSaver} />
      <Cards city={city} renderCard={renderCard} getMoreData={getMoreData} />
      <More city={moreCity} />
      {moreCity && <Hourly city={moreCity} />}
      {moreCity && <Daily city={moreCity} />}

      <Pets />
      <Slider />
      <SingUp
        registerAccount={registerAccount}
        logButtonHandler={logButtonHandler}
      />
      <Login logInAccount={logInAccount} />
      <Menu
        avatar={avatarURL}
        regButtonHandler={regButtonHandler}
        isLoggedIn={isLoggedIn}
        logOut={logOut} 
      />
      <Footer />
    </div>
  );
}

export default App;
