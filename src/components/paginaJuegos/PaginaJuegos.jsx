import React from "react";
import "./PaginaJuegos.css";
import SaltoLinea from "../saltoLinea/SaltoLinea";
import { motion } from "framer-motion"; 
import { listaJuegos } from "../../service/Servicios";
import SliderComp from "../sliderComp/SliderComp";


function PaginaJuegos() {
  return (
    <div
     className="paginaJuegos_contenedor">
      <SaltoLinea />
      <motion.div
      initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }} className="paginaJuegos_contenedor1">
        <h2>Proyectos de Juegos</h2>
        <p>
          Aca te muertos varios de mis sitios web dedicados a entretenimiento creados con
          tecnologías web como React, HTML, CSS y JavaScript, todos diseñados
          para ofrecer diversion y entretenimiento. Estos espacios destacan
          desde juegos dinámicos hasta aplicaciones creativas, utilizando el
          desarrollo frontend y backend para su creacion. Aquí te presentamos un
          resumen visual con los proyectos más destacados: interfaces, mecánicas
          de juego y diseños, perfectos para inspirarte o simplemente disfrutar
          de horas de diversión.
        </p>
      </motion.div>
      <SaltoLinea />
      <SliderComp lista={listaJuegos} title="proyectos Juegos" />
    </div>
  );
}

export default PaginaJuegos;
