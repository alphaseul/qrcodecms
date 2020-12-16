import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/offres.css";

export default function OffresApplication() {
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
            <h2>Offres Application Mobile</h2>
            <p>
              Avoir un application <b>native et cross-plateforme</b> n'a jamais
              été aussi facile. Optez pour le forfait qui correspond à vos
              besoins Impossible de faire plus simple
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <h3>Basic</h3>
                <h4>
                  999,00<sup>€</sup>
                  <span>
                    <br />
                  </span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Application cross-plateforme
                    de base
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Application vitrine
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
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
                  3500,00<sup>€</sup>
                  <span>ou 300€/Mois pendant 12mois</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Application Dynamique
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Gestion d'utilisateur
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Gestion de contenu
                  </li>
                  <li>
                    <i className="bx bx-check"></i> support premium
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
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
                  4500,00<sup>€</sup>
                  <span>ou 350€/Mois pendant 12mois</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Gestion de contenu
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Gestion d'utilisateur
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Connexion utilisateur
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Boutique en ligne
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Application Dynamique
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Support premium
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Une tabllette de gestion
                    offerte offerte
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
