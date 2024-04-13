import { useEffect, useState } from "react";
import "./TestimoniosRes.css";
import M from "materialize-css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link } from "react-router-dom";
import { list } from "../../api/testimonios.js";
import { baseURLAPI } from "../../config.js";

export default function TestimoniosRes() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = (await list()).data.slice(0, 3);
      if (res) {
        setLista(res);
      }
    };
    getList();
  }, []);

  useEffect(() => {
    let elems1 = document.querySelectorAll(".sliderTest.slider");
    M.Slider.init(elems1, {
      interval: 5000,
      height: "100vh",
      indicators: true,
    });
  }, [lista]);

  return (
    <>
      <div className="testres">
        <div className="title-testres">
          <h3>Testimonios</h3>
        </div>

        <div className="sliderTest slider">
          <ul className="slides">
            {lista.map((val, index) => (
              <li key={index + Date.now()}>
                <div className="caption left-align">
                  <div>
                    <div className="divquottr">
                      <FormatQuoteIcon
                        style={{ width: 60, height: 60, color: "#F0C2B3" }}
                      />
                    </div>

                    <p className="center">{val.cometario}</p>
                    <div className="divquottr">
                      <img
                        src={`${baseURLAPI}/testimonios/imgtestimonios/${
                          val._id
                        }/${Date.now()}`}
                        className="circle z-depth-1 imgstestres"
                        alt=""
                      />
                    </div>
                    <h5 className="center black-text">{val.nombre}</h5>
                    <p className="black-text center">{val.roll}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            className="btn waves-effect waves-light"
            style={{ marginTop: 20 }}
            to="/testimonios"
          >
            Ver más
          </Link>
        </div>
      </div>
    </>
  );
}
