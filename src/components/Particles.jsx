import React, { useEffect, useRef } from "react";
import "../styles/particles.css";

const Particles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
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
      container.appendChild(p);
    }
  }, []);

  return <div ref={containerRef} className="particles-container" />;
};

export default Particles;