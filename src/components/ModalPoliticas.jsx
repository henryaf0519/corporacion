import React, { useEffect } from 'react';
import '../styles/modalPoliticas.css';
import { FaTimes } from 'react-icons/fa';

function Modal({ isOpen, onClose, children }) {
  
  // Efecto para bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };  
  }, [isOpen]);

  // Si no está abierto, no renderiza nada
  if (!isOpen) {
    return null;
  }

  // Detiene la propagación del clic si se hace clic dentro del contenido
  // para evitar que se cierre el modal.
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // El overlay (fondo oscuro) que cierra el modal al hacer clic
    <div className="modal-overlay" onClick={onClose}>
      
      {/* El contenedor del contenido del modal */}
      <div className="modal-content" onClick={handleContentClick}>
        
        {/* Botón para cerrar */}
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        {/* El contenido que pasamos (en este caso, las políticas) */}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;