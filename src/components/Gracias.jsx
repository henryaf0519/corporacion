import React from "react";
import { FaCheck } from "react-icons/fa";
// Importamos un ícono de alerta para el toque profesional (FaExclamationTriangle)
import { FaExclamationTriangle } from "react-icons/fa";
import "../styles/Gracias.css";

function Gracias() {
  return (
    <div className="gracias-container">
      <div className="gracias-content">
        <h1 className="gracias-title">¡Registro Confirmado!</h1>
        <h2 className="gracias-subtitle">
          Bienvenido a la experiencia que une
          <br />
          Inteligencia Artificial, Liderazgo e Innovación
        </h2>
        <p className="gracias-text">
          Su participación ha sido registrada con éxito. Prepárese para vivir un evento único donde explorará las estrategias clave para aplicar la Inteligencia Artificial en el escalamiento de negocios, el liderazgo con visión de futuro y la creación de estrategias disruptivas.
        </p>

        {/* --- Nuevo Bloque de Alerta Profesional (Reemplaza el primer <li>) --- */}
        <p className="spam-alert">
          <FaExclamationTriangle className="alert-icon" />
          AVISO IMPORTANTE: Por favor, verifica tu carpeta de Correo No Deseado o Spam para encontrar el email de confirmación que estaremos enviando y los detalles de acceso.
        </p>
        {/* --------------------------------------------------------------------- */}

        {/* Modifiqué el margin-bottom para que haya más espacio después de la alerta */}
        <ul className="gracias-checklist" style={{ marginTop: '40px' }}>
          <li>
            <FaCheck className="check-icon" />
            Guarda la fecha y bloquea tu agenda: 27 de Noviembre, 8:00 a.m. - 3:00 p.m.
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