import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const abrirPage = useNavigate();

  return (
    <div className="header_content">
      <nav>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          onClick={() => abrirPage("/")}
          src="./img/logo.png"
          alt="imagen de logo"
        />
        <ul>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => abrirPage("/")}
          >
            inicio
          </motion.li>
          <motion.li
            onClick={() => abrirPage("/acercaDe")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            Acerca de
          </motion.li>
          <motion.li
            onClick={() => abrirPage("/contacto")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            contáctanos
          </motion.li>
        </ul>
      </nav>
      <div className="header_content_hero">
        <div className="header_content_hero1">
          <h3>Varios proyectos creados</h3>
          <p>
            Proyectos full-stack desarrollados con múltiples lenguajes y
            tecnologías, donde implementamos las herramientas aprendidas en cada
            taller para fortalecer nuestras habilidades como desarrolladores
            full-stack.
          </p>
        </div>
        <div className="header_content_hero2">
          <img src="./img/proyectovarios.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
