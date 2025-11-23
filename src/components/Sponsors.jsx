import React from 'react';

import imgArgos from '../assets/argos.webp';
import imgCorantioquia from '../assets/CORANTIOQUIA.webp';
import imgGobernacion from '../assets/GOBERNACIÓN DE ANTIOQUIA.webp';
import imgHidratao from '../assets/HIDRATAO.webp';
import imgIdea from '../assets/IDEA.webp';
import imgScaleUp from '../assets/SCALEUPLATAM.webp';
import imgPostobon from '../assets/postobon.png';
import imgHuit from '../assets/huit.png';
import imgLoteria from '../assets/loteria.png';
import imgDigital from '../assets/digital.png';
import imgConfama from '../assets/COMFAMA.webp'

const logos = [
  
  { src: imgCorantioquia, alt: 'Corantioquia' },
  { src: imgGobernacion, alt: 'Gobernación de Antioquia' },
  { src: imgConfama, alt: 'Comfama' },
  { src: imgArgos, alt: 'Argos' },
  { src: imgPostobon, alt: 'Postobon' },
  { src: imgHidratao, alt: 'Hidratao' },
  { src: imgLoteria, alt: 'Lotería de Medellín' },
  { src: imgIdea, alt: 'IDEA' },
  { src: imgScaleUp, alt: 'ScaleUp LatAm' },
  { src: imgHuit, alt: 'Huit' },
  { src: imgDigital, alt: 'Digital' },
];

const allLogos = [...logos, ...logos];

function Sponsors() {
  return (
    // La clase principal ahora tiene el fondo negro
    <section className="sponsors-section">
      <h2 className="sponsors-title">Patrocinadores y Aliados</h2>
      
      {/* 1. LÍNEA DE GRADIENTE SUPERIOR */}
      <div className="gradient-line" />
      
      <div className="sponsors-slider">
        <div className="sponsors-track">
          {allLogos.map((logo, index) => (
            <div className="sponsor-slide" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
      
      {/* 2. LÍNEA DE GRADIENTE INFERIOR */}
      <div className="gradient-line" />

    </section>
  );
}

export default Sponsors;