import React from "react";

import sun from "../../images/sun.svg";
import Container from "../Container/Container";

import { TbReload } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import "./Cards.css";

const Cards = () => {
  return (
    <section className="cards">
      <Container>
        <ul className="cards__list">
          <li className="cards__item">
            <span className="cards__city">Dnipro</span>
            <span className="cards__country">Ukraine</span>
            <h4 className="cards__time">14:00</h4>
            <button className="cards__button">Hourly forecast</button>
            <ul className="cards__data">
              <li className="cards__data__item">
                <span className="cards__data__text">09.05.2025</span>
              </li>
              <li className="cards__data__item">
                <span className="cards__data__text">Friday</span>
              </li>
            </ul>
            <img className="cards__image" src={sun} alt="" />
            <h3 className="cards__temperature">22℃</h3>
            <ul className="cards__buttons">
              <li className="cards__buttons__item">
                <button className="cards__buttons__item__button">
                  <TbReload />
                </button>
              </li>
              <li className="cards__buttons__item">
                <button
                  style={{ color: "red" }}
                  className="cards__buttons__item__button"
                >
                  <FaRegHeart />
                </button>
              </li>
            </ul>
            <button className="cards__delete">
              <FaRegTrashAlt />
            </button>
          </li>
          <li className="cards__item">
            <span className="cards__city">Dnipro</span>
            <span className="cards__country">Ukraine</span>
            <h4 className="cards__time">14:00</h4>
            <button className="cards__button">Hourly forecast</button>
            <ul className="cards__data">
              <li className="cards__data__item">
                <span className="cards__data__text">09.05.2025</span>
              </li>
              <li className="cards__data__item">
                <span className="cards__data__text">Friday</span>
              </li>
            </ul>
            <img className="cards__image" src={sun} alt="" />
            <h3 className="cards__temperature">22℃</h3>
            <ul className="cards__buttons">
              <li className="cards__buttons__item">
                <button className="cards__buttons__item__button">
                  <TbReload />
                </button>
              </li>
              <li className="cards__buttons__item">
                <button
                  style={{ color: "red" }}
                  className="cards__buttons__item__button"
                >
                  <FaRegHeart />
                </button>
              </li>
            </ul>
            <button className="cards__delete">
              <FaRegTrashAlt />
            </button>
          </li>
          <li className="cards__item">
            <span className="cards__city">Dnipro</span>
            <span className="cards__country">Ukraine</span>
            <h4 className="cards__time">14:00</h4>
            <button className="cards__button">Hourly forecast</button>
            <ul className="cards__data">
              <li className="cards__data__item">
                <span className="cards__data__text">09.05.2025</span>
              </li>
              <li className="cards__data__item">
                <span className="cards__data__text">Friday</span>
              </li>
            </ul>
            <img className="cards__image" src={sun} alt="" />
            <h3 className="cards__temperature">22℃</h3>
            <ul className="cards__buttons">
              <li className="cards__buttons__item">
                <button className="cards__buttons__item__button">
                  <TbReload />
                </button>
              </li>
              <li className="cards__buttons__item">
                <button
                  style={{ color: "red" }}
                  className="cards__buttons__item__button"
                >
                  <FaRegHeart />
                </button>
              </li>
            </ul>
            <button className="cards__delete">
              <FaRegTrashAlt />
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Cards;
