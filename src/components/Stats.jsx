import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import "../styles/stats.css";

const stats = [
  { value: 500, label: "Líderes empresariales", prefix: "+" },
  { value: 3, label: "Conferencistas internacionales" },
  { value: 7, label: "De contenido de alto impacto", suffix: "h" },
  { value: 9, label: "Edición del summit", roman: "IX" },
];

const Stats = () => {
  const [shouldRun, setShouldRun] = useState(false);
  const [key, setKey] = useState(0); // Usado para forzar el re-render del Counter
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRun(true);
        }
      },
      { threshold: 0.5 } // Se dispara cuando el 50% del contenedor es visible
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Lógica para repetir cada 10 segundos
  useEffect(() => {
    if (!shouldRun) return;

    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // Al cambiar la key, el componente Counter se reinicia
    }, 10000);

    return () => clearInterval(interval);
  }, [shouldRun]);

  return (
    <div className="stats-strip" ref={statsRef}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-num">
            {stat.prefix}
            {stat.roman ? (
              stat.roman
            ) : (
              // Pasamos la key para forzar reinicio y una duration mayor para lentitud
              <Counter 
                key={`${index}-${key}`} 
                to={stat.value} 
                duration={4} // Aumenta este valor para mayor lentitud (segundos)
              />
            )}
            {stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;