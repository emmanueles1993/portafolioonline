import React from "react";
import "./about.css";
import coding from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about" id="home">
      <div className="about-top">
        <div className="about-info">
          Hola 👋, soy
          <br /> <span className="info-name">Emmanuel Estupiñan.</span>
          <br /> Amo experimentar con la web.
          <br /> Motivado con buen desempeño
          <br /> Trabajando en equipo apasionado por aprender.
        </div>
        <div className="about-photo">
          <img src={coding} className="picture" alt="coding" />
        </div>
      </div>
      <SocialContact />
      <div className="content-button">
        <a href="#home">
          <i class="fi fi-rr-arrow-small-up"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
