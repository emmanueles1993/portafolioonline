import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#proyectos">
            <i class="fi fi-rr-edit-alt option-icon"></i>proyectos
          </a>
        </div>
        <div className="mobile-option">
          <a href="#habilidades">
            <i class="fi fi-rr-laptop option-icon"></i>habilidades
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contacto">
            <i class="fi fi-rr-user option-icon"></i>contacto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
