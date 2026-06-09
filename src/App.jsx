import React, { useEffect, useRef } from "react";
import "./App.css"; // (No olvides que este archivo existe)
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaLanguage,
} from "react-icons/fa";
import { animate } from "motion";

// 1. Importamos Link
import { Link } from "react-router-dom";

import speakersImage from "./assets/speakers.webp";
import BiosPonentes from "./components/BiosPonentes";
import Sponsors from "./components/Sponsors";
import Particles from "./components/particles";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Highlights from "./components/Highlights";
import FormularioInscripcion from "./components/FormularioInscripcion";
import Faq from "./components/Faq";

function App() {
  const speakersRef = useRef(null);

  useEffect(() => {
    if (speakersRef.current) {
      animate(
        speakersRef.current,
        { y: [0, -12, 0] },
        {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }
      );
    }
  }, []);

  return (
    <>
      <div className="flyer-container">
        <Particles />
        <Hero />
        <Stats />
        <Why />
        <Agenda />
        <Speakers />
        <Sponsors />
        <Highlights />
        <FormularioInscripcion />
        <Faq />
      </div>
    </>
  );
}

export default App;
