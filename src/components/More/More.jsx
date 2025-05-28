import React from "react";
import Container from "../Container/Container";
import getWeatherAPI from "../../api/getWeatherAPI";
import "./More.css";

const More = ({ city }) => {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    if (city) {
      getWeatherAPI(city).then((data) => {
        setWeather(data);
      });
    }
  }, [city]);

  if (!weather) return null;

  return (
    <section className="more">
      <Container>
        <div className="more__data">
          <ul className="more__list">
            <li className="more__item">
              <h4 className="more__title">Feels like</h4>
              <p className="more__temp">{weather.main.feels_like}℃</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/11331/11331728.png"
                alt=""
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
                alt=""
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Pressure</h4>
              <p className="more__temp">{weather.main.pressure} Pa</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/4115/4115904.png"
                alt=""
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Wind speed</h4>
              <p className="more__temp">{weather.wind.speed} m/s</p>
              <img
                className="more__icon"
                src="https://cdn.iconscout.com/icon/free/png-256/free-wind-icon-download-in-svg-png-gif-file-formats--air-turbine-weather-windy-flat-pack-icons-38919.png?f=webp&w=256"
                alt=""
              />
            </li>
            <li className="more__item">
              <h4 className="more__title">Visibility</h4>
              <p className="more__temp">{weather.visibility} m</p>
              <img
                className="more__icon"
                src="https://cdn-icons-png.flaticon.com/512/802/802067.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default More;
