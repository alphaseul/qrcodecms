import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Navbar} from 'react-bootstrap';

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

import { history } from './helpers/history';
import logo from './qrcode-logo.png';
import Sidebar from './SideBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
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
    const { currentUser} = this.state;

    return (
      <Router history={history}>
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
          <nav className="navbar navbar-expand navbar-dark bg-light">
            <Link to={"/"} className="navbar-brand">
            </Link>
            <div className="navbar-nav mr-auto">
              {currentUser && (
                  <li className="nav-item">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                  </li>
                )}
              <li className="nav-item">
                <Link to={"/home"} className="nav-link text-dark ">
                  <b>Accueil</b>
                </Link>
              </li>
              {currentUser && (
                <li className="Nav-item">
                  <Link to={"/annonces"} className="nav-link text-dark">
                    <b>Annonces</b>
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
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item text-dark">
                  <Link to={"/profile"} className="nav-link text-dark">
                    <b>Profile</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link text-dark" onClick={this.logOut}>
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
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/annonces" component={Annonces}/>
            </Switch>
          </div>
        </div>
      </Router>
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