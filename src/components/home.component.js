import React, { Component } from "react";
import "../components/style/home.css";
import heroImg from "./style/image/hero-img.png";

import {
  MdNavigateNext,
  MdNotificationsActive,
  MdCreditCard,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import {
  BsBoxArrowInRight,
  BsPhone,
  BsBoxArrowUp,
  BsChatDots,
  BsLaptop,
  BsTablet,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="container mt-2">
          <div className="d-flex justify-content-center align-items-center row">
            <div className="col-sm-6">
              <h2 className="h1">QR Code Protect</h2>
              <h2>
                La référence Numerique #1 Dans la création D'application Mobile
                Et Site Web
              </h2>
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
            <div className=" col-sm-6 heroImg">
              <img src={heroImg} alt="heroImg" className="img" />
            </div>
          </div>
        </section>

        <section className=" jumbotron features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <Link class="link bob-on-hover col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 box">
                  <div className="features-icons-icon d-flex">
                    <i className="m-auto text-primary">
                      <BsLaptop style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Web</h3>
                  <p>Developpement d'application web performante</p>
                </div>
              </Link>

              <Link className="col-lg-4 link bob-on-hover">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 box">
                  <div className="features-icons-icon d-flex">
                    <i className="m-auto text-primary">
                      <BsTablet style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Tablette</h3>
                  <p>Application optimiser sur toutes les platteformes</p>
                </div>
              </Link>
              <Link className="col-lg-4 link bob-on-hover">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3 box">
                  <div className="features-icons-icon d-flex">
                    <i className="m-auto text-primary">
                      <BsPhone style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Mobile</h3>
                  <p>Application native simple et performante</p>
                </div>
              </Link>
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
      </div>
    );
  }
}
