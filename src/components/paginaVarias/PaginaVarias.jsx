import { motion } from "framer-motion";
import SaltoLinea from "../saltoLinea/SaltoLinea";
import "./PaginaVarias.css";
// import ModoPhone from '../modoPhone/ModoPhone'
import { listVarias } from "../../service/Servicios";
import SliderComp from "../sliderComp/SliderComp";

function PaginaVarias() {
  return (
    <div className="paginaVarias_contenedor">
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
        className="paginaVarias_contenedor1"
      >
        <h2>Proyectos Varios</h2>
        <p>
          Proyectos Full stack varios que e desarrollado con el tiempo de
          aprendizaje que no podian caber dentro de mi portafolio personal por
          ser proyectos que fueron desarrollados en mis inicio de programacion
          donde tengo tanto proyectos simples como proyectos que an avanzado con
          el pasar del tiempo y el aprendizaje hasta implementacion de sguridad
          con JWT Y BCrypt, autenticacion de roles por usuario y en frontend uso
          de Bootstrap typescrypt y de talilwid, aca te dejo sus videos como sus despliegues.
        </p>
      </motion.div>
      <SaltoLinea />
     
      <div>
        <SliderComp lista={listVarias} title="Proyectos Varios"  />
      </div>
    </div>
  );
}

export default PaginaVarias;
