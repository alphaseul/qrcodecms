import React, { Component } from "react";
import "../components/style/contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container d-flex contact my-4 bg-light">
        <div className="imageContact"></div>
        <div className="formContact d-flex align-items-center">
          <div className="formInside">
            <form>
              <h1>Contactez-nous</h1>
              <div className="form-group">
                <label for="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Albert Dupont"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label for="select">Votre besoin</label>
                <select class="form-control" id="select">
                  <option>Votre besoin</option>
                  <option>Site Web</option>
                  <option>Application Mobile</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-lg btnStyle"
              >
                <b>ENVOYER</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
