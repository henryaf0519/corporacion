import React, { useEffect, useRef } from "react";
import "./App.css"; // (No olvides que este archivo existe)
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaLanguage,
} from "react-icons/fa";
import { animate } from "motion";

// 1. Importamos Link
import { Link } from "react-router-dom";

import speakersImage from "./assets/speakers.webp";
import BiosPonentes from "./components/BiosPonentes";
import Sponsors from "./components/Sponsors";

function App() {
  const speakersRef = useRef(null);

  useEffect(() => {
    if (speakersRef.current) {
      animate(
        speakersRef.current,
        { y: [0, -12, 0] },
        {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }
      );
    }
  }, []);

  return (
    <>
      <div className="flyer-container">
        {/* --- TÍTULO PRINCIPAL --- */}
        <header className="flyer-header">
          <h1>INTELIGENCIA ARTIFICIAL</h1>
          <p className="subtitle">El Futuro de las Empresas y Startups</p>
        </header>

        {/* --- DESCRIPCIÓN EXPERTOS --- */}
        <section className="intro-text">
          <p>
            Expertos en <span>IA</span>, transformación digital,
            <br /> emprendimiento, innovación y liderazgo
          </p>
        </section>

        {/* --- SECCIÓN DE PONENTES --- */}
        <section className="speakers-section">
          <div ref={speakersRef} className="all-speakers-photo-container">
            <img src={speakersImage} alt="Ponentes del evento" />
          </div>
        </section>

        {/* --- TÍTULO DEL EVENTO --- */}
        <section className="event-title">
          <h2>VIII Conferencia Internacional y Workshop</h2>
          <h2 className="text-highlight">
            EMPRENDIMIENTO, INNOVACIÓN Y LIDERAZGO
          </h2>
          <h3>Paneles casos de éxito empresarial</h3>
        </section>

        {/* --- DETALLES DEL EVENTO (2 COLUMNAS) --- */}
        <section className="details-section">
          <div className="details-grid">
            {/* ... (Columna Izquierda) ... */}
            <div className="details-left">
              <div className="detail-item mb50">
                <FaCalendarAlt className="detail-icon" />
                <div className="detail-text dfad">
                  <div className="date-line">
                    <h1 className="text-highlight large-text">27</h1>
                    <div className="detail-date">
                      <h1>NOVIEMBRE</h1>
                      <h2>Jueves</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-item mb50">
                <FaMapMarkerAlt className="detail-icon" />
                <div className="detail-text dfad">
                  <p>
                    Forum Universidad <br /> Pontificia Bolivariana.
                  </p>
                </div>
              </div>

              <div className="detail-item mb50">
                <FaClock className="detail-icon" />
                <div className="detail-text dfad">
                  <p>
                    8:00 a.m. - 3:00 p.m. <br />
                    Conferencias y workshop
                  </p>
                </div>
              </div>
            </div>

            {/* ... (Columna Derecha) ... */}
            <div className="details-right">
              <div className="detail-item">
                <div className="detail-text dfau full-width ">
                  <p className="fs2">1.000 empresarios y emprendedores</p>
                </div>
              </div>

              <div className="language-cont">
                <FaLanguage className="detail-language-icon" />
                <div className="langeuage-text">
                  <p>Traducción simultánea</p>
                </div>
              </div>

              <div className="detail-contact">
                <p className="text-highlight large-text">
                  INSCRIPCIÓN GRATUITA
                </p>
                <p className="m10">Cupos limitados</p>
                <p className="website">www.corporaciondsf.com</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Footer del Flyer --- */}
        <footer className="flyer-footer">
          <p className="quote">
            "The best way to predict the future is to create it" - Peter Drucker
          </p>
        </footer>
      </div>
      {/* --- FIN DE .flyer-container --- */}

      {/* 2. PRIMER BOTÓN (Después del flyer) */}
      <div className="cta-button-container">
        <Link to="/inscripcion" className="cta-button">
          ¡Inscríbete Gratis Aquí!
        </Link>
      </div>

      <Sponsors />
      <BiosPonentes />

      {/* 3. SEGUNDO BOTÓN (Después de las bios) */}
      <div className="cta-button-container">
        <Link to="/inscripcion" className="cta-button">
          ¡Inscríbete Gratis Aquí!
        </Link>
      </div>
    </>
  );
}

export default App;