import React, { useEffect } from "react";
import Container from "../Container/Container";

import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import whatsapp from "../../images/whatsapp.svg";

import "./Footer.css";

import logo from "../../images/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <footer className="footer" id="footer">
      <Container>
        <img className="footer__logo" src={logo} alt="logo" />
        <ul className="footer__links">
          <li className="footer__item">
            <h3 className="footer__title">Address</h3>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="google.com">
              Svobody str. 35
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://ru.wikipedia.org/wiki/%D0%94%D0%BD%D0%B5%D0%BF%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)"
            >
              Dnipro
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://ru.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0"
            >
              Ukraine
            </a>
          </li>
        </ul>
        <ul className="footer__contact">
          <li className="footer__network">
            <a className="footer__icon" href="https://www.instagram.com/d.yakov29/">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li className="footer__network">
            <a className="footer__icon" href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="footer__network">
            <a className="footer__icon" href="https://www.whatsapp.com/">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
