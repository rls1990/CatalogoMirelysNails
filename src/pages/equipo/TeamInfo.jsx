/* eslint-disable react/prop-types */
import "./TeamInfo.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link } from "react-router-dom";
import { list } from "../../api/equipo.js";
import { useEffect, useState } from "react";
import { baseURLAPI } from "../../config.js";

export default function TeamInfo() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = (await list()).data;
      if (res) {
        setLista(res);
      }
    };
    getList();
  }, []);

  return (
    <>
      <div className="tinfe row">
        <div className="col s12 m12 l4">
          <div style={{ paddingLeft: "3%", paddingRight: "2%" }}>
            <h4 className="left-align">Nuestro Equipo</h4>
            <div className="divider"></div>
            <p className="left-align">
              En nuestra empresa de manicura, contamos con un completo catálogo
              de equipos de alta calidad que te permitirán brindar servicios
              profesionales de manicura. Nuestro equipo está diseñado pensando
              en la comodidad y eficiencia de nuestros clientes y para
              garantizar resultados impecables en cada sesión.
            </p>

            <FormatQuoteIcon
              style={{ width: 70, height: 70, color: "#E3E3E3" }}
            />
            <h5 className="left-align">¡Unas manos bonitas dan confianza!</h5>
          </div>
        </div>

        <div className="col s12 m12 l8">
          <div className="row">
            {lista.map((val, index) => (
              <div key={index + Date.now()} className="col l4 m4 s6">
                <CardTeam
                  img={`${baseURLAPI}/equipo/imgmiembro/${
                    val._id
                  }/${Date.now()}/medium`}
                  title={val.nombre}
                  subt={val.roll}
                  link={`/miembro/${val._id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CardTeam({ title, subt, img, link }) {
  return (
    <>
      <div className="card hoverable">
        <div className="card-image">
          <img src={img} />
        </div>
        <div className="card-content">
          <span className="card-title black-text">{title}</span>
          <div className="divider divcard"></div>
          <p className="grey-text">{subt}</p>
        </div>
        <div className="card-action">
          <Link to={link}>Ver Perfil</Link>
        </div>
      </div>
    </>
  );
}
