import React, { useEffect, useState } from "react";
import getDailyAPI from "../../api/getDailyAPI";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiDayCloudy } from "react-icons/wi";
import "./Daily.css";
import Container from "../Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Daily = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes("clear") || desc.includes("sun")) {
      return <WiDaySunny size={24} color="#f39c12" />;
    }
    if (desc.includes("cloud")) {
      return <WiCloud size={24} color="#7f8c8d" />;
    }
    if (desc.includes("rain")) {
      return <WiRain size={24} color="#3498db" />;
    }
    if (desc.includes("snow")) {
      return <WiSnow size={24} color="#95a5a6" />;
    }
    if (desc.includes("partly")) {
      return <WiDayCloudy size={24} color="#f39c12" />;
    }
    return <WiDaySunny size={24} color="#f39c12" />;
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError(null);

    getDailyAPI(city)
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!weather || !weather.daily) return null;

  return (
    <section className="daily">
      <Container>
        <div className="daily__data" data-aos="fade-up">
          <h2 className="daily__title">{weather.daily.length}-day forecast</h2>
          <ul className="daily__list">
            {weather.daily.map(({ date, avgTemp, description }) => (
              <li key={date} className="daily__item">
                <span className="daily__date">{formatDate(date)}</span>
                <span className="daily__temp">
                  {avgTemp}°C {getWeatherIcon(description)}
                </span>
                <span className="daily__description">{description}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Daily;
