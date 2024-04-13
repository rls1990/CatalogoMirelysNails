import { useEffect } from "react";
import "./Testimonios.css";
import Top from "./Top";
import Footer from "../home/Footer";
import Info from "./Info";
import CarsTestim from "./CarsTestim";

export default function Testimonios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <Info />
      <CarsTestim />
      <Footer />
    </>
  );
}
