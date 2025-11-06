import React from 'react';

// (Tus importaciones de logos se quedan igual)
import imgComfama from '../assets/COMFAMA.webp';
import imgComfenalco from '../assets/COMFENALCO.webp';
import imgCorantioquia from '../assets/CORANTIOQUIA.webp';
import imgGobernacion from '../assets/GOBERNACIÓN DE ANTIOQUIA.webp';
import imgHidratao from '../assets/HIDRATAO.webp';
import imgIdea from '../assets/IDEA.webp';
import imgScaleUp from '../assets/SCALEUPLATAM.webp';

const logos = [
  { src: imgComfama, alt: 'Comfama' },
  { src: imgComfenalco, alt: 'Comfenalco Antioquia' },
  { src: imgCorantioquia, alt: 'Corantioquia' },
  { src: imgGobernacion, alt: 'Gobernación de Antioquia' },
  { src: imgHidratao, alt: 'Hidratao' },
  { src: imgIdea, alt: 'IDEA' },
  { src: imgScaleUp, alt: 'ScaleUp LatAm' },
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