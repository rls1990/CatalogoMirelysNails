import { useEffect } from "react";
import "./Galeria.css";
import Top from "./Top";
import Footer from "../home/Footer";
import Info from "./Info";
import ListaImg from "./ListaImg";

export default function Galeria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <Info />
      <ListaImg />
      <Footer />
    </>
  );
}
