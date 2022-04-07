import React from "react";
import "./about.css";
import coding from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hola 👋, soy
          <br /> <span className="info-name">Emmanuel Estupiñan.</span>
          <br /> Amo experimentar con la web.
          <br /> motivado con buen desempeño 
          <br /> trabajando en equipo apasionado por aprender.
        </div>
        <div className="about-photo">
          <img src={coding} className="picture" alt="coding" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
