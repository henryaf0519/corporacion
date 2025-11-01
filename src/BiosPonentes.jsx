import React from 'react';
import PonenteBio from './PonenteBio'; // Importamos el sub-componente

// 1. Aquí están todos los datos de los ponentes que me pasaste
const ponentesData = [
  {
    nombre: 'Andrea Ridi',
    titulo: 'Expositor invitado al Congreso Global de IA realizado en Dubai. Es es miembro de un think tank de IA del MIT',
    descripcion: [
      'Andrea es un líder de pensamiento en inteligencia artificial, emprendedor y educador con una profunda pasión por la innovación, el emprendimiento global y el poder transformador de la inteligencia artificial.',
      'Como fundador y socio de ScaleUp Labs, un estudio de venture aplicado en IA y aceleradora internacional, Andrea está dedicado a fomentar startups de IA centradas en el mercado que combinan tecnología de vanguardia con soluciones escalables y de gran impacto. Su trabajo se enfoca en el potencial de los sistemas de IA descentralizados, con el objetivo de democratizar el acceso a tecnología avanzada mientras aborda desafíos críticos en escalabilidad, privacidad y eficiencia energética. Además de sus iniciativas emprendedoras, Andrea se desempeña como profesor en la Hult International Business School, donde imparte su experiencia en innovación, estrategia y liderazgo empresarial global, formando a la próxima generación de emprendedores y líderes empresariales impulsados por la IA.',
    ],
  },
  {
    nombre: 'Ester Pescio',
    titulo: 'Professor of Practice, HIBS UG Boston',
    descripcion: [
      'Ester aporta más de 20 años de experiencia como cofundadora y ejecutiva en startups de alta tecnología, especializándose en transformación operativa, compromiso con las partes interesadas, ejecución estratégica de proyectos y optimización de flujos de trabajo. Su experiencia incluye el despliegue global de sistemas de IA, el fomento de personas y cultura para la innovación disruptiva, y la conducción de estrategias de negocios internacionales.',
      'Con una sólida base académica, Ester posee una Maestría en Ciencias en Física y un Executive MBA en Liderazgo Empresarial Internacional, combinando el rigor científico con el liderazgo estratégico.',
      'En la Hult International Business School de Boston, enseña emprendimiento, finanzas y gestión de proyectos, fusionando la excelencia académica con conocimientos prácticos del mundo real.',
      'Más allá de la enseñanza, Ester es una mentora apasionada para startups a través del MIT Venture Mentoring Service (VMS) y UMass Lowell, donde fomenta la innovación y guía a los emprendedores emergentes hacia el éxito.',
    ],
  },
  {
    nombre: 'Jose Gonzales',
    titulo: 'Emprendimiento y Empresa: Resiliencia en la Travesía.',
    descripcion: [
      'Managing Partner de GCG Advisors, firma de banca de inversión en New York, Caracas, Lima y Panamá. Graduado en Ciencias de la Comunicación, con un máster en International Affairs de Columbia University y estudios de Doctorado en Sociología en UC Berkeley.',
      'Con casi 30 años de experiencia en finanzas corporativas en mercados globales, ha liderado transacciones en diversos sectores, desde financiamientos de 3 millones de dólares, hasta de 7500.',
    ],
  },
  {
    nombre: 'Mark Roth',
    titulo: 'Las mejores lecciones internacionales sobre negocios y startups.',
    descripcion: [
      'Mark es cofundador y Gerente de Spinnaker Venture Partners, emprendedor con más de 20 años de experiencia como fundador de empresas, brindando liderazgo en el desarrollo de nuevos productos, gestión de la innovación y creación de empresas.',
      'Mark ha ocupado cargos directivos de investigación y desarrollo en Rockwell International, Honeywell, y Engelhard Minerals and Chemicals y ha brindado consultoría de gestión sobre temas de desarrollo empresarial y empresarial a empresas de tecnología emergente. A nivel internacional, ha dirigido el establecimiento de operaciones de I + D en Europa del Este y Rusia, así como la coordinación de operaciones de desarrollo distribuidas a nivel mundial en tres continentes. Mark se ha desempeñado como miembro de la junta directiva y director de numerosos consorcios de la industria de fabricación y tecnología, incluido el Centro Nacional de Ciencias de la Fabricación, el Microelectronics Computer Consortium, el Software Engineering Institute y el Software Productivity Consortium. Es licenciado en Ingeniería Química por el Instituto de Tecnología Stevens y tiene relaciones con la Escuela de Negocios Tuck y la Universidad Técnica Checa.',
    ],
  },
  {
    nombre: 'Gregg Bauer',
    titulo: 'Las mejores lecciones internacionales sobre negocios y startups.',
    descripcion: [
      'Experimentado empresario e inversor en startups, es socio y gerente de Spinnaker V.P. en Boston, MA, firma comprometida con el desarrollo de emprendimientos exitosos. Además es cofundador y CEO de Accelerate Colombia, que forma parte de ScaleUp LatAm, la cual opera programas de aceleración en Latinoamérica para ayudar a las empresas emergentes a escalar internacionalmente.',
      'Lidera el Fondo de Inversión ScaleUp LatAm, proporcionando capital de riesgo a empresas de LatAm que expanden con éxito sus negocios a nivel internacional. Con más de una década de experiencia, es cofundador de Accelerate Italy y Mentor Senior del Hult Prize en Nueva York y Londres.',
    ],
  },
];

// 2. Este es el componente que nos pediste
function BiosPonentes() {
  return (
    <section className="bios-container">
      {ponentesData.map((ponente) => (
        <PonenteBio
          key={ponente.nombre}
          nombre={ponente.nombre}
          titulo={ponente.titulo}
          descripcion={ponente.descripcion}
        />
      ))}
    </section>
  );
}

export default BiosPonentes;