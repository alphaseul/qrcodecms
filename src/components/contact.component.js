import React, { Component } from "react";
import "../components/style/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: true,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <section id="contact" class="contact">
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
                  <p>16 Boulevard Paul Hayez Douai 59500</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope">
                    <AiOutlineMail />
                  </i>
                  <h4>Email:</h4>
                  <p>agence@qrcode-protect.fr</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone">
                    <MdCall />
                  </i>
                  <h4>Call:</h4>
                  <p>+33 7 67 75 53 08</p>
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
              <form className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Nom</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Sujet</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label for="name">Méssage</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">ENVOYER</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
