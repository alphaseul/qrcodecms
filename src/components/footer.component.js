import React, { Component } from "react";
import "../components/style/footer.css";
import logo from "../logo2.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="footerUp page-footer font-small indigo">
          <div
            className="container text-center text-md-left"
            style={{ paddingTop: "5%", paddingBottom: "5%" }}
          >
            <div className="row">
              <hr className="clearfix w-100 d-md-none"></hr>

              <div className="col-md-3 mx-auto">
                <img
                  src={logo}
                  width="250"
                  height="250"
                  className="d-inline-block align-top"
                  alt="qrcode logo"
                />
              </div>

              <hr className="clearfix w-100 d-md-none"></hr>

              <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  QR code Protect
                </h5>

                <ul className="alink list-unstyled">
                  <li>
                    <a href="#!">Servives</a>
                  </li>
                  <li>
                    <a href="#!">Blog</a>
                  </li>
                  <li>
                    <a href="#!">Devis Gratuit</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none"></hr>

              <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  A Propos
                </h5>

                <ul className="alink list-unstyled">
                  <li>
                    <a href="#!">Qui sommes-nous</a>
                  </li>
                  <li>
                    <a href="#!">Mentions légales</a>
                  </li>
                  <li>
                    <a href="#!">CGU</a>
                  </li>
                  <li>
                    <a href="#!">CGV</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="footerDown footer-copyright text-center py-3">
          QR code Protect © Tous droits réservés
        </div>
      </div>
    );
  }
}

export default Footer;
