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
import Arrows from "./components/Arrows/Arrows";
import ToMore from "./components/ToMore/ToMore";
import NoCity from "./components/NoCity/NoCity";
import Avatar from "./components/Avatar/Avatar";

import getWeatherAPI from "./api/getWeatherAPI";
import pushProfileAPI from "./api/pushProfileAPI";
import getProfileAPI from "./api/getProfileAPI";
import pushAvatarAPI from "./api/pushAvatarAPI";

const defaultUserAvatar = "https://freesvg.org/img/abstract-user-flat-3.png";

function App() {
  const [avatarURL, setAvatarURL] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [moreCity, setMoreCity] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountFromAPI, setAccountFromAPI] = useState(null);

  useEffect(() => {
    document.title = "24 Forecast";

    const storedAccount = localStorage.getItem("account");

    if (!storedAccount) {
      const defaultAccount = { avatar: defaultUserAvatar };
      localStorage.setItem("account", JSON.stringify(defaultAccount));
      setAvatarURL(defaultUserAvatar);
    } else {
      const account = JSON.parse(storedAccount);
      setAvatarURL(account.avatar || defaultUserAvatar);

      if (account.email && account.password) {
        getProfileAPI(account.email, account.password)
          .then((data) => {
            setAvatarURL(data.avatar || defaultUserAvatar);
            setIsLoggedIn(true);
            setAccountFromAPI(data);
          })
          .catch(() => {
            setAvatarURL(defaultUserAvatar);
            setIsLoggedIn(false);
          });
      }
    }

    // Добавляем обработчики клика по фону модальных окон
    const backdrops = document.querySelectorAll(
      ".singup, .login, .menu, .avatar, .tomore, .nocity"
    );

    const backdropClickHandler = (e) => {
      if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
      }
    };

    backdrops.forEach((backdrop) => {
      backdrop.addEventListener("click", backdropClickHandler);
    });

    return () => {
      backdrops.forEach((backdrop) => {
        backdrop.removeEventListener("click", backdropClickHandler);
      });
    };
  }, []);

  const regButtonHandler = () => {
    const menu = document.querySelector(".menu");
    const singup = document.querySelector(".singup");
    if (menu) menu.style.display = "none";
    if (singup) singup.style.display = "block";
  };

  const logButtonHandler = () => {
    const singup = document.querySelector(".singup");
    const login = document.querySelector(".login");
    if (singup) singup.style.display = "none";
    if (login) login.style.display = "block";
  };

  const weatherHandler = (e) => {
    setCity(e.target.value);
  };

  const weatherSaver = () => {
    if (!city) return;

    getWeatherAPI(city).then((data) => {
      if (data) {
        const saved = localStorage.getItem("city");
        const arr = saved ? JSON.parse(saved) : [];
        if (!arr.includes(city)) {
          arr.push(city);
          localStorage.setItem("city", JSON.stringify(arr));
        }
        setCity(""); 
      } else {
        const noCity = document.querySelector(".nocity");
        if (noCity) {
          noCity.style.display = "block";
          const input = document.querySelector(".hero__input");
          if (input) input.value = "";
          setCity("");
          setTimeout(() => {
            noCity.style.display = "none";
          }, 1500);
        }
      }
    });
  };

  useEffect(() => {
    if (city) {
      getWeatherAPI(city).then((data) => {
        setWeather(data);
      });
    }
  }, [city]);

  const renderCard = (index) => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
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
      iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
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
        ?.querySelector(".cards__city")?.textContent;
      if (cityName) {
        setMoreCity(cityName);
        const toMoreBlock = document.querySelector(".tomore");
        if (toMoreBlock) {
          toMoreBlock.style.display = "flex";
        }
      }
    }
  };

  const registerAccount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll(".singup__input[name]");
    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    if (!formData.avatar) {
      formData.avatar = defaultUserAvatar;
    }

    formData.userid = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();

    try {
      const data = await pushProfileAPI(formData);
      localStorage.setItem("account", JSON.stringify(formData));
      setAvatarURL(data.avatar || defaultUserAvatar);
      setIsLoggedIn(true);
      form.reset();
      const singupModal = document.querySelector(".singup");
      if (singupModal) singupModal.style.display = "none";
    } catch {
      alert("Помилка реєстрації. Спробуйте пізніше.");
    }
  };

  const closeModal = () => {
    const backdrops = document.querySelectorAll(".backdrop");
    backdrops.forEach((backdrop) => {
      backdrop.style.display = "none";
    });
  };

  const logInAccount = (e) => {
    e.preventDefault();
    const form = e.target.closest(".login__modal");
    if (!form) return;
    const inputs = form.querySelectorAll(".login__input[name]");
    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    getProfileAPI(formData.email, formData.password)
      .then((data) => {
        const loginModal = document.querySelector(".login");
        if (loginModal) loginModal.style.display = "none";

        localStorage.setItem("account", JSON.stringify(formData));
        setAvatarURL(data.avatar || defaultUserAvatar);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    if (menu) menu.style.display = "block";
  };

  const logOut = () => {
    localStorage.removeItem("account");
    localStorage.removeItem("city");
    setAvatarURL(defaultUserAvatar);
    setIsLoggedIn(false);
    window.location.reload();
  };
console.log("Початковий аватар:", accountFromAPI);
  

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
      <Cards
        city={city}
        weather={weather}
        renderCard={renderCard}
        getMoreData={getMoreData}
      />
      <Pets />
      <More moreCity={moreCity} />
      <Hourly />
      <Daily />
      <Slider />
      <SingUp
        registerAccount={registerAccount}
        logButtonHandler={logButtonHandler}
      />
      <Login logInAccount={logInAccount} regButtonHandler={regButtonHandler} />
      <Menu />
      <Footer />
      <Arrows />
      <ToMore />
      <NoCity />
      <Avatar avatarURL={avatarURL}/>
    </div>
  );
}

export default App;
