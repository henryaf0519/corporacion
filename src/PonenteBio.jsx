import React from 'react';

// Un componente reutilizable para mostrar la bio de cada ponente
function PonenteBio({ nombre, titulo, descripcion }) {
  return (
    <div className="ponente-bio">
      <h2>{nombre}</h2>
      <h3>{titulo}</h3>
      {/* Mapeamos cada párrafo de la descripción */}
      {descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
    </div>
  );
}

export default PonenteBio;