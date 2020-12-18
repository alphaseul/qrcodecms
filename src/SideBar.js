import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import {
  AiOutlineDashboard,
  AiTwotoneShop,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import img from "./logo2.jpg";

export default (props) => {
  return (
    <div>
      {props.currentUser && (
        <div>
          <nav className="navbar navbar-light bg-light mb-3 justify-content-end navdeco">
            <Link to={"/profile"}>
              <FaUserCircle /> Profile
            </Link>
            <a href="/home" onClick={props.logOut}>
              Déconnexion
            </a>
          </nav>
          <div
            className="d-flex flex-column float-left"
            style={{ width: "11%", height: "1000px" }}
          >
            <div className="sidenav">
              <div class="pic">
                <img src={img} className="img-fluid" alt="" />
              </div>
              <Link to={"/Dashboard"}>
                <AiOutlineDashboard /> Dashboard
              </Link>

              <Link to={"/annonces"}>
                <AiTwotoneShop /> Annonces
              </Link>

              <Link to={"/clients"}>
                <AiOutlineUsergroupDelete /> Mes clients
              </Link>

              <Link to={"/user"}>
                <FiUser /> User
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
