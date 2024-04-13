import { useEffect, useState } from "react";
import { list } from "../../api/precios";

export default function TablaPrecios() {
  const [precios, setPrecios] = useState([]);

  useEffect(() => {
    const getPrecios = async () => {
      const res = (await list()).data;
      setPrecios(res);
      console.log(res);
    };

    getPrecios();
  }, []);

  return (
    <>
      <div className="row tablprecsp">
        {precios.map((val, index) => (
          <div key={index + Date.now()} className="col s12 m12 l6 itemtpprec">
            <div className="row">
              <div className="col s6">
                <h5 className="left-align">{val.titulo}</h5>
              </div>
              <div className="col s6">
                <p className="prec right-align">{val.precio}</p>
              </div>
              <div className="col s6">
                <p className="grey-text left-align">{val.duracion}</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </>
  );
}
