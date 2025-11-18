import React, { useState } from 'react'; // 1. Importar useState
import '../styles/Footer.css';
import Modal from './ModalPoliticas'

// (Tus importaciones de imágenes se quedan igual)
import footerImageDesktop from '../assets/footer.svg';
import imgScaleUp from '../assets/SCALEUPLATAM.webp';
import imgGobernacion from '../assets/GOBERNACIÓN DE ANTIOQUIA.webp';
import imgArgos from '../assets/argos.webp';

function Footer() {
  // 3. Añadir estado para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="app-footer">
        
        {/* (Imágenes de escritorio y móvil - sin cambios) 
        <img 
          src={footerImageDesktop} 
          alt="Sponsors y aliados" 
          className="footer-image-desktop" 
        />
        <div className="footer-logos-mobile">
          <img src={imgScaleUp} alt="ScaleUp LatAm" />
          <img src={imgGobernacion} alt="Gobernación de Antioquia" />
          <img src={imgArgos} alt="Comfenalco Antioquia" />
        </div>
        */}

        {/* 4. Contenedor para el botón de políticas */}
        <div className="footer-privacy-container">
          <button 
            className="privacy-button"
            onClick={() => setIsModalOpen(true)} // Abre el modal
          >
            Política de Tratamiento de Datos Personales
          </button>
        </div>

      </footer>

      {/* 5. Renderizar el Modal (fuera del footer) */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Política de Tratamiento de Datos Personales</h2>
        <p>
          Corporación Development Solutions (DSF), en cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, informa a todos los titulares de la información que los datos personales recolectados a través de este formulario de inscripción serán tratados conforme a las siguientes finalidades y condiciones:
        </p>

        <h3>1. Finalidades del tratamiento</h3>
        <p>Los datos personales serán utilizados exclusivamente para:</p>
        <ul>
          <li>Gestionar su registro e ingreso a la VIII Conferencia Internacional y Workshop “Emprendimiento, Innovación y Liderazgo”.</li>
          <li>Enviar confirmaciones, recordatorios y comunicaciones relacionadas con el evento.</li>
          <li>Remitir información institucional, académica o comercial sobre futuras actividades, conferencias o programas de la Corporación DSF relacionados con innovación, financiación y liderazgo empresarial.</li>
          <li>Cumplir con obligaciones legales y contractuales derivadas de la relación entre el titular y la entidad.</li>
        </ul>

        <h3>2. Derechos del titular</h3>
        <p>Como titular de los datos personales, usted tiene derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar su información.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Ser informado sobre el uso que se ha dado a sus datos.</li>
          <li>Revocar la autorización o solicitar la supresión de los datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
          <li>Acceder en forma gratuita a los datos personales que hayan sido objeto de tratamiento.</li>
        </ul>

        <h3>3. Canales de contacto</h3>
        <p>Para ejercer sus derechos o presentar consultas y reclamos, puede comunicarse al correo electrónico:
          <br />
          <a href="mailto:manager@corporaciondsf.com">📧 manager@corporaciondsf.com</a>
        </p>

        <h3>4. Autorización</h3>
        <p>
          Al diligenciar y enviar este formulario de inscripción, usted autoriza expresamente a la Corporación DSF para tratar sus datos personales conforme a las finalidades aquí descritas y acepta los términos de esta política.
        </p>

        <h3>5. Vigencia</h3>
        <p>
          La presente Política rige a partir de la fecha de su publicación y los datos recolectados se conservarán durante el tiempo necesario para cumplir con las finalidades del tratamiento o mientras el titular no solicite su supresión.
        </p>
      </Modal>
    </>
  );
}

export default Footer;