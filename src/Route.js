import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import Annonces from "./components/annonces.component";
import AddAnnonce from "./components/add-annonce.component";
import AddCategorie from "./components/add-categorie.component";
import Factures from "./components/facture.component";
import Clients from "./components/clients.component";
import Dashboard from "./components/dashboard.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Devis from "./components/devis.component";
import Contact from "./components/contact.component";
import OffresSite from "./page/OffresSite";
import OffresApplication from "./page/OffresApplication";

const MyRoute = (props) => {
  return (
    <div>
      {props.currentUser ? (
        <Switch>
          <Route exact path={["/"]} component={Dashboard} />
          <Route path="/user" component={BoardUser} />
          <Route path="/clients" component={Clients} />
          <Route path="/annonces" component={Annonces} />
          <Route path="/add-annonce" component={AddAnnonce} />
          <Route path="/add-categorie" component={AddCategorie} />
          <Route path="/factures" component={Factures} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/connexion" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/devis" component={Devis} />
          <Route path="/contact" component={Contact} />
          <Route path="/offres-site" component={OffresSite} />
          <Route path="/offres-application" component={OffresApplication} />
        </Switch>
      )}
    </div>
  );
};

export default MyRoute;
