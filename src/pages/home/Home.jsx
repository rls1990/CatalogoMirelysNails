import CarruselTop from "./CarruselTop";
import Elijanos from "./Elijanos";
import ServiciosRes from "./ServiciosRes";
import EquipoRes from "./EquipoRes";
import TestimoniosRes from "./TestimoniosRes";
import PreciosRes from "./PreciosRes";
import Contactenos from "./Contactenos";
import ContactoRes from "./ContactoRes";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CarruselTop />
      <Elijanos />
      <ServiciosRes />
      <EquipoRes />
      <TestimoniosRes />
      <PreciosRes />
      <Contactenos />
      <ContactoRes />
      <Footer />
    </>
  );
}
