import "./Contactenos.css";
import { useForm } from "react-hook-form";
import {
  PersonOutline,
  EmailOutlined,
  LocalPhoneOutlined,
  DriveFileRenameOutlineOutlined,
  ForwardToInboxOutlined,
} from "@mui/icons-material/";
import { useState } from "react";

import { sendMail } from "../../api/mail";

export default function Contactenos() {
  return (
    <>
      <div className="contact">
        <div className="row">
          <div className="col l6 m8 s12 offset-l4 offset-m4">
            <div className="titlecontact">
              <h5>Ponerse en contacto</h5>
              <div className="divider"></div>
              <p>
                ¿Tiene alguna pregunta? No dude en utilizar el formulario de
                contacto a continuación para ponerse en contacto con nosotros.
                ¡Le responderemos tan pronto como sea posible!
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

function Form() {
  const { register, reset, handleSubmit } = useForm();
  const [key, setKey] = useState(Date.now());

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await sendMail(values);
      if (res) {
        reset();
        setKey(Date.now());
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="row formcont z-depth-1">
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <PersonOutline className="prefix" />
            <input
              id="nombre"
              key={"nombre" + key}
              {...register("nombre", { required: true })}
              type="text"
              className="validate black-text"
            />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="input-field">
            <EmailOutlined className="prefix" />
            <input
              id="correo"
              key={"correo" + key}
              {...register("correo", { required: true })}
              type="email"
              className="validate"
            />
            <label htmlFor="correo">Email</label>
          </div>
          <div className="input-field">
            <LocalPhoneOutlined className="prefix" />
            <input
              id="telefono"
              key={"telefono" + key}
              {...register("telefono", { required: true })}
              type="number"
              className="validate"
            />
            <label htmlFor="telefono">Teléfono</label>
          </div>
          <div className="input-field">
            <DriveFileRenameOutlineOutlined className="prefix" />
            <textarea
              id="mensage"
              key={"mensage" + key}
              {...register("mensage", { required: true })}
              className="materialize-textarea validate"
            ></textarea>
            <label htmlFor="mensage">Mensage</label>
          </div>
          <button className="btn waves-effect waves-light">
            <ForwardToInboxOutlined
              style={{ position: "relative", right: 5, top: 5 }}
            />
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
