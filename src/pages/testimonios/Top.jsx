import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <>
      <div className="eqtop">
        <div className="container">
          <img src="/img/slide-img-3.png" className="imgte" alt="" />
          <h3>Testimonios</h3>
        </div>
        <div className="readcte">
          <div className="lisitte left-align">
            <Link to="/">Home</Link>
            <ArrowForwardIosOutlinedIcon />
            <a className="servicios active" href="#!">
              Testimonios
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
