import React from 'react';
import PonenteBio from './PonenteBio'; // Importamos el sub-componente

// 1. Aquí están todos los datos de los ponentes actualizados
const ponentesData = [
  {
    nombre: 'Andrea Ridi',
    imagen: 'https://via.placeholder.com/150/B200A0/FFFFFF?Text=Andrea+Ridi', // Imagen añadida
    titulo: 'Expositor invitado al Congreso Global de IA realizado en Dubai. Es es miembro de un think tank de IA del MIT',
    descripcion: [
      'loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    nombre: 'Ester Pescio',
    imagen: 'https://via.placeholder.com/150/B200A0/FFFFFF?Text=Ester+Pescio', // Imagen añadida
    titulo: 'Professor of Practice, HIBS UG Boston',
    descripcion: [
      'loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    nombre: 'Jose Gonzales',
    imagen: 'https://via.placeholder.com/150/B200A0/FFFFFF?Text=Jose+Gonzales', // Imagen añadida
    titulo: 'Emprendimiento y Empresa: Resiliencia en la Travesía.',
    descripcion: [
      'loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    nombre: 'Mark Roth',
    imagen: 'https://via.placeholder.com/150/B200A0/FFFFFF?Text=Mark+Roth', // Imagen añadida
    titulo: 'Las mejores lecciones internacionales sobre negocios y startups.',
    descripcion: [
      'loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    nombre: 'Gregg Bauer',
    // NOTA: Esta es la imagen que subiste.
    // Coloca la imagen renombrada a 'gregg-bauer.png' en tu carpeta 'public/'
    imagen: '/gregg-bauer.png', // Imagen añadida
    titulo: 'Las mejores lecciones internacionales sobre negocios y startups.',
    descripcion: [
      'loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
];

// 2. Este es el componente que nos pediste
function BiosPonentes() {
  return (
    <section className="bios-container">
      {/* Ahora pasamos también la prop 'imagen' */}
      {ponentesData.map((ponente) => (
        <PonenteBio
          key={ponente.nombre}
          nombre={ponente.nombre}
          titulo={ponente.titulo}
          descripcion={ponente.descripcion}
          imagen={ponente.imagen} 
        />
      ))}
    </section>
  );
}

export default BiosPonentes;