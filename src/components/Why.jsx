import React from 'react';
import '../styles/why.css';

const reasons = [
  { icon: '🧠', title: 'Aprende de los mejores', text: 'Conferencistas internacionales que han escalado empresas desde cero hasta valuaciones de millones usando IA como palanca de crecimiento.' },
  { icon: '🚀', title: 'Estrategias accionables desde hoy', text: 'Nada de teoría vacía. Cada sesión está diseñada para que salgas con herramientas concretas que puedes aplicar en tu empresa al día siguiente.' },
  { icon: '🌎', title: 'Networking de alto nivel', text: 'Conecta con los emprendedores, inversionistas y líderes que están construyendo el ecosistema empresarial latinoamericano del futuro.' },
  { icon: '🔬', title: 'Workshop especializado', text: 'Una sesión práctica e intensiva donde vas a trabajar casos reales de implementación de IA en modelos de negocio como el tuyo.' },
  { icon: '🗣️', title: 'Traducción simultánea', text: 'Ninguna barrera idiomática. Vive la experiencia de una conferencia de clase mundial completamente en tu idioma.' },
  { icon: '🎟️', title: '100% gratuito', text: 'Un evento de esta escala, completamente gratis para ti. Solo necesitas registrarte y llegar. El conocimiento no tiene precio, pero el cupo sí es limitado.' },
];

const WhyAsistir = () => {
  return (
    <section id="porque">
      <div className="section-label">¿Por qué asistir?</div>
      <h2 className="section-title">
        El futuro no espera.<br />
        <span>La IA llegó para quedarse.</span>
      </h2>
      
      <div className="why-grid">
        {reasons.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3 className="why-card-title">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAsistir;