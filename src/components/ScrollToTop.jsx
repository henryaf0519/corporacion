// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" es más completo que "window.scrollTo"
    // ya que funciona en todos los navegadores para el elemento raíz.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' es mejor que 'smooth' para cambios de página
    });
  }, [pathname]); // Se dispara cada vez que la ruta (pathname) cambia

  return null; // Este componente no renderiza nada visual
}

export default ScrollToTop;