import { Formik } from "formik";
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
      <section className="contact">
        <Formik
          initialValues={{
            name: "",
            email: "",
            tel: "",
            entreName: "",
            entreEmail: "",
            entreTel: "",
            preEntre: "",
            budget: "",
            langue: " ",
            color: "",
            varColor: "",
            eCommerce: "",
            gestion: "",
            prestation: "",
          }}
          onSubmit={(values) => {
            this.nextPage();
            console.log(
              values.name,
              values.email,
              values.tel,
              values.entreName,
              values.entreEmail,
              values.entreTel,
              values.preEntre,
              values.budget,
              values.langue,
              values.color,
              values.varColor,
              values.eCommerce,
              values.gestion,
              values.prestation
            );
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <div className="container mt-3 mb-3 mx-auto">
              {page === 0 && (
                <form onSubmit={this.nextPage} className="php-email-form">
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
                    <label>Nom du propriétaite</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse mail du propriétaire</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Numéro de téléphone du propriétaire</label>
                    <input
                      type="tel"
                      id="number"
                      name="tel"
                      onChange={handleChange}
                      className="form-control "
                    />
                  </div>
                  <div className="form-group">
                    <label>Nom de de votre entreprise</label>
                    <input
                      type="text"
                      id="nameSocity"
                      name="entreName"
                      onChange={handleChange}
                      className="form-control "
                    />
                  </div>
                  <div className="form-group">
                    <label>Email de de votre entreprise</label>
                    <input
                      type="email"
                      id="emailSocity"
                      name="entreEmail"
                      onChange={handleChange}
                      className="form-control "
                    />
                  </div>
                  <div className="form-group">
                    <label>Numéro de de votre entreprise</label>
                    <input
                      type="tel"
                      id="numberSocity"
                      name="entreTel"
                      onChange={handleChange}
                      className="form-control "
                    />
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
                <form onSubmit={this.nextPage} className="php-email-form">
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
                    <label>Présentez-nous votre entreprise ?</label>
                    <textarea
                      type="text"
                      name="preEntre"
                      onChange={handleChange}
                      className="form-control"
                      id="textarea"
                    />
                  </div>
                  <div className="form-group">
                    <label>Quel est votre budget ?</label>
                    <input
                      type="text"
                      name="budget"
                      onChange={handleChange}
                      className="form-control"
                      id="budget"
                    />
                  </div>
                  <div className="form-group">
                    <label>Categorie de projet</label>
                    <div className="d-flex justify-content-around">
                      <div className="form-check ">
                        <input
                          className="form-check-input is-invalid"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label>Site vitrine</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input is-invalid"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label>Site e-commerce</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input is-invalid"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label>Application mobile</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input is-invalid"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label>Media en ligne</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input is-invalid"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label>Support promotionnel</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-gourp">
                    <label>Quelles langues sont concernées ?</label>
                    <input
                      type="text"
                      name="langue"
                      onChange={handleChange}
                      className="form-control"
                      id="language"
                    />
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
                <form onSubmit={this.nextPage} className="php-email-form">
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
                    <label>
                      Quel sera le code couleur de votre site ? Quelle sera la
                      couleur dominante ?
                    </label>
                    <input
                      className="form-control"
                      name="color"
                      onChange={handleChange}
                      type="text"
                      id="color"
                    />
                  </div>
                  <div className="form-goup">
                    <label>
                      Y a-t-il des variation du code coulaur selon les sections
                      ou les pages de votre site ?
                    </label>
                    <input
                      className="form-control"
                      name="varColor"
                      onChange={handleChange}
                      type="text"
                      id="colorVar"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="yes"
                    />
                    <label>OUI</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="no"
                    />
                    <label>NON</label>
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
                <form onSubmit={handleSubmit} className="php-email-form">
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
                    <label>
                      Votre site comprend-t-il une boutique en ligne ? si oui,
                      essayer de précier les modes de livraison et de paiement
                      envisagés, la présence de fonctionnalité de cross-selling
                      ...{" "}
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="eCommerce"
                      onChange={handleChange}
                      id="selling"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Doit-il y avoir un espace client sécurisé par mot de passe
                      ?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="gestion"
                      onChange={handleChange}
                      id="passwordAsk"
                    />
                  </div>
                  <div className="form-group">
                    <label>Quel type de prestation souhaitez-vous ?</label>
                    <input
                      type="text"
                      className="form-control"
                      name="prestation"
                      onChange={handleChange}
                      id="typePrest"
                    />
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
                  Nom : {values.name} <br />
                  Email: {values.email} <br />
                  Tel: {values.tel} <br />
                  Nom de l'entreprise: {values.entreName}
                  <br />
                  Email de l'entreprise: {values.entreEmail}
                  <br />
                  Numero de l'entreprise: {values.entreTel}
                  <br />
                  Presentation: {values.preEntre}
                  <br />
                  Budget: {values.budget}
                  <br />
                  catégorie: {}
                  <br />
                  Langue: {values.langue}
                  <br />
                  couleur du site: {values.color}
                  <br />
                  Variante couleur: {values.varColor}
                  <br />
                  Boutique en ligne: {values.eCommerce}
                  <br />
                  espace client: {values.gestion}
                  <br />
                  Type de prestation: {values.prestation}
                  <br />
                </div>
              )}
            </div>
          )}
        </Formik>
      </section>
    );
  }
}
