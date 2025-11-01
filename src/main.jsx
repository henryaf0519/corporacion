import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'; // Estilos globales

// 1. Importamos los componentes de las páginas y el layout
import Root from './components/Root.jsx';
import App from './App.jsx';
import FormularioInscripcion from './components/FormularioInscripcion.jsx';
import FormularioInscripcionE from './components/FormularioInscripcionEmail.jsx';

// 2. Creamos el router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // El layout principal (Header/Footer)
    children: [
      {
        index: true, 
        element: <App />,
      },
      {
        path: '/inscripcion',
        element: <FormularioInscripcion />,
      },
      {
        path: '/inscripcionE',
        element: <FormularioInscripcionE />,
      },
    ],
  },
]);

// 3. Renderizamos la aplicación usando el RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);