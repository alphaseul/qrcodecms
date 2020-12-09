import React, { Component } from "react";
import "../components/style/home.css";

import {
  MdNavigateNext,
  MdNotificationsActive,
  MdCreditCard,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import icfformation from "../logoIcf.png";
import {
  BsBoxArrowInRight,
  BsPhone,
  BsBoxArrowUp,
  BsChatDots,
  BsLaptop,
  BsTablet,
} from "react-icons/bs";
import { FaReact, FaBootstrap, FaWordpressSimple, FaAws } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  QR Code Protect - La référence Numerique #1 Dans la création
                  D'application Mobile Et Site Web
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div>
                  <Link
                    to="/devis"
                    className="btn btn-lg"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#85139e",
                      color: "white",
                    }}
                  >
                    {" "}
                    Obtenir un devis maintenant{" "}
                    <MdNavigateNext style={{ color: "white" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className=" jumbotron features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary">
                      <BsLaptop style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Web</h3>
                  <p className="lead mb-0 font-weight-bold">
                    Developpement d'application web performante
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary">
                      <BsTablet style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Tablette</h3>
                  <p className="lead mb-0 font-weight-bold">
                    Application optimiser sur toutes les platteformes
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary">
                      <BsPhone style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Mobile</h3>
                  <p className="lead mb-0 font-weight-bold">
                    Application native simple et performante
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-icons text-center">
          <h1 style={{ marginBottom: "10%" }}>Fonctionnalités</h1>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsBoxArrowInRight style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2>Connexion automatique</h2>
                  <p className="text-justify">
                    Quoi de plus frustrant, lorsque l’on fait du shopping
                    online, d’avoir à s’authentifier à chaque visite. Dans votre
                    app de eCommerce, les clients connus sont reconnus
                    automatiquement. Le login est immédiat et automatique
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <FiShoppingCart style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2> Panier persistant en illimité</h2>
                  <p className="text-justify">
                    Votre mémoire de eCommerçant devient infaillible. Chaque
                    visiteur de votre boutique en ligne possède un panier
                    contenant les produits glanés au gré de ses différentes
                    visites, jusqu’à l’acte d’achat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsBoxArrowUp style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2 className="h2">Lien universels</h2>
                  <p className="text-justify">
                    Chaque page de votre app possède une URL. Toutes les pages
                    sont accessibles depuis un moteur de recherche. Si l’app est
                    installée sur le téléphone, un clic sur un résultat de
                    recherche déclenche l’ouverture de l’app directement sur la
                    page attendue
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsChatDots style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2>Chat en ligne</h2>
                  <p className="text-justify">
                    Ouvrez un canal de discussion entre vos utilisateurs. Un
                    simple chat pour des milliers de conversations pour une app
                    toujours plus vivante et attractive
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <MdCreditCard style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2>Paiement en un clic</h2>
                  <p className="text-justify">
                    Il n’a jamais été aussi facile d’acheter un produit dans
                    votre app de eCommerce. Activez Apple Pay, Google Pay
                    (soon), Pay Pal et gommez toutes les frictions durant le
                    processus d’achat
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <MdNotificationsActive style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <h2>Push notifications</h2>
                  <p className="text-justify">
                    Le moyen le plus direct pour interagir avec vos utilisateurs
                    et le moyen le plus rapide pour les faire retourner dans
                    votre app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="jumbotron">
            <h1>Nous utilisons</h1>
            <div className="d-flex justify-content-around container">
              <div>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaReact
                    style={{ width: "100%", height: "100%", color: "#85139e" }}
                  />
                  <p>
                    <b>REACT</b>
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaBootstrap
                    style={{ width: "100%", height: "100%", color: "#85139e" }}
                  />
                  <p>
                    <b>BOOTSTRAP</b>
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="https://aws.amazon.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaAws
                    style={{ width: "100%", height: "100%", color: "#85139e" }}
                  />
                  <p>
                    <b>AWS</b>
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="https://flutter.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <SiFlutter
                    style={{ width: "100%", height: "100%", color: "#85139e" }}
                  />
                  <p>
                    <b>Flutter</b>
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="https://wordpress.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaWordpressSimple
                    style={{ width: "100%", height: "100%", color: "#85139e" }}
                  />
                  <p>
                    <b>Wordpress</b>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testimonials text-center bg-dark"
          style={{ color: "white" }}
        >
          <div className="container">
            <h2 className="mb-5">Ils nous font confiance</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <a
                    href="https://aws.amazon.com/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      className="rounded mb-3"
                      src={icfformation}
                      alt="inter"
                      style={{ backgroundColor: "blue" }}
                    />
                    <h5>Boucherie Rahman</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
