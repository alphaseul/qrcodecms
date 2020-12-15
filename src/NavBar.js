import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./qrcode-logo.png";
import "./NavBar.css";
import { RiArrowDownSLine } from "react-icons/ri";

const NavBar = (props) => {
  return (
    <div>
      {props.currentUser && (
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand>
              <a href={"/"} className="navbar-brand">
                <img
                  src={logo}
                  width="250"
                  height="50"
                  className="d-inline-block align-top"
                  alt="qrcode logo"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <a
                href={"/home"}
                className="mr-3 text-dark navbarhover"
                style={{ textDecoration: "none" }}
              >
                <b>ACCUEIL</b>
              </a>
              <a
                href={"/contact"}
                className="mr-3 text-dark navbarhover "
                style={{ textDecoration: "none" }}
              >
                <b>NOS TARIFS</b>
              </a>

              <div className="dropdown mr-3">
                <p
                  className="align-items-center mt-3"
                  style={{ cursor: "default" }}
                >
                  <b>
                    SERVICES <RiArrowDownSLine />
                  </b>
                </p>
                <div className="dropdown-content">
                  <div className="d-flex flex-column ">
                    <a
                      href={"/devis"}
                      className="text-dark navbarhover"
                      style={{ textDecoration: "none" }}
                    >
                      <b>Devis</b>
                    </a>
                    <a
                      href={"/connexion"}
                      className="text-dark navbarhover"
                      style={{ textDecoration: "none" }}
                    >
                      <b>Connexion</b>
                    </a>

                    <a
                      href={"/register"}
                      className="text-dark navbarhover"
                      style={{ textDecoration: "none" }}
                    >
                      <b>S'inscrire</b>
                    </a>
                    <a
                      href={"/apropos"}
                      className="text-dark navbarhover"
                      style={{ textDecoration: "none" }}
                    >
                      <b>A PROPOS</b>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={"/contact"}
                className="text-dark navbarhover "
                style={{ textDecoration: "none" }}
              >
                <b>SUPPORT</b>
              </a>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
