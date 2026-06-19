import React, { useState } from 'react';
import '../styles/Faq.css'; // Asegúrate de tener los estilos para el FAQ en este archivo

const faqs = [
  {
    q: "¿El evento realmente es gratuito?",
    a: "Sí, 100% gratuito. No hay costo de inscripción ni pago en la puerta. Lo único que necesitas es registrarte con anticipación ya que los cupos son limitados."
  },
  {
    q: "¿Necesito experiencia previa en IA para asistir?",
    a: "Para nada. El summit está diseñado para líderes empresariales, emprendedores y profesionales de todos los niveles. Las sesiones se enfocan en aplicaciones prácticas para tu negocio, no en programación o aspectos técnicos complejos."
  },
  {
    q: "¿Habrá traducción para los conferencistas en inglés?",
    a: "Sí. El evento cuenta con traducción simultánea profesional para todas las presentaciones de conferencistas internacionales. Recibirás los audífonos al momento de tu registro en el evento."
  },
  {
    q: "¿Dónde queda el Forum de la UPB?",
    a: "La Universidad Pontificia Bolivariana está ubicada en la Circular 1 #70-01, Laureles, Medellín. El Forum es el auditorio principal del campus. Te enviaremos indicaciones detalladas en el correo de confirmación."
  },
  {
    q: "¿Puedo llevar a mi equipo de trabajo?",
    a: "¡Absolutamente! Cada persona debe registrarse individualmente para asegurar su cupo. Te recomendamos hacerlo pronto ya que el aforo es limitado."
  }
];

const Faq = () => {
  // Al iniciar en null, ninguna tarjeta tendrá la clase 'open'
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-main-title">PREGUNTAS FRECUENTES</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
              {item.q} 
              <span className="faq-arrow">{activeIndex === index ? '×' : '+'}</span>
            </button>
            <div className="faq-a">
              <div> {/* Contenedor necesario para la animación grid */}
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-ctas mt-4">
        <a href="#registro" className="btn-primary">Registrarme</a>
        
      </div>
    </section>
  );
};
export default Faq;