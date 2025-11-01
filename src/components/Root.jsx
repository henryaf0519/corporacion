import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Root() {
  return (
    <>
      <Header />
      {/* <main> es importante para la semántica 
          y para los estilos (si los necesitaras) */}
      <main>
        {/* Aquí es donde React Router renderizará
            nuestro App.jsx o FormularioInscripcion.jsx */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;