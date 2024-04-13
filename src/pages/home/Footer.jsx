import { Facebook, Mail, Pinterest, YouTube } from "@mui/icons-material";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="fott nav">
        <span className="logo brand-logo left">MirelysNails</span>

        <p className="center">© 2023 privacy policy </p>

        <div className="right-align socialf hide-on-small-only">
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
