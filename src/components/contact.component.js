import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../components/style/contact.css";
import { Formik } from "formik";
import userService from "../services/user.service";

const msg = {
  to: "alphaseul3@gmail.com",
  from: "dev@qrcode-protect.com",
  subject: " ",
  html: " ",
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: true,
    };
  }
  render() {
    let { validate } = this.state;

    return (
      <div>
        {validate && (
          <div className="container d-flex contact my-4 bg-light">
            <div className="imageContact"></div>
            <div className="formContact d-flex align-items-center">
              <div className="formInside">
                <Formik
                  initialValues={{
                    name: " ",
                    email: " ",
                    message: " ",
                  }}
                  onSubmit={(values) => {
                    this.setState((state) => ({ validate: false }));
                    msg.subject = values.name + " " + values.email;
                    msg.html = values.message;
                    userService.sendmail(msg);
                  }}
                >
                  {({ handleChange, handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit}>
                      <h1>Contactez-nous</h1>
                      <label>Nom</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="name"
                          className="form-control"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Albert Dupont"
                        />
                      </Form.Group>

                      <label>Email address</label>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          name="email"
                          className="form-control"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                        />
                      </Form.Group>

                      <label>Message</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="message"
                          as="textarea"
                          rows={3}
                          className="form-control"
                          value={values.message}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg btnStyle"
                      >
                        <b>ENVOYER</b>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
        {!validate && <h1>Nous vous recontacterons dans les 48H</h1>}
      </div>
    );
  }
}
