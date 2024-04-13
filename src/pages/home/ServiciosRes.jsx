import { Link } from "react-router-dom";
import "./ServiciosRes.css";
import { useEffect, useState } from "react";
import { list } from "../../api/servicios.js";
import { baseURLAPI } from "../../config.js";

export default function ServiciosRes() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = (await list()).data.slice(0, 3);
      if (res) {
        setLista(res);
      }
    };
    getList();
  }, []);

  return (
    <>
      <div className="row servr">
        <div className="col s12 m12 l8">
          <div className="row">
            {lista.map((val, index) => (
              <div key={index + Date.now()} className="col s12 m6 l6 col-serv">
                <img
                  src={`${baseURLAPI}/servicios/imgservicio/${
                    val._id
                  }/${Date.now()}/medium`}
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="div-tc">
                  <h4>{val.nombre}</h4>
                  <p>{val.descripcion}</p>
                </div>
              </div>
            ))}
            <div className="col s12 m6 l6 col-serv">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Link to="/servicios" className="btn waves-effect waves-light">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l4 img-ds" style={{ overflow: "hidden" }}>
          <img src="/img/home-3-1-974x626.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
