import React, { useRef, useEffect } from 'react'; // 1. Importamos hooks de React
import { animate, inView } from "motion";         // 2. Importamos 'animate' e 'inView' de motion

// Un componente reutilizable para mostrar la bio de cada ponente
function PonenteBio({ nombre, titulo, descripcion, imagen }) {
  
  // 3. Creamos una referencia para este componente
  const bioRef = useRef(null);

  // 4. Configuramos la animación
  useEffect(() => {
    const element = bioRef.current;

    // 5. Estado inicial (invisible y movido hacia abajo)
    element.style.opacity = 0;
    element.style.transform = "translateY(50px)";

    // 6. Usamos inView para vigilar ESTE elemento
    inView(element, () => {
      // 7. Cuando entre en pantalla, lo animamos
      animate(
        element,
        { opacity: 1, transform: "translateY(0)" },
        { duration: 0.8, ease: "easeOut" }
      );
    }, {
      // Opcional: que se dispare cuando un 25% del card sea visible
      amount: 0.25 
    });

  }, []); // Se ejecuta solo una vez

  return (
    // 8. Adjuntamos la referencia al div principal
    <div className="ponente-bio" ref={bioRef}>
      <img 
        src={imagen} 
        alt={`Foto de ${nombre}`} 
        className="ponente-imagen" 
      />
      
      <h2>{nombre}</h2>
      <h3>{titulo}</h3>
      
      {descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
    </div>
  );
}

export default PonenteBio;