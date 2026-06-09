import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Aplicamos la clase scrolled para cambiar el fondo si lo deseas
    <nav className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        DSF <span>Corp</span>
      </Link>
      
      {/* Usamos un anchor para ir a la sección de registro en la página */}
      <a href="#registro" className="nav-cta">
        Registrarme ahora →
      </a>
    </nav>
  );
}

export default Header;