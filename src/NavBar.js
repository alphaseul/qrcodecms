import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./qrcode-logo.png";

const NavBar = (props) => {
  return (
    <div>
      {props.currentUser && (
        <Navbar bg="light" expand="lg">
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
          <Navbar.Collapse>
            <Link
              to={"/home"}
              className="mr-3 text-dark navbarhover "
              style={{ textDecoration: "none" }}
            >
              <b>ACCUEIL</b>
            </Link>
            <Link
              to={"/apropos"}
              className="mr-3 text-dark navbarhover "
              style={{ textDecoration: "none" }}
            >
              <b>A PROPOS</b>
            </Link>

            <Link
              to={"/devis"}
              className="mr-3 text-dark navbarhover "
              style={{ textDecoration: "none" }}
            >
              <b>DEVIS</b>
            </Link>

            <Link
              to={"/contact"}
              className="mr-3 text-dark navbarhover "
              style={{ textDecoration: "none" }}
            >
              <b>CONTACT</b>
            </Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Link
              to={"/connexion"}
              className="text-dark mr-2 navbarhover"
              style={{ textDecoration: "none" }}
            >
              <b>Connexion</b>
            </Link>

            <Link
              to={"/register"}
              className="text-dark mr-2 navbarhover"
              style={{ textDecoration: "none" }}
            >
              <b>S'inscrire</b>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
