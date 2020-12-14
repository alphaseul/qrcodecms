import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      {props.currentUser && (
        <div
          className="d-flex flex-column float-left"
          style={{ width: "18%", height: "1000px" }}
        >
          <div
            className="bg-light position-fixed"
            style={{ width: "18%", height: "1000px" }}
          >
            <h1>sidebar</h1>

            <Link to={"/Dashboard"} className="nav-link text-dark">
              <b>Dashboard</b>
            </Link>

            <Link to={"/annonces"} className="nav-link text-dark">
              <b>Annonces</b>
            </Link>

            <Link to={"/clients"} className="nav-link text-dark">
              <b>Mes clients</b>
            </Link>

            <Link to={"/user"} className="nav-link text-dark">
              <b>User</b>
            </Link>

            <Link to={"/profile"} className="nav-link text-dark">
              <b>Profile</b>
            </Link>

            <a
              href="/home"
              className="nav-link text-dark"
              onClick={props.logOut}
            >
              <b>Déconnexion</b>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
