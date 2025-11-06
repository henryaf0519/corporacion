import React from 'react';

// Un componente reutilizable para mostrar la bio de cada ponente
function PonenteBio({ nombre, titulo, descripcion, imagen }) {
  console.log(imagen);
  return (
    <div className="ponente-bio">
      {/* Esta imagen usará 'float: left' desde el CSS 
        para que el texto fluya a su alrededor.
      */}
      <img 
        src={imagen} 
        alt={`Foto de ${nombre}`} 
        className="ponente-imagen" 
      />
      
      {/* El texto (h2, h3, p) fluirá automáticamente a la derecha de la imagen */}
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