import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./qrcode-logo.png";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div>
      {props.currentUser && (
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to={"/"} className="navbar-brand">
                <img
                  src={logo}
                  width="250"
                  height="50"
                  className="d-inline-block align-top"
                  alt="qrcode logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Link
                to={"/home"}
                className="mr-3 text-dark navbarhover"
                style={{ textDecoration: "none" }}
              >
                <b>ACCUEIL</b>
              </Link>
              <Link
                to={"/#"}
                className="mr-3 text-dark navbarhover "
                style={{ textDecoration: "none" }}
              >
                <b>NOS TARIFS</b>
              </Link>

              <Link
                to={"/contact"}
                className="mr-3 text-dark navbarhover "
                style={{ textDecoration: "none" }}
              >
                <b>SUPPORT</b>
              </Link>
              <div className="dropdown ">
                <p
                  className="align-items-center mt-3"
                  style={{ cursor: "default" }}
                >
                  <b>SERVICES</b>
                </p>
                <div className="dropdown-content">
                  <div className="d-flex flex-column">
                    <Link
                      to={"/connexion"}
                      className="text-dark navbarhover ml-3"
                      style={{ textDecoration: "none" }}
                    >
                      <b>Connexion</b>
                    </Link>

                    <Link
                      to={"/register"}
                      className="text-dark navbarhover ml-3"
                      style={{ textDecoration: "none" }}
                    >
                      <b>S'inscrire</b>
                    </Link>
                    <Link
                      to={"/apropos"}
                      className="text-dark navbarhover ml-3"
                      style={{ textDecoration: "none" }}
                    >
                      <b>A PROPOS</b>
                    </Link>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
