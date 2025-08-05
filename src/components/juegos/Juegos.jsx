import React from "react";
import "./Juegos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Juegos() {
  const abrirPage = useNavigate();

  return (
    <div className="juegos_content">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="juegos_content_card"
      >
        <img src="./img/juego.png" alt="juegos_cards" />
        <div className="juegos_content_cards_info">
          <h3>Proyecto Juegos</h3>
          <p>
            Creé juegos en mis inicios como desarrollador web, usando HTML, CSS,
            JS y React, para combatir el aburrimiento con ideas creativas y
            desafíos divertidos en tiempos libres.
          </p>{" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            onClick={() => abrirPage("/juegos")}
          >
            Ingresar
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="juegos_content_card"
      >
        <img src="./img/appWeb.png" alt="juegos_cards" />
        <div className="juegos_content_cards_info">
          <h3>Aplicaciones WEB </h3>
          <p>
            Desarrollé aplicaciones web con HTML, CSS, JS y React, herramientas
            intuitivas para simplificar tareas cotidianas y optimizar tiempo,
            aprendiendo en cada proyecto.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => abrirPage("/web")}
          >
            Ingresar
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="juegos_content_card"
      >
        <img src="./img/project.png" alt="" />
        <div className="juegos_content_cards_info">
          <h3>Proyectos varios</h3>
          <p>
            Desarrollé proyectos backend con Node.js y Java, creando APIs
            eficientes, integrando bases de datos y resolviendo desafíos de
            lógica para sistemas escalables y seguros.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => abrirPage("/varios")}
          >
            Ingresar
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Juegos;
