import React from "react";
import Counter from "./Counter";
import "../styles/stats.css";

const stats = [
  { value: 500, label: "Líderes empresariales", prefix: "+" },
  { value: 3, label: "Conferencistas internacionales" },
  { value: 7, label: "De contenido de alto impacto", suffix: "h" },
  { value: 9, label: "Edición del summit", roman: "IX" }, // El IX es especial
];

const Stats = () => {
  return (
    <div className="stats-strip">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-num">
            {stat.prefix}
            {stat.roman ? stat.roman : <Counter to={stat.value} />}
            {stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;