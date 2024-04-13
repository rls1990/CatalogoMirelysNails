import { useEffect, useState } from "react";
import M from "materialize-css";
import { list } from "../../api/preguntas";

export default function Acordion() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const getPregunt = async () => {
      const res = (await list()).data;
      setPreguntas(res);
      console.log(res);
    };

    getPregunt();
  }, []);

  useEffect(() => {
    let elems = document.querySelectorAll(".collapsible.popout");
    M.Collapsible.init(elems, { accordion: false });
  }, [preguntas]);

  return (
    <>
      <div className="container">
        <ul className="collapsible popout">
          {preguntas.map((val, index) => (
            <li key={index + Date.now()}>
              <div className="collapsible-header">{val.pregunta}</div>
              <div className="collapsible-body">
                <span className="left-align">
                  <p>{val.respuesta}</p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
