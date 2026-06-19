import React from "react";
import "../styles/agenda.css";

const agendaItems = [
  { time: "8:00 AM", title: "Registro y bienvenida", desc: "Acreditación, café de networking y apertura oficial por DSF Corporation" },
  { time: "9:00 AM", title: "Conferencia magistral: IA y Go-to-Market", desc: "Paul Rios — Cómo usar inteligencia artificial para escalar ventas B2B en América Latina" },
  { time: "10:30 AM", title: "Startups + IA: De la idea a la escala global", desc: "Gregg Bauer — Lecciones internacionales para construir y acelerar startups con inteligencia artificial" },
  { time: "12:00 PM", title: "Almuerzo & Networking", desc: "Espacio para conectar con líderes empresariales, inversionistas y emprendedores" },
  { time: "1:00 PM", title: "Workshop: Implementa IA en tu empresa hoy", desc: "Sesión práctica e intensiva con casos reales y metodologías accionables" },
  { time: "2:30 PM", title: "Panel: El liderazgo en la era de la IA", desc: "Mesa de expertos sobre el futuro del liderazgo empresarial y la nueva economía" },
  { time: "3:00 PM", title: "Cierre y sesión de fotos", desc: "Palabras de cierre y oportunidad final de networking con los conferencistas" },
];

const Agenda = () => {
  return (
    <section id="agenda" className="agenda">
      <div style={{ textAlign: "center" }}>
        <div className="section-label">Programa del día</div>
        <h2 className="section-title">
          7 horas que pueden<br /><span>transformar tu negocio</span>
        </h2>
      </div>
      <div className="hero-ctas">
        <a href="#registro" className="btn-primary">Registrarme</a>
        
      </div>

      {/*<div className="agenda-list">
        {agendaItems.map((item, index) => (
          <div key={index} className="agenda-item">
            <div className="agenda-time">{item.time}</div>
            <div className="agenda-dot"></div>
            <div className="agenda-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Agenda;