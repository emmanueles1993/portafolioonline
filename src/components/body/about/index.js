import React from "react";
import "./about.css";
import coding from "../../../assets/coding.png";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hola 👋, soy
          <br /> <span className="info-name">Emmanuel Estupiñan.</span>.
          <br /> Amo experimentar con la web.
          <br /> motivado con buen desempeño trabajando en equipo
          <br /> apasionado por aprender.
        </div>
        <div className="about-photo">
          <img src={coding} className="picture" alt="coding" />
        </div>
      </div>
      <div className="about-bottom">this is contacts</div>
    </div>
  );
}

export default About;
