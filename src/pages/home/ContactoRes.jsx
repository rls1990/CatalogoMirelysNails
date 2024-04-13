import "./ContactoRes.css";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { list } from "../../api/contacto";
import { list as listaH } from "../../api/horarios";
import { useEffect, useState } from "react";

export default function ContactoRes() {
  const [contacto, setContacto] = useState({});
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = (await list()).data[0];
      if (res) {
        setContacto(res);
      }

      const resH = (await listaH()).data;
      if (res) {
        setLista(resH);
      }
    };
    getList();
  }, []);

  return (
    <>
      <div className="row container cr">
        <div className="col s12 m6 l4">
          <h5>Sobre nosotros</h5>
          <div className="divider"></div>
          <p>
            Mirelys Nails Salon ofrece una amplia gama de servicios para uñas y
            tratamientos para la piel desde 1999.
          </p>
        </div>

        <div className="col s12 m6 l4">
          <h5>Horario de apertura</h5>
          <div className="divider"></div>
          <p>
            {lista.map((val, index) => (
              <span key={index + Date.now()}>
                <b>{val.titulo}</b>: {val.rango}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="col s12 m6 l4">
          <h5>Información del contacto</h5>
          <div className="divider"></div>
          <span className="c3ci">
            <LocationOnOutlinedIcon />
            <p>
              {contacto.direccion}
              <br />
            </p>
          </span>
          <span className="c3ci">
            <LocalPhoneOutlinedIcon />
            <p>
              {(contacto.telefonos + "").split(",").map((val, index) => (
                <span key={index + Date.now()}>
                  {val}
                  <br />
                </span>
              ))}
            </p>
          </span>
          <span className="c3ci">
            <EmailOutlined />
            <p>{contacto.correos}</p>
          </span>
        </div>
      </div>
    </>
  );
}
