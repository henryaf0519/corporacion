import React, { useState, useEffect } from 'react';
import '../styles/Header.css'
import logo from '../assets/logo.webp';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor que 10px, activamos el estado
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 2. Añadimos el 'listener'
    window.addEventListener('scroll', handleScroll);

    // 3. Limpiamos el 'listener' cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    // 4. Aplicamos la clase 'scrolled' condicionalmente
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <img src={logo} alt="Corporación DSF Logo" />
      </div>

      <div className="header-quote">
        <p>"The best way to predict the future is to <b>create it</b>."</p>
        <span>Peter Drucker</span>
      </div>
    </header>
  );
}

export default Header;