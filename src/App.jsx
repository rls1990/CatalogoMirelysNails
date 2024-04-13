import { BrowserRouter, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Contactos from "./pages/contactos/Contactos";
import Equipo from "./pages/equipo/Equipo";
import Galeria from "./pages/galeria/Galeria";
import Home from "./pages/home/Home";
import Miembro from "./pages/miembro/Miembro";
import Precios from "./pages/precios/Precios";
import Preguntas from "./pages/preguntas/Preguntas";
import Servicios from "./pages/servicios/Servicios";
import Testimonios from "./pages/testimonios/Testimonios";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contactos" Component={Contactos} />
          <Route path="/equipo" Component={Equipo} />
          <Route path="/galeria" Component={Galeria} />
          <Route path="/miembro/:id" Component={Miembro} />
          <Route path="/precios" Component={Precios} />
          <Route path="/preguntas" Component={Preguntas} />
          <Route path="/servicios" Component={Servicios} />
          <Route path="/testimonios" Component={Testimonios} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
