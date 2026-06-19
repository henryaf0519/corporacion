import React from "react";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import "../styles/Gracias.css";

function Gracias() {
  return (
    <div className="gracias-container">
      <div className="gracias-content">
        <div className="section-label">Confirmación</div>
        
        <h1 className="gracias-title">¡Registro Confirmado!</h1>
        
        <h2 className="gracias-subtitle">
          Bienvenido a la experiencia que une<br />
          <span>Inteligencia Artificial, Liderazgo e Innovación</span>
        </h2>
        
        <p className="gracias-text">
          Su participación ha sido registrada con éxito. Prepárese para vivir un evento único donde explorará las estrategias clave para aplicar la Inteligencia Artificial en el escalamiento de negocios, el liderazgo con visión de futuro y la creación de estrategias disruptivas.
        </p>

        {/* Notificación de Spam Estilo Cyber-Pro */}
        <div className="spam-notification">
          <div className="notification-glow"></div>
          <FaExclamationTriangle className="notification-icon" />
          <p className="notification-text">
            <strong>AVISO IMPORTANTE:</strong> Por favor, verifica tu carpeta de Correo No Deseado o Spam para encontrar el email de confirmación y los detalles de acceso.
          </p>
        </div>

        <ul className="gracias-checklist">
          <li>
            <div className="check-icon-wrapper">
              <FaCheck className="check-icon" />
            </div>
            <span>Guarda la fecha y bloquea tu agenda: <span className="highlight-text">27 de Noviembre, 8:00 a.m. - 3:00 p.m.</span></span>
          </li>
          <li>
            <div className="check-icon-wrapper">
              <FaCheck className="check-icon" />
            </div>
            <span>Síguenos en Instagram para no perderte novedades, invitados sorpresa y contenido exclusivo previo al evento</span>
          </li>
        </ul>

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