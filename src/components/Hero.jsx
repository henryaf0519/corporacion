import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const particlesRef = useRef(null);

  // Lógica para generar las partículas igual que en tu código original
  useEffect(() => {
    const c = particlesRef.current;
    if (!c) return;
    const colors = ["rgba(193,112,255,0.6)", "rgba(24,51,138,0.8)", "rgba(255,255,255,0.4)"];
    
    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 4 + 1;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration:${8 + Math.random() * 15}s;
        animation-delay:${Math.random() * 15}s;
      `;
      c.appendChild(p);
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>
      <div className="particles" ref={particlesRef}></div>

      <div className="badge">
        <span className="badge-dot"></span>
        DSF Corporation Presenta · 21 de Julio, 2025
      </div>

      <h1 className="hero-title">
        <span className="gradient-text">AI Business</span><br />
        Summit
      </h1>

      <p className="hero-sub">
        IX Conferencia Internacional de Emprendimiento, Innovación y Liderazgo.<br />
        Las empresas que liderarán el futuro serán las que mejor implementen Inteligencia Artificial.
      </p>

      <div className="hero-meta">
        <div className="meta-item">
          <div className="meta-icon">📅</div>
          <span>Martes <strong>21 de Julio</strong> · 8:00 a.m.</span>
        </div>
        <div className="meta-item">
          <div className="meta-icon">📍</div>
          <span>Forum · <strong>UPB</strong>, Medellín</span>
        </div>
        <div className="meta-item">
          <div className="meta-icon">🎟️</div>
          <span><strong>Entrada Gratuita</strong> con inscripción</span>
        </div>
      </div>

      <div className="hero-ctas">
        <a href="#registro" className="btn-primary">Quiero mi cupo gratis</a>
        <a href="#conferencistas" className="btn-secondary">Ver conferencistas</a>
      </div>
      
      {/* El componente Countdown iría aquí si lo tienes separado */}
    </section>
  );
};

export default Hero;