/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import M from "materialize-css";
import "./CarruselTop.css";
import { list } from "../../api/carrusel.js";
import { baseURLAPI } from "../../config.js";

export default function CarruselTop() {
  const [listImg, setListImg] = useState([]);

  useEffect(() => {
    const getListImg = async () => {
      const res = (await list()).data;
      if (res) {
        setListImg(res);
      }
    };
    getListImg();
  }, []);

  useEffect(() => {
    let elems1 = document.querySelectorAll(".slider");
    M.Slider.init(elems1, { interval: 10000, height: "100vh" });
  }, [listImg]);

  return (
    <>
      <div className="slider-ct slider">
        <ul className="slides">
          {listImg.map((val, index) => (
            <CarruselItem
              key={index + Date.now()}
              id={val._id}
              titulo={val.titulo}
              descripcion={val.descripcion}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function CarruselItem({ id, titulo, descripcion }) {
  const url = `${baseURLAPI}/carruselhome/imgcarruselhome/${id}/${Date.now()}/medium`;
  return (
    <>
      <li>
        <img src="/img/slide-h-b.jpg" />
        <div className="caption center-align">
          <h3>{titulo}</h3>
          <div className="divider"></div>
          <h5>{descripcion}</h5>
        </div>
        <div className="caption-img left-align hide-on-med-and-down">
          <img src={url} className="z-darken-1" alt="" />
        </div>
      </li>
    </>
  );
}
