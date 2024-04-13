/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  ExpandMore,
  Facebook,
  KeyboardArrowRight,
  Mail,
  Menu,
  MenuOpen,
  MoreVert,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import M from "materialize-css";

export default function Navbar() {
  return (
    <>
      <Pc />
      <Cell />
    </>
  );
}

function Cell() {
  const [sidenavShow, setsidenavShow] = useState(false);

  const handleClick = (e) => {
    // Comprobar si la URL actual es igual a la URL del enlace
    if (window.location.pathname === e.target.pathname) {
      e.preventDefault(); // Prevenir la recarga de la página
    }
  };

  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      coverTrigger: false,
      alignment: "left",
      hover: false,
    });
  }, []);

  return (
    <>
      <div className="navbar-fixed hide-on-large-only" style={{ zIndex: 900 }}>
        <nav className="white black-text" style={{ height: 64, width:"100%" }}>
          <div className="nav-wrapper">
            <span
              href="#"
              className="brand-logo left"
              style={{ marginLeft: 80, lineHeight: "64px" }}
            >
              MirelysNails
            </span>

            <a
              href="#"
              style={{ height: "100%" }}
              onClick={() =>
                sidenavShow ? setsidenavShow(false) : setsidenavShow(true)
              }
              className="left"
            >
              {sidenavShow ? (
                <MenuOpen
                  className="fade-in"
                  style={{ width: 30, height: 30, marginRight: 27 }}
                />
              ) : (
                <Menu
                  className="fade-in"
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 27,
                  }}
                />
              )}
            </a>

            <a
              href="#"
              style={{ height: "100%", marginRight: 30 }}
              className="right dropdown-trigger"
              data-target="more"
            >
              <MoreVert className="fade-in" style={{ width: 30, height: 30 }} />
            </a>

            <div id="more" className="dropdown-content content-more-cell">
              <div className="content-moreul-cell z-depth-1">
                <ul>
                  <li>
                    <span>
                      <b>Free Call: </b>(073) 123-12-12
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Opening Hours:</b>Mn-Fr: 10 am-8 pm
                    </span>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        padding: "14px 16px",
                      }}
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <ul
        className={
          sidenavShow
            ? "sidenav show-sidenav hide-on-large-only"
            : "sidenav hide-on-large-only"
        }
      >
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/equipo" onClick={handleClick}>
            Equipo
          </Link>
        </li>
        <li>
          <Link to="/servicios" onClick={handleClick}>
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/precios" onClick={handleClick}>
            Precios
          </Link>
        </li>
        <li>
          <Link to="/preguntas" onClick={handleClick}>
            Preguntas
          </Link>
        </li>
        <li>
          <Link to="/testimonios" onClick={handleClick}>
            Testimonios
          </Link>
        </li>
        <li>
          <Link to="/galeria" onClick={handleClick}>
            Galería
          </Link>
        </li>
        <li>
          <Link to="/contactos" onClick={handleClick}>
            Contactos
          </Link>
        </li>
      </ul>
    </>
  );
}

function Pc() {
  const [navFix, setNavFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const navC = nav.getBoundingClientRect();
      if (navC.width > 0) setNavFix(navC.top <= 0);
      else if (navC.width === 0) {
        setNavFix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navFix]);

  const handleClick = (e) => {
    // Comprobar si la URL actual es igual a la URL del enlace
    if (window.location.pathname === e.target.pathname) {
      e.preventDefault(); // Prevenir la recarga de la página
    }
  };

  return (
    <>
      <div className="fixnav show-on-large-only" style={{ zIndex: 900 }}>
        <nav
          className={
            navFix
              ? "white black-text z-depth-1 nav-fix-tsh"
              : "white black-text no-shadow"
          }
        >
          <div
            className="nav-wrapper"
            style={{ paddingLeft: 50, paddingRight: 50 }}
          >
            <span href="#" className="brand-logo center">
              MirelysNails
            </span>

            <ul className="left hide-on-med-and-down">
              <li className="nav-pc-l">
                <Link className="expand" to="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="nav-pc-l">
                <Link className="expand" to="/equipo" onClick={handleClick}>
                  Equipo
                </Link>
              </li>
              <li className="nav-pc-l">
                <Link className="expand" to="/servicios" onClick={handleClick}>
                  Servicios
                </Link>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li className="nav-pc-r">
                <a
                  href="#"
                  className="expand dropdown-trigger"
                  data-target="more-Opt"
                >
                  Otros
                  <ExpandMore className="otros" />
                </a>

                <div id="more-Opt" className="dropdown-content content-more-pc">
                  <div className="content-moreul-pc z-depth-1">
                    <ul>
                      <li>
                        <Link to="/precios" onClick={handleClick}>
                          <KeyboardArrowRight />
                          Precios
                        </Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <Link to="/preguntas" onClick={handleClick}>
                          <KeyboardArrowRight />
                          Preguntas
                        </Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <Link to="/testimonios" onClick={handleClick}>
                          <KeyboardArrowRight />
                          Testimonios
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-pc-r">
                <Link className="expand" to="/galeria" onClick={handleClick}>
                  Galería
                </Link>
              </li>
              <li className="nav-pc-r">
                <Link className="expand" to="/contactos" onClick={handleClick}>
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
