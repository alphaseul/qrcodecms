import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from 'react-bootstrap';
import logo from './qrcode-logo.png';
import { Link } from "react-router-dom";
import "./Header.css";
import Sidebar from './SideBar';

function Header(props){
    return(
        <div>
            <Navbar>
                <Navbar.Brand href="Login">
                    <img
                        src={logo}
                        width="250"
                        height="50"
                        className="d-inline-block align-top"
                        alt="qrcode logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar bg="light" variant="dark">
                <Nav>
                    <Nav.Link><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></Nav.Link>
                    <Nav.Link><Link to="/home" style={{ textDecoration: 'none' }}>Accueil</Link></Nav.Link>
                    <Nav.Link><Link to="/annonce" style={{ textDecoration: 'none' }}>Mes Annonces</Link></Nav.Link>
                    <Nav.Link><Link to="/client" style={{ textDecoration: 'none' }}>Mes Clients</Link></Nav.Link>   
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link><Link to="/entreprise" style={{ textDecoration: 'none' }}>Entreprise</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link onClick={props.func} style={{ textDecoration: 'none', color:'red' }}>Déconnexion</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
            </Navbar>
        </div>
    )
}

export default Header;
