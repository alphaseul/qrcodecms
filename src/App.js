import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import Annonces from "./components/annonces.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import logo from "./qrcode-logo.png";
import Sidebar from "./SideBar";
import AddAnnonce from "./components/add-annonce.component";
import AddCategorie from "./components/add-categorie.component";
import Factures from "./components/facture.component";
import Clients from "./components/clients.component";
import Footer from "./components/footer.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="Login">
                {currentUser && (
                  <img
                    src={logo}
                    width="250"
                    height="50"
                    className="d-inline-block align-top"
                    alt="qrcode logo"
                  />
                )}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Link to={"/"} className="navbar-brand">
                  {!currentUser && (
                    <img
                      src={logo}
                      width="250"
                      height="50"
                      className="d-inline-block align-top"
                      alt="qrcode logo"
                    />
                  )}
                </Link>
                <div className="navbar-nav mr-auto">
                  {currentUser && (
                    <li className="nav-item">
                      <Sidebar
                        pageWrapId={"page-wrap"}
                        outerContainerId={"outer-container"}
                      />
                    </li>
                  )}
                  <Nav className="mr-auto">
                    <li className="nav-item">
                      <Nav.Link>
                        <Link to={"/home"} className="nav-link text-dark ">
                          <b>ACCUEIL</b>
                        </Link>
                      </Nav.Link>
                    </li>
                    {!currentUser && (
                      <li className="nav-item">
                        <Nav.Link>
                          <Link to={"/apropos"} className="nav-link text-dark ">
                            <b>A PROPOS</b>
                          </Link>
                        </Nav.Link>
                      </li>
                    )}
                    {!currentUser && (
                      <li className="nav-item">
                        <Nav.Link>
                          <Link to={"/devis"} className="nav-link text-dark ">
                            <b>DEVIS</b>
                          </Link>
                        </Nav.Link>
                      </li>
                    )}
                    {!currentUser && (
                      <li className="nav-item">
                        <Nav.Link>
                          <Link to={"/contact"} className="nav-link text-dark ">
                            <b>CONTACT</b>
                          </Link>
                        </Nav.Link>
                      </li>
                    )}
                  </Nav>

                  {currentUser && (
                    <li className="Nav-item">
                      <Link to={"/annonces"} className="nav-link text-dark">
                        <b>Annonces</b>
                      </Link>
                    </li>
                  )}
                  {currentUser && (
                    <li className="nav-item">
                      <Link to={"/clients"} className="nav-link text-dark">
                        <b>Mes Clients</b>
                      </Link>
                    </li>
                  )}
                  {currentUser && (
                    <li className="nav-item">
                      <Link to={"/user"} className="nav-link text-dark">
                        <b>User</b>
                      </Link>
                    </li>
                  )}
                  {currentUser ? (
                    <li className="nav-item">
                      <Link
                        to={"/add-annonce"}
                        className="nav-link text-dark"
                      />
                      <Link
                        to={"/add-categorie"}
                        className="nav-link text-dark"
                      />
                      <Link to={"/factures"} className="nav-link text-dark" />
                    </li>
                  ) : (
                    <Redirect to={"/home"}></Redirect>
                  )}
                </div>

                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item text-dark">
                      <Link to={"/profile"} className="nav-link text-dark">
                        <b>Profile</b>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/home"
                        className="nav-link text-dark"
                        onClick={this.logOut}
                      >
                        <b>Déconnexion</b>
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link text-dark">
                        <b>Login</b>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link text-dark">
                        <b>Créer un compte</b>
                      </Link>
                    </li>
                  </div>
                )}
              </Navbar.Collapse>
            </Navbar>
            <div>
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/clients" component={Clients} />
                <Route path="/annonces" component={Annonces} />
                <Route path="/add-annonce" component={AddAnnonce} />
                <Route path="/add-categorie" component={AddCategorie} />
                <Route path="/factures" component={Factures} />
              </Switch>
            </div>
          </div>
        </Router>
        <div className="footer">{!currentUser && <Footer />}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
