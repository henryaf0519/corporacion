import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} Corporación DSF. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;