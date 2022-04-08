import React from "react";
import Separator from "../../common/separator";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
function contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contáctame</label>
      <div className="contact-container">
        <div className="contact-left">
<p> ¿Quieres ponerte en contacto ?
Contáctame en cualquiera de las plataformas</p>
<SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/cv.pdf")}>
            <i class="fi-rr-cloud-download download-icon" />
            Descargar CV
          </a>

        </div>
      </div>
    </div>
  );
}

export default contact;
