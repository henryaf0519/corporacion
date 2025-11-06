import React from 'react';
import '../styles/Footer.css';

// 1. Importamos la imagen principal de escritorio
import footerImageDesktop from '../assets/footer.svg';

// 2. Importamos los logos para la vista móvil
import imgScaleUp from '../assets/SCALEUPLATAM.webp';
import imgGobernacion from '../assets/GOBERNACIÓN DE ANTIOQUIA.webp';
import imgComfenalco from '../assets/COMFENALCO.webp';

function Footer() {
  return (
    <footer className="app-footer">
      
      {/* 3. IMAGEN PARA ESCRITORIO */}
      {/* Esta imagen se ocultará en móvil */}
      <img 
        src={footerImageDesktop} 
        alt="Sponsors y aliados" 
        className="footer-image-desktop" 
      />

      {/* 4. LOGOS PARA MÓVIL */}
      {/* Este div solo será visible en móvil */}
      <div className="footer-logos-mobile">
        <img src={imgScaleUp} alt="ScaleUp LatAm" />
        <img src={imgGobernacion} alt="Gobernación de Antioquia" />
        <img src={imgComfenalco} alt="Comfenalco Antioquia" />
      </div>

    </footer>
  );
}

export default Footer;