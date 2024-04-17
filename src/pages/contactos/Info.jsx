import Form from "./Form";
import { list } from "../../api/contacto";
import { list as horariosList } from "../../api/horarios";
import { useEffect, useState } from "react";

export default function Info() {
  const [contacto, setContacto] = useState({});
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const res = (await list()).data[0];
      setContacto(res);

      const res1 = (await horariosList()).data;
      setHorarios(res1);
    };

    getContact();
  }, []);

  return (
    <>
      <div className="row infcont">
        <div className="col s12 m12 l8 c1">
          <h4>Contáctenos</h4>
          <div className="divider"></div>
          <p className="grey-text">
            Puede contactarnos de cualquier forma que le resulte conveniente.
            Estamos disponibles las 24 horas, los 7 días de la semana, por fax o
            correo electrónico. También puede utilizar el formulario de contacto
            rápido a continuación o visitar nuestro salón personalmente.
          </p>

          <Form />
        </div>
        <div className="col s12 m12 l4 c2">
          <h5>Dirección</h5>
          <div className="grey-text">
            <p>{contacto ? contacto.direccion : "dirección del contacto."}</p>
          </div>
          <div className="divider"></div>
          <h5>Telefonos</h5>
          <div className="grey-text">
            <p>{contacto ? contacto.telefonos : "Teléfonos del contacto."}</p>
          </div>
          <div className="divider"></div>
          <h5>Correo electrónico</h5>
          <div className="grey-text">
            <p>{contacto ? contacto.correos : "Correo del contacto"}</p>
          </div>
          <div className="divider"></div>
          <h5>Resdes Sociales</h5>
          <div className="grey-text">
            <p>{contacto && contacto.instagram && contacto.instagram}</p>
            <p>{contacto && contacto.pinterest && contacto.pinterest}</p>
            <p>{contacto && contacto.facebook && contacto.facebook}</p>
          </div>
          <div className="divider"></div>
          <h5>Horario de apertura</h5>
          <div className="grey-text">
            {horarios.map((val, index) => (
              <p key={index + Date.now()}>
                <b>{val.titulo}:</b> {val.rango}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
