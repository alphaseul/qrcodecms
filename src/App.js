import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import SideBar from "./SideBar";
import MyRoute from "./Route";
import NavBar from "./NavBar";

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
          <NavBar currentUser={!currentUser} />
          <SideBar logOut={this.logOut} currentUser={currentUser} />
          <MyRoute currentUser={currentUser} />
          <Footer currentUser={!currentUser} />
        </Router>
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
