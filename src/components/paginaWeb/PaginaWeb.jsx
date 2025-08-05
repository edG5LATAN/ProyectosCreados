import { motion } from "framer-motion";
import "./PaginaWeb.css";
import SaltoLinea from "../saltoLinea/SaltoLinea";
import { listaWeb } from "../../service/Servicios";
import SliderComp from "../sliderComp/SliderComp";

function PaginaWeb() {
  return (
    <div className="paginaWeb_contenedor">
      <SaltoLinea />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="paginaWeb_contenedor1"
      >
        <h2>Aplicaciones Web</h2>
        <p>
          Aplicaciones web creadas full-stack con React, HTML, CSS y JavaScript,
          combinando potencia frontend con lógica backend para crear
          aplicaciones web mas robustas. Cada proyecto pensado para sierta
          necesidade específica en el dia a dia laboral priorizando usabilidad y
          código modular. Esto incluye desde PWAs hasta CRUDs complejos,
          implementando APIs REST, autenticación y bases de datos. utilizando
          todas la informacion aprendida en cada uno de los talleres que emos
          tomado y asi creciendo dia a dia como un desarrollador full stack.
        </p>
      </motion.div>
      <SaltoLinea />
      <SliderComp lista={listaWeb} title="proyecto web" />
    </div>
  );
}

export default PaginaWeb;
