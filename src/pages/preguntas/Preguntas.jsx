import { useEffect } from "react";
import "./Preguntas.css";
import Top from "./Top";
import Footer from "../home/Footer";
import Info from "./Info";
import Acordion from "./Acordion";

export default function Preguntas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <Info />
      <Acordion />
      <Footer />
    </>
  );
}
