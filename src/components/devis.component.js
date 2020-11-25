import React, { Component } from "react";
import "../components/style/devis.css";

export default class Devis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
    this.nextPage = this.nextPage.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  nextPage() {
    this.setState((state) => ({ page: state.page + 1 }));
  }
  backPage() {
    this.setState((state) => ({ page: state.page - 1 }));
  }
  render() {
    const { page } = this.state;
    return (
      <div className="container mt-3 mb-3 mx-auto">
        {page === 0 && (
          <form onSubmit={this.nextPage}>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                  }}
                >
                  <h1 className="h2">1</h1>
                </div>
                <p>Renseignements Généraux</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">2</h1>
                </div>
                <p>Présentation du projet</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">3</h1>
                </div>
                <p>Charte graphique</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">4</h1>
                </div>
                <p>Description fonctionnelle</p>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Nom du propriétaite</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label for="email">Adresse mail du propriétaire</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label for="number">Numéro de téléphone du propriétaire</label>
              <input type="tel" id="number" className="form-control " />
            </div>
            <div className="form-group">
              <label for="nameSocity">Nom de de votre entreprise</label>
              <input type="text" id="nameSocity" className="form-control " />
            </div>
            <div className="form-group">
              <label for="emailSocity">Email de de votre entreprise</label>
              <input type="email" id="emailSocity" className="form-control " />
            </div>
            <div className="form-group">
              <label for="numberSocity">Numéro de de votre entreprise</label>
              <input type="tel" id="numberSocity" className="form-control " />
            </div>
            <button
              className="btn btnFirst btn-lg "
              type="submit"
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "100%",
              }}
            >
              SUIVANT
            </button>
          </form>
        )}
        {page === 1 && (
          <form onSubmit={this.nextPage}>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">1</h1>
                </div>
                <p>Renseignements Généraux</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">2</h1>
                </div>
                <p>Présentation du projet</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">3</h1>
                </div>
                <p>Charte graphique</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">4</h1>
                </div>
                <p>Description fonctionnelle</p>
              </div>
            </div>
            <div className="form-group">
              <label for="textarea">Présentez-nous votre entreprise ?</label>
              <textarea type="text" className="form-control" id="textarea" />
            </div>
            <div className="form-group">
              <label for="budget">Quel est votre budget ?</label>
              <input type="text" className="form-control" id="budget" />
            </div>
            <div className="form-group">
              <label>Categorie de projet</label>
              <div className="d-flex justify-content-around">
                <div className="form-check ">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                  />
                  <label for="invalidCheck">Site vitrine</label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                  />
                  <label for="invalidCheck">Site e-commerce</label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                  />
                  <label for="invalidCheck">Application mobile</label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                  />
                  <label for="invalidCheck">Media en ligne</label>
                </div>
                <div className="form-check">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                  />
                  <label for="invalidCheck">Support promotionnel</label>
                </div>
              </div>
            </div>
            <div className="form-gourp">
              <label for="language">Quelles langues sont concernées ?</label>
              <input type="text" className="form-control" id="language" />
            </div>
            <button
              className="btn btn-lg mt-4 mr-1"
              onClick={this.backPage}
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              PRECEDENT
            </button>
            <button
              className="btn btn-lg mt-4"
              type="submit"
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              SUIVANT
            </button>
          </form>
        )}
        {page === 2 && (
          <form onSubmit={this.nextPage}>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">1</h1>
                </div>
                <p>Renseignements Généraux</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">2</h1>
                </div>
                <p>Présentation du projet</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                  }}
                >
                  <h1 className="h2">3</h1>
                </div>
                <p>Charte graphique</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">4</h1>
                </div>
                <p>Description fonctionnelle</p>
              </div>
            </div>
            <div className="form-goup">
              <label for="color">
                Quel sera le code couleur de votre site ? Quelle sera la couleur
                dominante ?
              </label>
              <input className="form-control" type="text" id="color" />
            </div>
            <div className="form-goup">
              <label for="colorVar">
                Y a-t-il des variation du code coulaur selon les sections ou les
                pages de votre site ?
              </label>
              <input className="form-control" type="text" id="colorVar" />
            </div>
            <div className="form-check">
              <input
                class="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="yes"
              />
              <label for="yes">OUI</label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="no"
              />
              <label for="no">NON</label>
            </div>
            <button
              className="btn btn-lg mt-4 mr-1"
              onClick={this.backPage}
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              PRECEDENT
            </button>
            <button
              className="btn btn-lg mt-4"
              type="submit"
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              SUIVANT
            </button>
          </form>
        )}
        {page === 3 && (
          <form onSubmit={this.nextPage}>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">1</h1>
                </div>
                <p>Renseignements Généraux</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">2</h1>
                </div>
                <p>Présentation du projet</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#6f4bf1",
                  }}
                >
                  <h1 className="h2">3</h1>
                </div>
                <p>Charte graphique</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="border border-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "75px", height: "75px" }}
                >
                  <h1 className="h2">4</h1>
                </div>
                <p>Description fonctionnelle</p>
              </div>
            </div>
            <div className="form-group">
              <label for="selling">
                Votre site comprend-t-il une boutique en ligne ? si oui, essayer
                de précier les modes de livraison et de paiement envisagés, la
                présence de fonctionnalité de cross-selling ...{" "}
              </label>
              <textarea type="text" className="form-control" id="selling" />
            </div>
            <div className="form-group">
              <label for="passwordAsk">
                Doit-il y avoir un espace client sécurisé par mot de passe ?
              </label>
              <input type="text" className="form-control" id="passwordAsk" />
            </div>
            <div className="form-group">
              <label for="typePrest">
                Quel type de prestation souhaitez-vous ?
              </label>
              <input type="text" className="form-control" id="typePrest" />
            </div>
            <button
              className="btn btn-lg mt-4 mr-1"
              onClick={this.backPage}
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              PRECEDENT
            </button>
            <button
              className="btn btn-lg mt-4"
              type="submit"
              style={{
                borderRadius: "20px",
                backgroundColor: "#6F4BF1",
                color: "white",
                width: "49%",
              }}
            >
              FIN
            </button>
          </form>
        )}
        {page === 4 && (
          <div className="jumbotron">
            <h1>Recapitulatif</h1>
          </div>
        )}
      </div>
    );
  }
}
