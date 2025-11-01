import React from 'react';

// Recibe 3 props:
// - isOpen: (true/false) para mostrarlo u ocultarlo
// - onClose: la función que se ejecuta al cerrar
// - children: el contenido que queremos mostrar adentro (títulos, párrafos, etc.)
function Modal({ isOpen, onClose, children }) {
  
  // Si no está abierto (isOpen=false), no renderiza nada
  if (!isOpen) {
    return null;
  }

  return (
    // 1. El fondo oscuro
    <div className="modal-overlay" onClick={onClose}>
      
      {/* 2. El contenedor del modal (blanco) */}
      {/* Detenemos la propagación para que al hacer clic en el modal no se cierre */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* 3. El botón de cerrar (la "X") */}
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        
        {/* 4. El contenido que le pasemos (título, párrafo) */}
        {children}
      </div>
    </div>
  );
}

export default Modal;