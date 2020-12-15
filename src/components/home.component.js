import React, { Component } from "react";
import "../components/style/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "./style/image/hero-img.png";
import client1 from "./style/image/clients/client-1.png";
import client2 from "./style/image/clients/client-2.png";
import client3 from "./style/image/clients/client-3.png";
import client4 from "./style/image/clients/client-4.png";
import client5 from "./style/image/clients/client-5.png";
import client6 from "./style/image/clients/client-6.png";

import { BsPhone, BsLaptop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight, BsChatDots, BsBoxArrowUp } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdNotificationsActive, MdCreditCard } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import { GrOptimize } from "react-icons/gr";

export default class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <div>
        <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>QR Code Protect</h1>
                <h2>
                  La référence Numerique #1 Dans la création D'application
                  Mobile Et Site Web
                </h2>
                <div className="d-lg-flex">
                  <a href="#about" class="btn-get-started scrollto">
                    Obtenir un devis maintenant
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={heroImg} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="cliens" className="section-bg cliens" data-aos="zoom-in">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client1} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client2} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client3} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client4} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client5} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={client6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
            </div>

            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i>
                      <BsLaptop />
                    </i>
                  </div>
                  <h4>
                    <Link to="/#">Création de site Web</Link>
                  </h4>
                  <p></p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i>
                      <BsPhone />
                    </i>
                  </div>
                  <h4>
                    <Link to="/#">Développement D'application mobile</Link>
                  </h4>
                  <p></p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i>
                      <AiOutlineQrcode />
                    </i>
                  </div>
                  <h4>
                    <Link to="/#">Création de qr-code</Link>
                  </h4>
                  <p></p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i>
                      <GrOptimize />
                    </i>
                  </div>
                  <h4>
                    <Link to="/#">
                      Optimisation pour les moteurs de recherche (SEO)
                    </Link>
                  </h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" class="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Fonctionnalité</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <i>
                    <BsBoxArrowInRight size={40} style={{ color: "#85139e" }} />
                  </i>

                  <div className="member-info">
                    <h4>Connexion automatique</h4>
                    <p>
                      Quoi de plus frustrant, lorsque l’on fait du shopping
                      online, d’avoir à s’authentifier à chaque visite. Dans
                      votre app de eCommerce, les clients connus sont reconnus
                      automatiquement. Le login est immédiat et automatique
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <i className="icon-check mr-4 text-primary">
                    <FiShoppingCart size={40} style={{ color: "#85139e" }} />
                  </i>
                  <div className="member-info">
                    <h4>Panier persistant en illimité</h4>
                    <p>
                      Votre mémoire de eCommerçant devient infaillible. Chaque
                      visiteur de votre boutique en ligne possède un panier
                      contenant les produits glanés au gré de ses différentes
                      visites, jusqu’à l’acte d’achat
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <i className="icon-check mr-4 text-primary">
                    <BsBoxArrowUp size={40} style={{ color: "#85139e" }} />
                  </i>
                  <div className="member-info">
                    <h4>Lien universels</h4>

                    <p>
                      Chaque page de votre app possède une URL. Toutes les pages
                      sont accessibles depuis un moteur de recherche. Si l’app
                      est installée sur le téléphone, un clic sur un résultat de
                      recherche déclenche l’ouverture de l’app directement sur
                      la page attendue
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <i className="icon-check mr-4 text-primary">
                    <BsChatDots size={40} style={{ color: "#85139e" }} />
                  </i>
                  <div className="member-info">
                    <h4>hat en ligne</h4>

                    <p>
                      Ouvrez un canal de discussion entre vos utilisateurs. Un
                      simple chat pour des milliers de conversations pour une
                      app toujours plus vivante et attractive
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <i className="icon-check mr-4 text-primary">
                    <MdCreditCard size={40} style={{ color: "#85139e" }} />
                  </i>
                  <div className="member-info">
                    <h4>Paiement en un clic</h4>

                    <p>
                      Il n’a jamais été aussi facile d’acheter un produit dans
                      votre app de eCommerce. Activez Apple Pay, Google Pay
                      (soon), Pay Pal et gommez toutes les frictions durant le
                      processus d’achat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <i className="icon-check mr-4 text-primary">
                    <MdNotificationsActive
                      size={40}
                      style={{ color: "#85139e" }}
                    />
                  </i>
                  <div className="member-info">
                    <h4>Notifications push</h4>

                    <p>
                      Le moyen le plus direct pour interagir avec vos
                      utilisateurs et le moyen le plus rapide pour les faire
                      retourner dans votre app
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="footer-newsletter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h4>QR-code newsletter</h4>
                <p></p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="S'inscrire" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
