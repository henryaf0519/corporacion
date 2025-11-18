import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sponsors from './Sponsors';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Root() {
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* <main> es importante para la semántica 
          y para los estilos (si los necesitaras) */}
      <main>
        {/* Aquí es donde React Router renderizará
            nuestro App.jsx o FormularioInscripcion.jsx */}
        <Outlet />
      </main>
      <Sponsors />
      <Footer />
    </>
  );
}

export default Root;