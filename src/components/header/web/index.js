import React from "react";
import "./web.css";
function web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit-alt option-icon"></i>proyectos
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop option-icon"></i>habilidades
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>contacto
        </a>
      </div>
    </div>
  );
}

export default web;
