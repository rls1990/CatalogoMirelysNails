import { Link } from "react-router-dom";

export default function Sect1() {
  return (
    <>
      <div className="row servsec1">
        <div className="col s12 m6 l6">
          <div className="contsect1serv">
            <h4 className="left-align">Por qué Elejirnos?</h4>
            <div className="divider"></div>
            <p className="grey-text left-align">
              En nuestro salón de manicure, nos enorgullece ofrecerte una
              experiencia excepcional donde el cuidado y la belleza de tus manos
              son nuestra máxima prioridad. Nuestro equipo altamente capacitado
              de estilistas y técnicos de uñas está comprometido en brindarte un
              servicio personalizado y de calidad, utilizando productos de
              primera categoría.
              <br />
              <br />
              Además, nos destacamos por nuestra atención al detalle y por estar
              al tanto de las últimas tendencias en el mundo de la manicura. Si
              estás buscando un lugar donde recibir un trato especial y obtener
              resultados espectaculares, no dudes en elegirnos.
            </p>

            <Link to="/contactos" className="btn left">
              Contáctenos
            </Link>
          </div>
        </div>

        <div className="col s12 m6 l6">
          <img src="/img/home-1-387x440.png" alt="" />
        </div>
      </div>
    </>
  );
}
