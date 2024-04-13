/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Info.css";
import { useParams } from "react-router-dom";
import { getDiplomasByMiembro, getMiembro } from "../../api/equipo";
import { baseURLAPI } from "../../config";

export default function Info() {
  const [miembro, setMiembro] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMiembroApi = async (id) => {
      const res = (await getMiembro(id)).data;
      setMiembro(res);
    };
    getMiembroApi(id);
  }, []);

  return (
    <>
      <div className="row infomeq">
        <div className="col s12 m12 l4">
          <img
            src={`${baseURLAPI}/equipo/imgmiembro/${id}/${Date.now()}/medium`}
            className="imgm z-depth-1"
            alt=""
          />
        </div>
        <div className="col s12 m12 l8 left-align">
          <h4>{miembro.nombre}</h4>
          <p>{miembro.roll}</p>
          <div className="divider"></div>
          <p>{miembro.cometario}</p>
        </div>
        <Diplomas id={id} />
      </div>
    </>
  );
}

function Diplomas({ id }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const diplomas = async (id) => {
      const res = (await getDiplomasByMiembro(id)).data;
      if (res) {
        setLista(res);
      }
    };
    diplomas(id);
  }, []);

  return (
    <>
      <div className="col l12 m12 s12 dcert">
        <h5 className="center-align">Certificados y Diplomas</h5>
        <div className="divider"></div>

        <div className="row">
          {lista.map((val, index) => (
            <div key={index + Date.now()} className="col l4 m6 s12">
              <img
                className="imgdiplm z-depth-3"
                src={`${baseURLAPI}/diploma/imgdiploma/${
                  val._id
                }/${Date.now()}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
