import React from "react";
import "../styles/highlights.css";

const highlights = [
  { 
    id: "1", 
    title: "Red de contactos que vale oro", 
    text: "Más de 500 líderes empresariales en un mismo espacio. Las conexiones que hagas aquí pueden ser las que transformen tu empresa en los próximos años. El networking no es opcional, es el evento.", 
    isBig: true 
  },
  { 
    id: "2", 
    title: "Visión global con enfoque local", 
    text: "Speakers que han trabajado en los mercados más competitivos del mundo traen ese conocimiento directamente a Medellín.", 
    isBig: false 
  },
  { 
    id: "3", 
    title: "Certificado de participación", 
    text: "Acredita tu formación y diferénciate en un mercado donde la IA ya no es el futuro, es el presente.", 
    isBig: false 
  },
];

const Highlights = () => {
  return (
    <section className="highlights-section"> {/* Añadí una clase para estilos generales de la sección */}
      <div className="highlights-grid">
        {highlights.map((h) => (
          <div key={h.id} className={`hl-card ${h.isBig ? "hl-big" : "hl-small"}`}>
            <div className="hl-bg-num">{h.id}</div>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
        <div className="clear-fix"></div> {/* Para asegurar un buen espaciado en algunas situaciones */}
      </div>
    </section>
  );
};

export default Highlights;