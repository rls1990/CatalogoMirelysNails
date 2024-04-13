import { useEffect } from "react";
import "./Contactos.css";
import Top from "./Top";
import Info from "./Info";
import Footer from "../home/Footer";

export default function Contactos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <Info />
      <Footer />
    </>
  );
}
