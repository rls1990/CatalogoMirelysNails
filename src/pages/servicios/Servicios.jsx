import { useEffect } from "react";
import Top from "./Top.jsx";
import Sect1 from "./Sect1.jsx";
import Sect2 from "./Sect2.jsx";
import "./Servicios.css";
import Footer from "../home/Footer.jsx";

export default function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <Sect1 />
      <Sect2 />
      <Footer />
    </>
  );
}
