import React from "react";
import "../styles/speakers.css";
import paulImg from "../assets/paul.webp";
import greggImg from "../assets/gregg.webp";
import markImg from "../assets/mark.jpg";
import melissaImg from "../assets/melissa.webp";

const speakers = [
  {
    initials: "PR",
    country: "🇺🇸",
    name: "Paul Rios",
    img: paulImg,
    role: "Revenue Leader · Venture Partner",
    bio: "Director de Experimentación de Ingresos en Telescoped y Venture Partner en Add Ventures Capital. Lideró la expansión de HubSpot en América Latina por más de una década...",
    tags: ["Ventas B2B", "Go-to-Market", "LatAm", "HubSpot"]
  },
  {
    initials: "GB",
    country: "🇺🇸",
    img: greggImg,
    name: "Gregg Bauer",
    role: "CEO · Accelerate Colombia",
    bio: "VP en Pinnaker, Boston. Cofundador y CEO de Accelerate Colombia, parte de ScaleUp LatAm. Lidera el Fondo de Inversión ScaleUp LatAm para empresas que expanden internacionalmente...",
    tags: ["Startups", "Aceleración", "Inversión VC", "ScaleUp"]
  },
  {
    initials: "MR",
    country: "us",
    img: markImg,
    name: "Mark Roth",
    role: "Speaker Internacional · Próximamente",
    bio: "Conferencista internacional de alto impacto. Más detalles sobre su perfil y temática serán revelados próximamente.",
    tags: ["Innovación", "Liderazgo", "Negocios"]
  },
  {
    initials: "MP",
    country: "us",
    img: melissaImg,
    name: "Melissa Pegus",
    role: "Investor · Partner at UpVentures Capital",
    bio: "Inversionista y operadora de startups con más de una década liderando crecimiento, partnerships y estrategia go-to-market. Ha apoyado a más de 80 startups con capital, fundraising y expansión en industrias como tecnología, salud y comercio.",
    tags: ["Go-to-Market", "Fundraising ", "Startups"]
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
              {/* Imagen que ocupa todo el contenedor */}
              {s.img ? (
                <img src={s.img} alt={s.name} className="speaker-cover-img" />
              ) : (
                /* Fallback por si no hay imagen válida (como el caso de Melissa que dice "webp") */
                <div className="speaker-avatar-fallback">{s.initials}</div>
              )}

              {/* El emoji del país se mantiene encima de la imagen */}
              
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