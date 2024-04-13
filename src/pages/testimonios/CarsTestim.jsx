import { useEffect, useState } from "react";
import { list } from "../../api/testimonios";
import { baseURLAPI } from "../../config";

export default function CarsTestim() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    const getTestim = async () => {
      const res = (await list()).data;
      setTestimonios(res);
    };

    getTestim();
  }, []);

  return (
    <>
      <div className="row cardtest">
        {testimonios.map((val, index) => (
          <div key={index + Date.now()} className="col s12 m12 l6">
            <div className="item-card-test">
              <div className="title-ict">
                <h5>{val.nombre}</h5>
                <div className="divider"></div>
                <h5 className="grey-text">{val.roll}</h5>
              </div>
              <p className="left-align grey-text">{val.cometario}</p>
              <img
                src={`${baseURLAPI}/testimonios/imgtestimonios/${
                  val._id
                }/${Date.now()}`}
                className="circle z-depth-2"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
