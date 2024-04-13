import "./Header.css";
import { Facebook, Mail, Pinterest, YouTube } from "@mui/icons-material";

export default function HeaderTop() {
  return (
    <>
      <div className="header-top show-on-large-only">
        <div style={{ display: "flex", marginLeft: "3%" }}>
          <div style={{ display: "flex" }}>
            <p className="header-top-title">Llamada gratis: </p>
            <p className="header-top-item">(073) 123-12-12 </p>
          </div>

          <div style={{ display: "flex", marginLeft: "3%" }}>
            <p className="header-top-title">Horario de apertura: </p>
            <p className="header-top-item">
              De lunes a viernes: 10 a. m. a 8 p. m.
            </p>
          </div>
        </div>

        <div
          style={{ display: "flex", position: "absolute", top: 17, right: 10 }}
        >
          <Facebook
            width={24}
            style={{ marginRight: 20 }}
            className="icon-contacto"
          />
          <Mail
            width={24}
            style={{ marginRight: 20 }}
            className="icon-contacto"
          />
          <Pinterest
            width={24}
            style={{ marginRight: 20 }}
            className="icon-contacto"
          />
          <YouTube
            width={24}
            style={{ marginRight: 20 }}
            className="icon-contacto"
          />
        </div>
      </div>
    </>
  );
}
