import React, { useEffect } from "react";
import Container from "../Container/Container";
import getWeatherAPI from "../../api/getWeatherAPI";
import AOS from "aos";
import "aos/dist/aos.css";
import "./More.css";

const More = ({ city }) => {
  const [weather, setWeather] = React.useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  React.useEffect(() => {
    if (city) {
      getWeatherAPI(city).then((data) => {
        setWeather(data);
      });
    }
  }, [city]);

  if (!weather) return null;

  return (
    <section className="more" id="more" data-aos="fade-up">
      <Container>
        <div className="more__data">
         
          <ul className="more__list">
            <li className="more__item">
              <h4 className="more__title">Feels like</h4>
              <p className="more__temp">{weather.main.feels_like}℃</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/11331/11331728.png"
                alt="Feels like icon"
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Min ℃</h4>
              <p className="more__temp">{weather.main.temp_min}℃</p>
              <h4 className="more__title">Max ℃</h4>
              <p className="more__temp">{weather.main.temp_max}℃</p>
            </li>
            <li className="more__item">
              <h4 className="more__title">Humidity</h4>
              <p className="more__temp">{weather.main.humidity}%</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/1332/1332316.png"
                alt="Humidity icon"
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Pressure</h4>
              <p className="more__temp">{weather.main.pressure} Pa</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/4115/4115904.png"
                alt="Pressure icon"
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Wind speed</h4>
              <p className="more__temp">{weather.wind.speed} m/s</p>
              <img
                className="more__icon"
                src="https://cdn.iconscout.com/icon/free/png-256/free-wind-icon-download-in-svg-png-gif-file-formats--air-turbine-weather-windy-flat-pack-icons-38919.png?f=webp&w=256"
                alt="Wind speed icon"
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Visibility</h4>
              <p className="more__temp">
                {weather.visibility === 10000
                  ? "Unlimited"
                  : `${weather.visibility} m`}
              </p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/802/802067.png"
                alt="Visibility icon"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default More;
