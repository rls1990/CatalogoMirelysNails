import { useEffect, useState } from "react";
import { list } from "../../api/galeria";
import { baseURLAPI } from "../../config";

export default function ListaImg() {
  const [listServ, setListServ] = useState([]);
  const [listImg, setListImg] = useState([]);
  const [listImgShow, setListImgShow] = useState([]);

  let ad = 0.1;

  useEffect(() => {
    const getServicios = async () => {
      const res = (await list()).data;

      let servicios = [{ nombre: "TODOS", value: "all" }];
      let imagenes = [];

      res.forEach((item) => {
        let index = servicios.findIndex(
          (val) => val.value === item.servicio.nombre
        );
        if (index === -1)
          servicios.push({
            nombre: item.servicio.nombre.toUpperCase(),
            value: item.servicio.nombre,
          });

        imagenes.push({
          nombre: `${baseURLAPI}/galeria/imggaleria/${item._id}/${Date.now()}`,
          servicio: item.servicio.nombre,
        });
      });

      setListServ(servicios);
      setListImg(imagenes);
      setListImgShow(imagenes);
    };

    getServicios();
  }, []);

  const servHandle = ({ target }) => {
    const selected = target.id.split("_")[0];

    let reslist = [];

    if (selected === "all") {
      reslist = listImg;
    } else {
      listImg.forEach((val) => {
        if (val.servicio === selected) reslist.push({ ...val });
      });
    }

    setListImgShow(reslist);
  };

  return (
    <>
      <div className="galmen">
        {listServ.map((item, index) => (
          <span
            className="expand"
            onClick={servHandle}
            key={item.value + "_" + index + "_" + Date.now()}
            id={item.value + "_" + index + "_" + Date.now()}
          >
            {item.nombre}
          </span>
        ))}
      </div>

      <div className="row contmggal container">
        {listImgShow.map((img, index) => (
          <div
            key={index + Date.now()}
            className="col s12 m6 l4 itimggal fade-in"
            style={{ animationDelay: `${(ad += 0.1)}s` }}
          >
            <div className="img-hover-zoom z-depth-1">
              <img
                src={img.nombre}
                className="z-depth-1"
                data-caption="hola hola"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
