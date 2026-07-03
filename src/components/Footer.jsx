import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleMailClick = (e) => {
    // Evita cualquier comportamiento extraño del router o de elementos padres
    e.preventDefault();
    window.location.href = "mailto:manager@corporaciondsf.com";
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">DSF <span>Corporation</span></div>
          <p>
            Impulsando el crecimiento empresarial en América Latina a través de la innovación, el emprendimiento y la inteligencia artificial.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h5>Evento</h5>
            <a href="#porque">¿Por qué asistir?</a>
            <a href="#agenda">Agenda</a>
            <a href="#conferencistas">Conferencistas</a>
            <a href="#registro">Registro</a>
          </div>

          <div className="footer-col">
            <h5>Contacto</h5>
            <a href="mailto:manager@corporaciondsf.com" onClick={handleMailClick}>
              manager@corporaciondsf.com
            </a>
            <span>Medellín, Colombia</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} DSF Corporation. Todos los derechos reservados.</span>
        <span>AI Business Summit · IX Edición</span>
      </div>
    </footer>
  );
};

export default Footer;