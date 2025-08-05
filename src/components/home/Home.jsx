import React from "react";
import "./Home.css";
import Juegos from "../juegos/Juegos";
import SaltoLinea from "../saltoLinea/SaltoLinea";
import Informacion from "../informacion/Informacion";
import Informacion1 from "../informacion1/Informacion1";


function Home() {
  return (
    <div className="home_content">
      <SaltoLinea />
      <Juegos />
      <SaltoLinea />
      <Informacion />
      <Informacion1 />
      <SaltoLinea />
    </div>
  );
}

export default Home;
