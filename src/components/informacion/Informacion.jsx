import React from "react";
import "./Informacion.css";
import { motion } from "framer-motion";

function Informacion() {
  return (
    <div className="informacion_contenedor">
      <img src="./img/youtube.jpg" alt="" />
      <div className="informacion_contenedor_caja">
        <h2>Proyectos Back-End</h2>
        <p>
          Los proyectos Back-End para juniors suelen ser de uso personal o
          local, ya que desplegarlos en producción implica costos (hosting y
          bases de datos). Para solucionarlo, muestro mis desarrollos en
          YouTube: carritos de compra con autenticación, agendas interactivas,
          sistemas de citas con APIs, proyectos académicos full-stack y CRUDs
          completos (como gestión de libros/autores), demostrando habilidades
          técnicas en entornos reales.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.youtube.com/@eosorto55/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="informacion_contenedor_caja_boton"
        >
          Ir a canal
        </motion.a>
      </div>
    </div>
  );
}

export default Informacion;
