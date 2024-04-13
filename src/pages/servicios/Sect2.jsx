import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { list as getServicios } from "../../api/servicios";
import { list as getHorarios } from "../../api/horarios";
import { list as getPrecios } from "../../api/precios";
import { useEffect, useState } from "react";
import { baseURLAPI } from "../../config";

export default function Sect2() {
  const [servicios, setServicios] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [precios, setPrecios] = useState([]);

  useEffect(() => {
    const listServ = async () => {
      const res = (await getServicios()).data;
      setServicios(res);

      const res1 = (await getPrecios()).data.slice(0, 4);
      setPrecios(res1);

      const res2 = (await getHorarios()).data;
      setHorarios(res2);
    };
    listServ();
  }, []);

  return (
    <>
      <div className="sect2serv">
        <h4>Nuestros servicios</h4>
        <div className="divider"></div>

        <div className="row sect2liserv">
          {servicios.map((val, index) => (
            <div
              key={index + Date.now()}
              className="col s12 m6 l4 itemsect2liserv"
            >
              <img
                src={`${baseURLAPI}/servicios/imgservicio/${
                  val._id
                }/${Date.now()}/medium`}
                alt=""
              />
              <h5>{val.nombre}</h5>
              <p className="grey-text">{val.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="row srphorserv">
          <div className="col s12 m6 l4 c1 left-align">
            <h4>Cronograma</h4>

            {horarios.map((val, index) => (
              <div key={index + Date.now()}>
                <h5>{val.titulo}</h5>
                <p className="grey-text">{val.rango}</p>
              </div>
            ))}

            <p style={{ width: "65%" }}>
              Estaremos encantados de verte en cualquier momento en nuestro
              salón.
            </p>

            <Link className="linkc3serv2" to="/contactos">
              Contáctenos
              <ArrowForward />
            </Link>
          </div>
          <div className="col l4 hide-on-med-and-down c2 ">
            <img
              src="/img/overview-1-470x282.jpg"
              className="z-depth-3"
              alt=""
            />
          </div>
          <div className="col s12 m6 l4 c3 right left-align">
            <h4>Precios</h4>

            {precios.map((val, index) => (
              <div key={index + Date.now()}>
                <h5>{val.titulo}</h5>
                <p>DESDE {val.precio}</p>
              </div>
            ))}

            <Link className="linkc3serv2 " to="/precios">
              Ver más
              <ArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
