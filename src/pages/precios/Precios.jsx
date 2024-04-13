import { useEffect } from "react";
import Top from "./Top";
import "./Precios.css";
import Info from "./Info";
import Footer from "../home/Footer";
import TablaPrecios from "./TablaPrecios";

export default function Precios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Top />
      <Info />
      <TablaPrecios />
      <div className="imgprec">
        <img src="/img/imgprec.JPG" alt="" />
      </div>
      <Footer />
    </>
  );
}
