import React from "react";
import "../styles/speakers.css";

const speakers = [
  {
    initials: "PR",
    country: "🇺🇸",
    name: "Paul Rios",
    role: "Revenue Leader · Venture Partner",
    bio: "Director de Experimentación de Ingresos en Telescoped y Venture Partner en Add Ventures Capital. Lideró la expansión de HubSpot en América Latina por más de una década...",
    tags: ["Ventas B2B", "Go-to-Market", "LatAm", "HubSpot"]
  },
  {
    initials: "GB",
    country: "🇺🇸",
    name: "Gregg Bauer",
    role: "CEO · Accelerate Colombia",
    bio: "VP en Pinnaker, Boston. Cofundador y CEO de Accelerate Colombia, parte de ScaleUp LatAm. Lidera el Fondo de Inversión ScaleUp LatAm para empresas que expanden internacionalmente...",
    tags: ["Startups", "Aceleración", "Inversión VC", "ScaleUp"]
  },
  {
    initials: "MR",
    country: "🌎",
    name: "Mark Roth",
    role: "Speaker Internacional · Próximamente",
    bio: "Conferencista internacional de alto impacto. Más detalles sobre su perfil y temática serán revelados próximamente.",
    tags: ["Innovación", "Liderazgo", "Negocios"]
  }
];

const Speakers = () => {
  return (
    <section id="conferencistas" className="speakers-section">
      <div className="section-label">Conferencistas</div>
      <h2 className="section-title">
        Aprende de quienes<br /><span>ya lo hicieron</span>
      </h2>
      
      <div className="speakers-grid">
        {speakers.map((s, i) => (
          <div key={i} className="speaker-card">
            <div className="speaker-head">
              <div className="speaker-avatar">{s.initials}</div>
              <div className="speaker-country">{s.country}</div>
            </div>
            <div className="speaker-body">
              <h3>{s.name}</h3>
              <div className="speaker-role">{s.role}</div>
              <p>{s.bio}</p>
              <div className="speaker-tags">
                {s.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;