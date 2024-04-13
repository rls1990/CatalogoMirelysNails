import { useEffect } from "react";
import "./Equipo.css";
import Top from "./Top";
import TeamInfo from "./TeamInfo";
import Footer from "../home/Footer";

export default function Equipo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Top />
      <TeamInfo />
      <Footer />
    </>
  );
}
