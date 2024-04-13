import "./PreciosRes.css";
import { Link } from "react-router-dom";
import { list } from "../../api/precios";
import { useEffect, useState } from "react";

export default function PreciosRes() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = (await list()).data.slice(0, 4);
      if (res) {
        setLista(res);
      }
    };
    getList();
  }, []);

  return (
    <>
      <div className="row precesp">
        <div className="titleprecres">
          <h4>Precios Especiales</h4>
          <div className="divider"></div>
          <p>
            Ofrecemos una amplia variedad de tratamientos asequibles para uñas y
            piel. A continuación puede conocer más sobre el rango de precios de
            nuestros servicios.
          </p>
        </div>
        <div className="row">
          {lista.map((val, index) => (
            <div key={index + Date.now()} className="col l6 m12 s12">
              <div className="row">
                <div className="col s6">
                  <h5>{val.titulo}</h5>
                  <p>{val.duracion}</p>
                </div>
                <div className="col s6">
                  <p className="pricep-pr">{val.precio}</p>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 21 }}>
          <Link className="btn waves-effect waves-light" to="/precios">
            Ver más precios
          </Link>
        </div>
      </div>
    </>
  );
}
