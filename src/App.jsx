import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import PaginaJuegos from './components/paginaJuegos/PaginaJuegos'
import PaginaVarias from './components/paginaVarias/PaginaVarias';
import PaginaWeb from './components/paginaWeb/PaginaWeb'
import Contacto from "./components/contacto/Contacto";
import AcercaDe from "./components/acercaDe/AcercaDe";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juegos" element={<PaginaJuegos />} />
          <Route path="/varios" element={<PaginaVarias />} />
          <Route path="/web" element={<PaginaWeb />} />
          <Route path="/acercaDe" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
