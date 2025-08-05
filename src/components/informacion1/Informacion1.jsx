import React from "react";
import "./Informacion1.css";
import { motion } from "framer-motion";

function Informacion1() {
  return (
    <div className="informacion1_contenedor">
      <img src="./img/linkedin.jpg" alt="" />
      <div className="informacion1_contenedor_caja">
        <h2>Perfil Linkedin</h2>
        <p>
          Si quieren conocer más sobre mi experiencia y proyectos técnicos, los
          invito a visitar mi perfil de LinkedIn. Allí podrán ver mi
          trayectoria, habilidades como desarrollador full-stack y ejemplos de
          mis trabajos: aplicaciones web con bases de datos, APIs RESTful,
          sistemas de autenticación y proyectos escolares implementados con
          diversas tecnologías. También comparto capturas, enlaces a
          repositorios y detalles técnicos para demostrar mi enfoque práctico.
          ¡Conéctense y hablemos de desarrollo!
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/edwin-castro-13a763272/"
          target="_blank"
          rel="noopener noreferrer"
          className="informacion1_contenedor_caja_boton"
        >
          Ir a perfil
        </motion.a>
      </div>
    </div>
  );
}

export default Informacion1;
