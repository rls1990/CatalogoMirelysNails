/* eslint-disable react/prop-types */
import "./EquipoRes.css";
import { Link } from "react-router-dom";
import { list } from "../../api/equipo.js";
import { useEffect, useState } from "react";
import { baseURLAPI } from "../../config.js";

export default function EquipoRes() {
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
      <div className="row eqres">
        <div className="title-eqres container">
          <h5>Conozca a nuestros expertos</h5>
          <div className="divider"></div>
          <p>
            Empleamos a los mejores manicuristas y pedicuristas de la industria.
            También educamos a nuestros propios especialistas galardonados
            mediante capacitación constante. Aquí están los talentos más
            destacados de nuestro equipo que hacen realidad tus sueños.
          </p>
        </div>

        <div className="row">
          {lista.map((val, index) => (
            <div key={index + Date.now()} className="col l4 m6 s12">
              <Card
                id={val._id}
                title={val.nombre}
                descripcion={val.cometario}
                image={`${baseURLAPI}/equipo/imgmiembro/${
                  val._id
                }/${Date.now()}/medium`}
              />
            </div>
          ))}
        </div>
        <div className="row" style={{ paddingTop: 20 }}>
          <Link className="btn waves-effect waves-light" to="/equipo">
            Ver todo el equipo
          </Link>
        </div>
      </div>
    </>
  );
}

function Card({ id, title, descripcion, image }) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img
            style={{ width: "100%" }}
            className="z-depth-2"
            src={image}
            draggable={false}
            alt=""
          />
          <span className="card-title" style={{ marginTop: 20 }}>
            {title}
          </span>
          <div className="cdiv divider"></div>
          <p className="grey-text truncate">{descripcion}</p>
        </div>
        <div className="card-action">
          <Link to={`/miembro/${id}`}>Perfil</Link>
        </div>
      </div>
    </>
  );
}
