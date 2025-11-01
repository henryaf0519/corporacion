import React from "react";
import "./App.css"; // 1. Importamos el CSS
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaLanguage,
} from "react-icons/fa";

// 2. Importamos la imagen de los ponentes
import speakersImage from "./assets/speakers.svg";

import BiosPonentes from "./components/BiosPonentes"; 
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="flyer-container">
      {/* --- TÍTULO PRINCIPAL --- */}
      <header className="flyer-header">
        <h1>INTELIGENCIA ARTIFICIAL</h1>
        <p className="subtitle">y financiación de las Empresas y Startups</p>
      </header>

      {/* --- DESCRIPCIÓN EXPERTOS --- */}
      <section className="intro-text">
        <p>
          Expertos en <span>IA</span>, transformación digital,
          <br /> emprendimiento, innovación y liderazgo
        </p>
      </section>

      {/* --- SECCIÓN DE PONENTES (CORREGIDA) --- */}
      <section className="speakers-section">
        {/* 1. El contenedor de la imagen */}
        <div className="all-speakers-photo-container">
          {/* 3. Usamos la variable importada */}
          <img src={speakersImage} alt="Ponentes del evento" />
        </div>
      </section>

      {/* --- TÍTULO DEL EVENTO --- */}
      <section className="event-title">
        {/* ... (el resto de tu código JSX va aquí, está perfecto) ... */}
        <h2>VIII Conferencia Internacional y Workshop</h2>
        <h2 className="text-highlight">
          EMPRENDIMIENTO, INNOVACIÓN Y LIDERAZGO
        </h2>
        <h3>Paneles casos de éxito empresarial</h3>
      </section>

      {/* --- DETALLES DEL EVENTO (2 COLUMNAS) --- */}
      <section className="details-section">
        <div className="details-grid">
          {/* --- Columna Izquierda --- */}
          <div className="details-left">
            <div className="detail-item mb50">
              <FaCalendarAlt className="detail-icon" />
              <div className="detail-text dfad">
                <p className="date-line">
                  <h1 className="text-highlight large-text">27</h1>
                  <div className="detail-date">
                    <h1>NOVIEMBRE</h1>
                    <h2>Jueves</h2>
                  </div>
                </p>
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
                  8:15 a.m. - 3:00 p.m. <br />
                  Conferencias y workshop
                </p>
              </div>
            </div>
          </div>

          {/* --- Columna Derecha --- */}
          <div className="details-right">
            <div className="detail-item">
              {/* Este no lleva ícono, como en la imagen */}
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

      {/* --- PIE DE PÁGINA Y CITA --- */}
      <footer className="flyer-footer">
        <p className="quote">
          "The best way to predict the future is to create it" - Peter Drucker
        </p>
      </footer>
    </div>
    <BiosPonentes />
    </>
    
  );
}

export default App;
