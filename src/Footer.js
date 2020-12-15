import React from "react";
import "./components/style/footer.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaSnapchatSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div>
      {props.currentUser && (
        <div className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>QR-code protect</h3>
                  <p>
                    126 Boulevard Paul Hayez <br />
                    Douai, 59650
                    <br />
                    France <br />
                    <br />
                    <strong>Phone: +33 6 67 43 57 33</strong>
                    <br />
                    <strong>Email:</strong> agence@qrcode-protect.fr
                    <br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Liens utiles</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/home">Acceuil</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">A Propos</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Condition générale</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/contact">Politique de confidentialité</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Nos Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Design Web </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Development Web</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Gestion des produits</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Marketing</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/#">Design Graphique</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Nos Réseaux Sociaux</h4>

                  <div className="social-links mt-3">
                    <a href="/#" className="twitter">
                      <i className="bx bxl-twitter">
                        <FiTwitter />
                      </i>
                    </a>
                    <a href="/#" className="facebook">
                      <i className="bx bxl-facebook">
                        <FiFacebook />
                      </i>
                    </a>
                    <a href="/#" className="instagram">
                      <i className="bx bxl-instagram">
                        <FiInstagram />
                      </i>
                    </a>
                    <a href="/#" className="google-plus">
                      <i className="bx bxl-skype">
                        <FaSnapchatSquare />
                      </i>
                    </a>
                    <a href="/#" className="linkedin">
                      <i className="bx bxl-linkedin">
                        <FaLinkedinIn />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footerDown footer-copyright text-center py-3">
            QR code Protect © Tous droits réservés
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
