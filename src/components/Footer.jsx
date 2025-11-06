import React from 'react';
import '../styles/Footer.css';

// 1. Importamos la imagen desde la carpeta de assets
import footerImage from '../assets/footer.svg';

function Footer() {
  return (
    <footer className="app-footer">
      {/* 2. Reemplazamos el párrafo por la etiqueta <img> */}
      <img 
        src={footerImage} 
        alt="Sponsors y aliados" 
        className="footer-image" 
      />
    </footer>
  );
}

export default Footer;