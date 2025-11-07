import React from "react";
import { FaCheck } from "react-icons/fa";
import "../styles/Gracias.css"; // Crearemos este archivo a continuación

function Gracias() {
  return (
    <div className="gracias-container">
      <div className="gracias-content">
        <h1 className="gracias-title">¡Estás dentro!</h1>
        <h2 className="gracias-subtitle">
          Bienvenido a la experiencia que une
          <br />
          Inteligencia Artificial, Liderazgo e Innovación
        </h2>
        <p className="gracias-text">
          Prepárate para vivir un evento único donde aprenderás cómo aplicar la
          Inteligencia Artificial para escalar negocios, liderar con visión y
          crear estrategias que marcan la diferencia.
        </p>

        <ul className="gracias-checklist">
          <li>
            <FaCheck className="check-icon" />
            Te estaremos enviando lo más pronto un correo para que puedas estar
            atento del evento, no te preocupes si no lo ves en el momento
          </li>
          <li>
            <FaCheck className="check-icon" />
            Guarda la fecha y bloquea tu agenda (27 de Noviembre 8:15am - 3pm)
          </li>
          <li>
            <FaCheck className="check-icon" />
            Síguenos en Instagram para no perderte novedades, invitados sorpresa
            y contenido exclusivo previo al evento
          </li>
        </ul>

        {/* Reemplaza esta URL por la de tu Instagram real */}
        <a
          href="https://www.instagram.com/corporaciondsf?igsh=bTVjYmozbTI0OXcx"
          target="_blank"
          rel="noopener noreferrer"
          className="gracias-button"
        >
          SÍGUENOS EN INSTAGRAM
        </a>
      </div>
    </div>
  );
}

export default Gracias;
