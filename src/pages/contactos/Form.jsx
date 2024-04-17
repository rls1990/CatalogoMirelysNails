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

export default function Form() {
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
      <div className="formcontvc">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col s12 m6 l6">
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
            </div>
            <div className="col s12 m6 l6">
              <div className="input-field">
                <PersonOutline className="prefix" />
                <input
                  id="apellido"
                  key={"apellido" + key}
                  {...register("apellido")}
                  type="text"
                  className="validate black-text"
                />
                <label htmlFor="apellido">Apellido</label>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="input-field">
                <EmailOutlined className="prefix" />
                <input
                  id="correo"
                  key={"correo" + key}
                  {...register("correo", { required: true })}
                  type="email"
                  className="validate black-text"
                  autoComplete="true"
                />
                <label htmlFor="correo">Email</label>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="input-field">
                <LocalPhoneOutlined className="prefix" />
                <input
                  id="telefono"
                  key={"telefono" + key}
                  {...register("telefono", { required: true })}
                  type="number"
                  className="validate black-text"
                />
                <label htmlFor="telefono">Teléfono</label>
              </div>
            </div>

            <div className="col s12 m12 m12">
              <div className="input-field">
                <DriveFileRenameOutlineOutlined className="prefix" />
                <textarea
                  id="mensage"
                  key={"mensage" + key}
                  {...register("mensage", { required: true })}
                  className="materialize-textarea validate black-text"
                ></textarea>
                <label htmlFor="mensage">Mensage</label>
              </div>
            </div>
          </div>
          <button className="btn waves-effect waves-light">
            <ForwardToInboxOutlined
              style={{ position: "relative", right: 5, top: 5 }}
            />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </>
  );
}
