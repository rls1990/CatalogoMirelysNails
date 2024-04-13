import "./Elijanos.css";

export default function Elijanos() {
  return (
    <>
      <div className="row elij" style={{ marginTop: 70 }}>
        <div className="col s12 m12 l6">
          <img src="img/home-1-387x440.png" className="eliimg" alt="" />
        </div>
        <div className="col s12 m12 l6">
          <h4>Por qué ser nuestros Clientes?</h4>
          <div className="divider"></div>
          <p className="p1">
            Nuestro salón tiene como objetivo brindar la mejor experiencia en
            diseño de uñas y un servicio al cliente de primer nivel.
          </p>
          <p className="p2">
            Usamos productos corporales orgánicos y totalmente naturales, marcas
            y colores de esmaltes difíciles de encontrar, iPads en cada asiento
            y un menú de bebidas con jugos recién exprimidos y cafés
            artesanales.
          </p>
        </div>
      </div>
    </>
  );
}
