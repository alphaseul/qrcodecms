import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import"./SideBar.css";
import image from './image.png'

export default props => {
  return (
    <Menu>
      <img
        src={image}
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt="qrcode logo"
    />
      <Link className="menu-item" to="/ajouterannonce">
        Ajouter une annonce
      </Link>
      <Link className="menu-item" to="/ajoutercategorie">
        Ajouter une catégorie
      </Link>
      <Link className="menu-item" to="/ajouterannonce">
        Mes Factures
      </Link>
      <Link className="menu-item" to="/ajouterannonce">
        Paramètres
      </Link>
    </Menu>
  );
};