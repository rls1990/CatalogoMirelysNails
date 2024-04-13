/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./Miembro.css";
import Footer from "../home/Footer";
import Top from "./Top";
import Info from "./Info";

export default function Miembro() {
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
