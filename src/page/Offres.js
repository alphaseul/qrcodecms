import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/nostarifs.css";

export default function Offres() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Offres site web</h2>
            <p>
              Avoir un site web n'a jamais été aussi facile. Optez pour le
              forfait qui correspond à vos besoins Impossible de faire plus
              simple
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <h3>Basic</h3>
                <h4>
                  299,00<sup>€</sup>
                  <span>
                    <br />
                  </span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Site vitrine
                  </li>
                  <li>
                    <i className="bx bx-check"></i> 3 pages
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Un nom de domaine gratuit a
                    votre image
                  </li>
                </ul>
                <a href="/Contact" className="buy-btn">
                  Commencer
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="box featured">
                <h3>Pro</h3>
                <h4>
                  1900,00<sup>€</sup>
                  <span>ou 300€/Mois pendant 7mois</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> 10 pages
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Domaine gratuit pendant 1 an
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Connexion domaine
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Boite e-mail Personnalisée
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Support premium
                  </li>
                </ul>
                <a href="/Contact" className="buy-btn">
                  Commencer
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="box">
                <h3>eCommerce</h3>
                <h4>
                  3900,00<sup>€</sup>
                  <span>ou 350€/Mois pendant 12mois</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Pages illimitées
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Domaine gratuit pendant 1 an
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Connexion Dommaine
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Boutique en ligne
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Boite e-mail personnalisée
                  </li>
                  <li>
                    <i className="bx bx-check"></i> support premium
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Une tabllette de gestion
                    offerte
                  </li>
                </ul>
                <a href="/Contact" className="buy-btn">
                  Commencer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
