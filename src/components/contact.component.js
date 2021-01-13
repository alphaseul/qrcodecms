import React, { Component } from "react";
import "../components/style/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { Formik } from "formik";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: false,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    const { validate } = this.state;
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title"></div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map">
                    <GoLocation />
                  </i>
                  <h4>Adresse:</h4>
                  <p>126 Boulevard Paul Hayez, 59500 Douai</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope">
                    <a href="mailto:agence@qrcode-protect.fr">
                      <AiOutlineMail />
                    </a>
                  </i>
                  <h4>Email:</h4>
                  <p>agence@qrcode-protect.fr</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone">
                    <a href="tel:+33 6 67 43 57 33">
                      <MdCall />
                    </a>
                  </i>
                  <h4>Tel:</h4>
                  <p>+33 6 67 43 57 33</p>
                </div>

                <Iframe
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcVNoNm_JwkcRteMmLycJOUk&key=AIzaSyBfe2Zc2SCCBzMc9-BeLIe8bx88w-2r84A"
                  frameborder="0"
                  width="100%"
                  height="290px"
                  style={{ border: "0" }}
                  allowfullscreen
                ></Iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <Formik
                initialValues={{
                  name: " ",
                  email: " ",
                  subject: " ",
                  message: " ",
                }}
                onSubmit={(values) => {
                  this.setState({ validate: true });
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Nom</label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="form-control"
                          id="name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                          required
                        />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                          id="email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                          required
                        />
                        <div className="validate"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Sujet</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        onChange={handleChange}
                        id="subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                        required
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="10"
                        onChange={handleChange}
                        required
                        data-msg="Please write something for us"
                      ></textarea>
                      <div className="validate"></div>
                    </div>
                    {validate && (
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Merci, votre message a été envoyé.
                        </div>
                      </div>
                    )}
                    <div className="text-center">
                      {!validate && <button type="submit">ENVOYER</button>}
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
